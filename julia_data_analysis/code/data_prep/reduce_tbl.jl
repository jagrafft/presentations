using CSV, DataFrames, JuliaDB

println("../data/SmarterBalanced/headers/$(ARGS[1]).csv");
headers = [:county_code, :district_code, :school_code, :test_year, :subgroup_id, :total_tested, :grade, :test_id, :met_above, :nearly_met, :not_met, :students_w_scores, :a1_above, :a1_near, :a1_below, :a2_above, :a2_near, :a2_below, :a3_above, :a3_near, :a3_below, :a4_above, :a4_near, :a4_below]

t = loadtable("../data/SmarterBalanced/headers/$(ARGS[1]).csv", datacols=headers)
df = DataFrame(t)

CSV.write("../data/SmarterBalanced/reduced/$(ARGS[1])r.csv", df)