# Programming Languages Influence How We Code: \[Arrays, Types, FP\].ap(Julia, Python)

- 08.09.2018. [DataSciPy Meetup](https://www.meetup.com/League-of-Extraordinary-Algorithms/) (Roseville, MN).
  - Robust presenter notes!
  - [Compiled Slides](https://github.com/jagrafft/presentations/blob/master/arrays_types_fp_julia_python/compiled-slides.zip)

## 08.09.2018 DataSciPy Follow-up Notes
- Python's ecosystem is huge and we have to put some effort into connecting with its core feature set. These features reward the effort.
- Julia offers more intentional solutions to foundational problems of computing, in practice this translates to compiler awareness of states that require explicit testing in many languages.
- Python has an important legacy in modern computing, its adoption and use have led to an incredible number of innovations.
- Compiler design has undergone a radical evoltion since the early 2000s. The structure of established, ubiquitous languages like C, Javascript, and Python are out-of-phase with current trends in compiler architecture, which have progressively focused on designs that facilitate mathematical inference.
- "Best" or "better" isn't the question; honest, accurate inquiry improves our own practice. A given strategy tends to solve given problems for a finite amount of time. Eventually we exhaust the strategy or solve the problem--and both states necessitate a change in tack.

### Miscellaneous Items
- [C and Fortran in Julia](https://docs.julialang.org/en/v1/manual/calling-c-and-fortran-code/) - Calling C and Fortan Code in Julia
- [Cxx](https://github.com/Keno/Cxx.jl) - Julia C++ Interface
- [Haskell-Style Fibonacci in Python](http://joelgrus.com/2015/07/07/haskell-style-fibonacci-in-python/) - Joel Grus' article used in example
- [Lazy.jl](https://github.com/MikeInnes/Lazy.jl) - Package used in example
- [PyCall](https://github.com/JuliaPy/PyCall.jl) - Directly call and interoperate with Python functions in Julia
- Python's [Complex Number Objects](https://docs.python.org/3/c-api/complex.html)

### Julia's `Missing` and `Nothing` [[docs]](https://docs.julialang.org/en/v1/manual/missing/index.html)
- `Missing` is a standard Julia type
  - It was introduced to implement the mathematical principle that "uncertainly about the operation introduces uncertainty about the result".
  - Uncertainty is a tenable state--far more so than halting--but requires specific handling.
  - Julia allows this fitting `Missing` its type tree, giving the programmer means to override default behavior for operations on the type.
- Python does not have an analogue to Julia's `Missing`
- Julia's `Nothing` and Python's `None` are similar in definition
- Default behavior for methods defined on the `Missing` type is to return `Missing` or an equivalently sensible result

```julia
julia> missing + 1                  # => missing
julia> "a" * missing                # => missing
julia> abs(missing)                 # => missing
julia> missing == 1                 # => missing
julia> missing == missing           # => missing
julia> missing < 1                  # => missing
julia> 2 >= missing                 # => missing
julia> missing === 1                # => false
julia> isequal(missing, 1)          # => false
julia> missing === missing          # => true
julia> isequal(missing, missing)    # => true
```
In an overwhelming majority of cases, the introduction of uncertainty is superior to halting--a state that Python's `None` and Julia's `Nothing` induce. The difference between uncertainty and halting is *gain* and *loss*, respectively. Failing over with data integrity from a halt state is a design fantasy, in these cases it is far more sensibleå to embrace entropy in the result set.

### Python's `None` and `NaN` [[docs]](https://docs.python.org/3.7/library/constants.html#None)
- The reserved word `None` indicates lack of return value
  - Python does not use the keyword `Null`
- `NaN` is a floating-point “not a number” value [[docs]](https://docs.python.org/3.7/library/constants.html#None)
  - Provided by `math.nan`
  - Equivalent to `float('nan')`
  - Used in NumPy and Pandas

## Building
1. `git clone https://github.com/hakimel/reveal.js.git`
2. Download `american-medical-association.csl` from <https://github.com/citation-style-language/styles>
3. `make slides`
    - [Pandoc](https://pandoc.org/) -> Markdown -> [Reveal.js](https://github.com/hakimel/reveal.js/)

#### `reveal.js/css/theme/black.css` customizations
```css
.reveal h6 {
  margin: 0 0 20px 0;
  color: #fff;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: normal;
  /* text-transform: uppercase; */
  text-shadow: none;
  word-wrap: break-word;
}

.reveal h1 { font-size: 2.1em; text-shadow: none; }
.reveal h2 { font-size: 1.6em; }
.reveal h3 { font-size: 1.3em; }
.reveal h4 { font-size: 1em; }

div[id^="ref-"] > p {
  font-size: 0.4em;
  margin: 0;
  text-align: left;
}
```