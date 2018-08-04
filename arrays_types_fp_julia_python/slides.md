---
title:  Programming Languages Influence How We Code
author: Jason A. Grafft
bibliography: citations.bib
csl: './american-medical-association.csl'
---
# \[Arrays, Types, FP\].ap(Julia, Python)

---

## Motivation
> [Why *Swift* for TensorFlow?](https://github.com/tensorflow/swift/blob/master/docs/WhySwiftForTensorFlow.md)

## Premise
> An inquiry into the engineering solutions provided by two (2) programming languages to the same problem set.

## Contract
- Fun
- Earnest inquiry
- Honest assessment
- Respectful communication
- Fun

:::notes
- My goal is to provide accurate representation of the subjects, and I've done a good job at that.
- Our opinions don't matter, this is a discussion about facts in closed systems.
  - E.g. It is not controversial to say Python isn't a presence in high-performance computing.
:::

## Flow
- Languages
- Ground Truths
- Types
- Arrays/Lists
- Functional Programming

:::notes
- Generics first
    - We'll spend time here to save time when looking at language-specific implementations.
- Types in {Python, Julia} next
    - Lanugage specifics
    - Closer look at `Float..`, `Int..`, `Missing/Null/...`
- Lastly, functional programming
    - We needed coverage of language fundamentals and types to help this make sense.
    - Shrouded in nomenclature and inept thinking -> you can learn, you are capable.
:::

# Languages

---

## 
```python
# CPython
>>> sys.version_info
sys.version_info(major=3, minor=7, micro=0, releaselevel='final', serial=0)
```
```julia
# Julia
Julia Version 0.7.0-rc1.0
Commit 15fcc7c4e6 (2018-07-31 20:29 UTC)
Platform Info:
  OS: Linux (x86_64-linux-gnu)
  CPU: Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz
  WORD_SIZE: 64
  LIBM: libopenlibm
  LLVM: libLLVM-6.0.0 (ORCJIT, broadwell)
```

:::notes
- v3.7 .0
- v0.7rc1
- See *Further Reading*, *Environments*
:::

## Python Characteristics
- Mulitparadigm, interpreted (C)
- Dynamic typing
  - Not declarable, v3.5 introduced type [hints](https://docs.python.org/3/library/typing.html)
- Small core library, widely modularizable
- Flexible

## Python Catch-22s
- Package du jour
- Late binding ("duck" method)
- Pedantically idiomatic

:::notes
- late binding == crash on fail
:::

## Julia Characteristics
- Numerical computing, JIT (predominantly Julia)
- Dynamic typing
  - Optionally declared, compiler enforced
- Multiple dispatch
- Well curated core libraries, extended with packages
- Highly performant

:::notes
- Petaflop—so far C, C++, Fortan, Julia
- Rapidly expanding presence in high performance, high precision, and time critical environments
- Quite odd for a dynamic langauge to include a full type system
:::

## Julia Catch-22s
- Breaking changes
- 3
- Antipatterns are real

[![](img/prealloc.png)](https://docs.julialang.org/en/stable/manual/performance-tips/#Pre-allocating-outputs-1)

:::notes
- Core features like multiple dispatch and type unions can be used to introduce significant performance roadblocks
:::

# Ground Truths

---

##
> Programming is blindly manipulating symbols. —Bret Victor

- Computers are stateless, recursive finite systems
- Architecture choices impose hard limits
- Efficiency via general purposing is an oxymoron
- John von Neumann gave the last word in *First Draft of a Report on the EDVAC*, distributed 30 June 1945

:::notes
- These definitions will help us moving forward.
- What follows *represents* truth about fundamental computational structures. It is a principally sound explanation, not a definitive guide.
  - This is especially true for types, which are bound to their language.
:::

## $\emptyset$ (nothingness)
> Vacuous truth has untenably expansive state for a finite system. $\emptyset\to ()$ is a convention, **not** a definition.
>
>$\therefore$ We are not building on, we are building **round** $\emptyset$.

:::notes
- Actually the empty set...
- Loosely, nothingness is a coproduct of somethingness and we need both for a complete view of the world.
- Extending binary to ternary logic adds essential flexibility to structured reasoning.
- The coproducts introduced by interaction of these categories are consequential for automated reasoning. I will return to this soon.
- *Humans reason much more efficiently about this concept.*
:::

## $\forall x \notin\emptyset$ (nonempty sets)
for messages $A,B$, effects $F,G$, and types $T,U$

| | |
|-|-|
| **message/value** | $\forall x,n \ge 0 \lor x \in\emptyset: A[x,x_{(x+n)}]$ |
| **push** | $A \to F$ |
| **pull** | $A \to F \to B$ |
| **future/promise** | $A \to F[B]$ |
| **actor** | $G[A \to F[B]]$ |

:::notes
- A *map*, or similar strategy, is required each time a pair of square brackets is encountered.
- Don't worry if the symbols make sense, I know you can see the increase in nesting.
:::

## $\forall x \notin\emptyset$
messages $A,B,C$, memory block $x$, and integer $n$

| | |
|-|-|
| **array** | $\forall B \nin\emptyset: B[A]$ |
| **nonempty array** | $\forall A,B \nin\emptyset:B[A]$ |
| **stream** | $\forall A,B,C \nin\emptyset:C[A,B]$ |

## $\forall x \notin\emptyset$
messages $A,B,C$, and types $T,U$

| | |
|-|-|
| **type** | $\forall T \nin\emptyset: T[]$ |
| **typed stream** | $\forall A,B,T \nin\emptyset: T[A,B]$ |
| **streamed types** | $\forall A,B,C,T,U \nin\emptyset: C[U[A],T[B]]$ |

:::notes
- Streams are generally defined as promising (or greater) a *next* value
:::

## ...... .........   ................ ....why?
> Computers perform recursive atomic operations on streams of electrons within a (theoretically) finite space. We need a differentiation strategy. This is expressed by a **type system**.

:::notes
- Types are used for differentiation.
- Turns out there is no imperative for users to explicitly interact with them.
  - This can even be done well (Erlang).
- Here we step from physics to the physical world, so to speak.
:::

# Types

---

## 
> Any time behavior is determined by cases, there is a coproduct involved.[@spivak_category_2014]

:::notes
- A coproduct is the "equal and opposite" reaction... (recall I just mentioned differentiation)
- The quality of the coproducts' assertions depends on the definition of the products.
- Whoever happens to be correct, the problem here is **overhead**: all strategies introduce some degree of entropy.
  - Where, why, what from, and system tolerances are engineering questions.
  - Whether an individual strategy is "justifiable" consumes the common debate. This is drivel.
:::

## Type Systems
> $\{P\}$ $C$ $\{Q\}$ (or thereabout)

| | |
|-|-|
| **P** | Precondition |
| **C** | Command |
| **Q** | Postcondition |

:::notes
- Strength of gaurantee precondition is met correlates with predictability of output.
  - Command may fire with or without precondition match.
- Declarable types not a requirement: Erlang, Javascript, Python.
  - See Erlang for a good example.
- Large enterprise systems written in all three
  - Erlang wins again (telephony)
:::

## Python Types
- Dynamic, Strong
- Programmers provide operating guarantees$\star$
- $valid \lor crash$ (late binding)

![](img/duck_typing.jpg)

:::notes
- $\star$ No answer to the halting problem as of yet, program guarantees are tenuous.
- "Correctness" suffers a strong experience bias here: "not a problem in my world" $\ne$ "not a problem"
  - e.g. "Works fine for us because we only use..."
  - Of course there are systems in production...
- Python's interpreter does not verify the truth of $P$ prior to invoking $C$.
:::

## Python's `Float..`

## Python's `Int..`

## Python's `Null/Missing/...`

## Julia Types
- Dynamic
- Compiler provides operating guarantees$\star$
- Parametrically polymorphic

:::notes
- $\star$ No answer to the halting problem as of yet, program guarantees are tenuous.
- `map :: (a -> b) -> [a] -> [b]`
- Parametric polymorphism is the foundation of generic programming.
- Union{dynamic, full, parametrically polymorphic} rare feature list.
:::

## Julia's `Float64`

## Julia's `Int64`

## Julia's `Missing`

# Arrays/Lists

---

## 
> Lists and arrays are memory structures with *some* guarantee of ordering. Common implementations tend to make isomorphism fragile or expensive, leaving significant feature and performance gaps at scale. The mathematical concept of *range*, typically defined as the *image* (of a function...?) helps us see why

:::notes
- Computationally, isomorphism is an ideal state because it reduces dependence on ordering.
- Lookup expense, guarantees, time, et cetera vary hugely by structure.
:::

## Python `list`
types $A, T_0, \ldots, T_n$, and objects $o_0, \ldots, o_n$

**pointer array**
$$\forall A,T,O\nin\emptyset: A[T_3[O_0], T_1[O_1], T_6[0_2], \ldots, T_n[O_m]]$$

:::notes
- Heterogenous
- Pointers to Python objects--type check each iteration
  - Recall each pair of `[]` indicates a mapping operation
- Room for `Missing/NaN/...`
:::

## NumPy `array`
types A, T, and values $v_0, \ldots, v_n$

**value array**
$$\forall T,v \nin\emptyset: A_T[v_0, v_1, v_2, v_3, ..., v_n]$$

:::notes
- Homogenous
- "[M]eans for array-like Python objects to re-use each other’s data buffers intelligently whenever possible."[@numpy_array_interface_2018]
- Type check on insertion succeeds or fails **operation**, NO room for `Missing/NaN/...`
- `Pandas` adds missing value support and other "convenience" features.
:::

## Thoughts
- *Patterns*
  - Adding features via modules
  - Reduction of overhead via abstraction
- *Antipatterns*
  - Substantial increase in global state
  - Untyped list made strictly typed made more flexibly typed again

:::notes
- I am not sure what is meant by "intelligently whenever possible"
  - I interpret this as an enlargement of already bulky state
- Gains from abstraction are strictured due to architecture
- It takes three packages (Base, NumPy, Pandas) to add missing value support
:::

## Julia Array

# Functional Programming

---

## 
[![John A. DeGoes - "Monad Wars"](img/JAdG-monad_wars.png)](https://twitter.com/jdegoes/status/1022546801457475584/photo/1, "John A. DeGoes on ending 'The Monad Wars'")

:::notes
- There is quite a difference here, and that difference is **global state**.
- Polymorphism es muy bueno
:::

## Composition
> "The study of nonlinear functions is like the study of nonelephants." –John von Neumann

$$f \circ g \circ h \circ p$$

:::notes
- Right-to-left nesting!! $p(h(g(f)))$
- By now we've seen that linear ordering is required for computation.
- These may be extracted from complex data structures, but **they are still linear.**
:::

## FP in Python

## FP in Julia
- Architecturally, the language is favorable to functional approaches

:::notes
- Designed and built by PhDs in math; project leader holds PhD in linear algebra.
:::

# Lastly

---

## Further Reading
- [Erlang's Tail Recursion is Not a Silver Bullet](https://ferd.ca/erlang-s-tail-recursion-is-not-a-silver-bullet.html)
- [First-Class Statistical Missing Values \[...\] in Julia 0.7](https://julialang.org/blog/2018/06/missing)
- [Julia Docs](https://docs.julialang.org/) $\to$ \{[Performance Tips](https://docs.julialang.org/en/stable/manual/performance-tips/), [Style Guide](https://docs.julialang.org/en/stable/manual/style-guide/)\}
- [Key differences: Python 2.7.x and Python 3.x](http://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html)
- [Python 3 Q & A](http://python-notes.curiousefficiency.org/en/latest/python3/questions_and_answers.html)
- [The Seven Myths of Erlang Performance (see 2.1)](http://erlang.org/doc/efficiency_guide/myths.html)
- [Swift for Tensorflow: Documentation](https://github.com/tensorflow/swift#documentation)

## Environments
```bash
# Julia v0.7.0rc1
docker run -it -p 127.0.0.1:13106:3000 --name jul07rc1 -v ~/development/julia:/opt/julia -v ~/development/data:/opt/julia/data -w /opt/julia ubuntu:18.10 /bin/bash
apt update; apt upgrade --yes; apt autoremove --yes
apt install --yes build-essential git libatomic1 python gfortran perl wget m4 cmake pkg-config
git clone git://github.com/JuliaLang/julia.git
git checkout 0.7.0-rc1
make
```
```bash
# CPython 3.7.0
docker run -it -p 127.0.0.1:13107:3000 --name py370 -v ~/development/python:/opt/python -v ~/development/data:/opt/python/data -w /opt/python ubuntu:18.10 /bin/bash
apt update; apt upgrade --yes; apt autoremove --yes
apt install --yes build-essential cmake git libffi-dev libssl-dev m4 pkg-config wget zlib1g-dev
wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz
./configure
make
make install
```

## Thank you!!
> <jason@grafft.co>

- <http://grafft.co>
- <http://github.com/jagrafft>

## References