# Variable Binding
m(x) = (println("\tw00t"); println("\tz00t"); println("\t$(x^2)"));
n(x) = foreach(x -> println("\t$(x)"), ["w00t", "z00t", x^2]);

a = [3, "w00t", BigInt(typemax(Int64)), missing, *, 2.3, 'c'];
foreach(x -> (println(x); m(x)), a);
foreach(x -> (println(x); n(x)), a);

b = [3, "w00t", BigInt(typemax(Int64)), missing, 2.3, 'c'];
foreach(x -> (println(x); m(x)), b);
foreach(x -> (println(x); n(x)), b);

# Composition
# (f ∘ g ∘ h ∘ p)("w00t") => "f(g(h(p(w00t))))"
# (f ∘ g ∘ h ∘ p)(99.99) => "f(g(h(p(99.99))))"
f(x)="f($x)";
g(x)="g($x)";
h(x)="h($x)";
p(x)="p($x)";