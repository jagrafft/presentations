using CSV, DataFrames, JuliaDB

fn = "$(split(ARGS[1], "-")[1])"
path = "../data/SmarterBalanced"
grd = parse(Int64, split(ARGS[1], "-")[end])
grades = (min=grd, max=grd+2)

println("$(path)/reduced/$(fn).csv", ", grades $(grades.min) to $(grades.max)")
t = loadtable("$(path)/reduced/$(fn).csv")

t_ = filter(x -> x.grade >= grades.min && x.grade <= grades.max, t)
df = DataFrame(t_)
CSV.write("$(path)/grade_windows/$(fn)_$(grades.min)-$(grades.max).csv", df)

# test_id_grps = map(x -> filter(y -> y.test_id == x, t), select(t, :test_id) |> unique)

# for x in test_id_grps
#     test = ((select(x, :test_id) |> unique |> first) == 1 ? "ENGL" : "MATH")
#     t_ = filter(x -> x.grade >= grades.min && x.grade <= grades.max, t)
#     df = DataFrame(t_)
#     CSV.write("$(path)_$(test)_$(grades.min)-$(grades.max).csv", df)
# end