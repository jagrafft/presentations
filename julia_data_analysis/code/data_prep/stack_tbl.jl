using CSV, DataFrames, JuliaDB

path = "../data/SmarterBalanced/grade_windows"
hd, tl = glob("$(path)/*.csv") |> reverse |> x -> [x[1], x[2:end]]

df = reduce((a,c) -> append!(a, CSV.File(c) |> DataFrame), tl; init=CSV.File(hd) |> DataFrame)

CSV.write("$(path)/2015-2018_grades.csv", df)