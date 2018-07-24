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
- Mulitparadigm, interpreted
- Interpreter written in C
- Dynamic typing
  - Not declarable, v3.5 introduced type [hints](https://docs.python.org/3/library/typing.html)
- Small, widely extensible core library
- Idiomatic
- Flexible

## Python Catch-22s
- "Ten day language" problem
- Package du jour
- Pedantically idiomatic

## Julia Characteristics
- Numerical computing language, JIT
- Compiler written in Julia
- Static typing
  - Optionally declared, always enforced
- User-defined types performant as base types
- Multiple dispatch
- *Fast*

## Julia Catch-22s
- Breaking changes

## Ground Truths
- Architecture choices impose hard limits
- Efficiency via general purposing is an oxymoron

## defs
messages `{A,B}`, effects `{F,G}`, types `{T,U}`
<!-- Map required everywhere [] observed... -->

- **push:** `A => F`
- **pull:** `A => F => B`
- **future/promise:** `A => F[B]`
- **actor:** `G[A => F[B]]`

## defs
- **array:** `Tuple[A,B] = Tuple[<<addr>>,<<addr>>]` where `|B - A| > 0`
- **stream:** `Tuple[A,B]` where `[A,B] != <<null>>`
- **type:** `T[A]`
- **typed stream:** `T[Tuple[A,B]]`
- **stream with types:** `Tuple[T[A],U[B]]` where `typeof[T,U] != Nothing`

## Information
- Jason A. Grafft
- <jason@grafft.co>
- <http://grafft.co>
- keybase
- <http://github.com/jagrafft>