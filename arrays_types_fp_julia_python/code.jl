# Variable Binding
m(x) = (println("\tw00t"); println("\tz00t"); println("\t$(x^2)"));
n(x) = foreach(x -> println("\t$(x)"), ["w00t", "z00t", x^2]);

a = [3, "w00t", BigInt(typemax(Int64)), missing, *, 2.3, 'c'];
foreach(x -> (println(x); m(x)), a);
foreach(x -> (println(x); n(x)), a);

b = [3, "w00t", BigInt(typemax(Int64)), missing, 2.3, 'c'];
foreach(x -> (println(x); m(x)), b);
foreach(x -> (println(x); n(x)), b);

# Immutability

# Laziness
r = 777:7777                # => 777:7777
r |> typeof                 # => UnitRange{Int64}
r |> collect                # => 7001-element Array{Int64,1}: [777, ..., 7777]
r |> collect |> typeof      # => Array{Int64,1}
r[97]                       # => 873
r[97] |> typeof             # => Int64
r[600:614]                  # => 1376:1390
r[600:614] |> typeof        # => UnitRange{Int64}
r[600:614] |> collect       # => 15-element Array{Int64,1}: [1376, ..., 1390]

# FP Example
# from https://github.com/MikeInnes/Lazy.jl
using Lazy
fibs = @lazy 0:1:(fibs + drop(1, fibs));

take(20, fibs) #> (0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181)