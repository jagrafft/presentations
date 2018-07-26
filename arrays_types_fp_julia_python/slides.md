---
author: Jason A. Grafft
title:  \[Arrays, Types, FP\].ap(Julia, Python)
---
## Premise
> An inquiry into the engineering solutions provided by two (2) programming languages to the same problem set.

## Motivation
> [Why *Swift* for TensorFlow?](https://github.com/tensorflow/swift/blob/master/docs/WhySwiftForTensorFlow.md)

## Contract
- Fun
- Earnest inquiry
- Honest disagreement
- Respectful communication
- Fun

## Languages
```python
# Python
>>> sys.version_info
sys.version_info(major=3, minor=7, micro=0, releaselevel='final', serial=0)
```
```julia
# Julia
julia> versioninfo()
Julia Version 0.6.2
Commit d386e40c17 (2017-12-13 18:08 UTC)
Platform Info:
  OS: Linux (x86_64-pc-linux-gnu)
  CPU: Intel(R) Core(TM) i5-5257U CPU @ 2.70GHz
  WORD_SIZE: 64
  BLAS: libopenblas (USE64BITINT DYNAMIC_ARCH NO_AFFINITY Haswell)
  LAPACK: libopenblas64_
  LIBM: libopenlibm
  LLVM: libLLVM-3.9.1 (ORCJIT, broadwell)
```

## Python Characteristics
- Mulitparadigm, interpreted (C)
- Dynamic typing
  - Not declarable, run time "check"
  - v3.5 introduced type [hints](https://docs.python.org/3/library/typing.html)
- Small core library, widely modularizable
- Flexible

## Python Catch-22s
- "Ten day language" problem
- Package du jour
- Pedantically idiomatic

## Julia Characteristics
- Numerical computing, JIT (predominantly Julia)
- Static typing
  - Optionally declared, compiler enforced
  - User types fast as base types
- Well curated core libraries, extended with packages
- Highly performant

## Julia Catch-22s
<!-- Look up "issues with Julia" -->
- Breaking changes
- First run slow

## Ground Truths
- Architecture choices impose hard limits
- At the processor, all operations are stateless
- In physical storage, all memory is generic
- Efficiency via general purposing is an oxymoron
- John von Neumann has the last word

## defs
for messages $\{A,B\}$, effects $\{F,G\}$, and types $\{T,U\}$
<!-- Map required everywhere [] observed... -->

- **push:** $A \to F$
- **pull:** $A \to F \to B$
- **future/promise:** $A \to F[B]$
- **actor:** $G[A \to F[B]]$

## defs
- **message/value:** $∀x,n \ge 0:\{x,x_{(x+n)}\}$
- **array:** $∀x,n \ge 0 \land y,m \ge x,n:\{A\{x,x_{(x+n)}\},B\{y,y_{(y+m)}\}\}$
<!-- where $A B = [Tuple[byte,byte], Tuple[byte,byte]]` and `|A - B| > 0` -->
- **stream:** $\{A,B\}∌∅$
- **type:** $T\{\_\}^{\star}$
- **typed stream:** $T\{\{A,B\}\}^{\star}$
- **stream with types:** $\{T\{A\},T\{B\}\}^{\star}$

## Information
- Jason A. Grafft
- <jason@grafft.co>
- <http://grafft.co>
- keybase
- <http://github.com/jagrafft>