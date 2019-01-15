using CSV, DataFrames, JuliaDB, StatsBase
using GR, Plots, StatPlots; gr(fmt=:png, dpi=400)

path = "data/SmarterBalanced/working"
pngpath = "SmarterBalanced/DataSciPy"

test_labels = Dict(1 => "ELA", 2 => "MATH")

# Columns to use
feats = (:test_year, :grade, :test_id, :subgroup_id, :met_above, :nearly_met, :not_met)

# Create labels from `feats` vector
feats_lab = [string.(feats)...]

categories = [(cat=:met_above, lab="Met and Above", leg=:none, tit=true), (cat=:nearly_met, lab="Nearly Met", leg=:bottomright, tit=false), (cat=:not_met, lab="Not Met", leg=:none, tit=false)]

# Subgroup ID and Description
subgroup_ntuples = [
    (ids=[1], labels=["All Students"], group="All Students"),
    (ids=[3, 4], labels=["Males", "Females"], group="Gender"),
    (ids=[6, 7, 8, 180, 160, 120, 142, 170, 190], labels=["Fluent-English Proficient and English Only", "Initially Fluent English Proficient (IFEP)", "Reclassified Fluent English Proficient (RFEP)", "English Only", "English Learner", "English Learners Enrolled in School in the U.S. Less than 12 Months", "English Learners Enrolled in School in the U.S. 12 Months or More", "Ever-ELs", "To Be Determined (TBD)"], group="English-Language Fluency"),
    (ids=[31, 111], labels=["Economically Disadvantaged", "Not Economically Disadvantaged"], group="Economic Status"),
    (ids=[200, 201, 202, 203, 204, 205, 206, 207], labels=["Black or African American", "American Indian or Alaska Native", "Asian", "Filipino", "Hispanic or Latino", "Native Hawaiian or Pacific Islander", "White", "Two or More Races"], group="Ethnicity for Economically Disadvantaged", tag="DIS"),
    (ids=[220, 221, 222, 223, 224, 225, 226, 227], labels=["Black or African American", "American Indian or Alaska Native", "Asian", "Filipino", "Hispanic or Latino", "Native Hawaiian or Pacific Islander", "White", "Two or More Races"], group="Ethnicity for Not Economically Disadvantaged", tag="!DIS"),
    (ids=[128, 99], labels=["Students with Disability", "Students with No Reported Disability"], group="Disability Status"),
    (ids=[74, 75, 77, 78, 80, 76, 79, 144], labels=["Black or African American", "American Indian or Alaska Native", "Asian", "Filipino", "Hispanic or Latino", "Native Hawaiian or Pacific Islander", "White", "Two or More Races"], group="Ethnicity"),
    (ids=[90, 91, 92, 93, 94, 121], labels=["Not a High School Graduate", "High School Graduate", "Some College (Includes AA Degree)", "College Graduate", "Graduate School or Postgraduate Training", "Declined to State"], group="Parent Education"),
    (ids=[28], labels=["Migrant"], group="Migrant")
]

# Create dictionary of id => label
subgroup_id_labels = reduce((acc, nt) -> (foreach(v -> acc[v[1] |> float] = haskey(nt, :tag) ? "$(v[2]) ($(nt.tag))" : v[2], zip(nt.ids, nt.labels)); acc), subgroup_ntuples; init=Dict())

# Load JuliaDB table
dis = load("$path/2015-2018_grade_windows-Float64-Districts_no_missing.jdb")

### FUNCTIONS ###
# groupby example
gb(fns, tbl, grp, sel) = JuliaDB.groupby(fns, tbl, grp, select=sel, flatten=true)

# Execute `gb` for each category in `categories`
foreach(x -> gb((StatsBase.cov, StatsBase.mean, StatsBase.std, StatsBase.length), dis, (:test_year, :grade, :test_id, :subgroup), x) |> t -> println(string(x), "\n", t), categories .|> x -> x.cat)

### PLOTS ###
# CORRELATION #
# tuple(vcat([4,5,7,8],[9,13,16,19,22] .+ n[1])...) are the columns to include by index (Julia is 1-based)
# met_above -> a*_above; nearly_met -> a*_near; not_met -> a*_below
foreach(tid -> foreach(n -> png((@df DataFrame(filter(x -> x.subgroup_id == 1 && x.test_id == tid, select(dis, tuple(vcat([4,5,7,8],[9,13,16,19,22] .+ n[1])...))) |> collect) StatPlots.corrplot(cols(5:9), title="All Students - $(test_labels[tid])", guidefontsize=5, tickfontsize=3, titlefontsize=12)), "$(pngpath)/All Students-$(n[2])-$(test_labels[tid]).png"), zip([0:1:2]..., ["met_above", "nearly_met", "not_met"])), [1,2])

# Correlation plots of result (met/above, nearly met, not met) and subcategory scores (a1-4 ELA, a1-3 MATH) by Parent Education Level and Test ID
foreach(tid -> foreach(n -> foreach(sg -> png((@df DataFrame(filter(x -> x.subgroup_id == sg && x.test_id == tid, select(dis, tuple(vcat([4,5,7,8],[9,13,16,19,22] .+ n[1])...))) |> collect) StatPlots.corrplot(cols(5:9), title="$(parent_ed_dict[sg |> string]) - $(n[2]) - $(test_labels[tid])", guidefontsize=5, tickfontsize=3, titlefontsize=12)), "$(pngpath)/$(parent_ed_dict[sg |> string])-$(n[2])-$(test_labels[tid]).png"), parent_ed_id), zip([0:1:2]..., ["met_above", "nearly_met", "not_met"])), [1,2])

# DENSITY #
# 2015-2018, aggregate
png(Plots.plot(map(x -> StatPlots.density(select(dis, x.cat) |> collect, title="$(x.lab)", titlefontsize=10, legendfontsize=5, legend=x.leg, group=select(dis, :subgroup) |> collect), categories)..., layout=(3,1)), "$(pngpath)/densities_all.png")

# 2015-2018, by year
png(Plots.plot(map(yr -> Plots.plot(map(x -> (dis = filter(r -> r.test_year == yr, dis); StatPlots.density(select(dis, x.cat) |> collect, legend=:none, group=select(dis, :subgroup) |> collect, title=x.tit ? string(yr) : "")), categories)..., layout=(3,1)), [2015:1:2018]...)..., layout=(1,4), dpi=900), "$(pngpath)/densities_2015-2018_both.png")

# SCATTER #
foreach(x -> png(StatPlots.scatter(select(dis, x.cat) |> collect, title="$(x.lab)", markeralpha=0.5, markersize=1.25, markerstrokewidth=0, group=select(dis, :subgroup) |> collect), "$(pngpath)/scatter-$(x.lab).png"), categories)