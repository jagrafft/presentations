# [SKETCHPAD] Programming Languages Influence How We Code: \[Arrays, Types, FP\].ap(Julia, Python)
## __
- 45 minutes [1...]
- 10 minute break
- 15 minutes [...5]
- 30 minutes [6]
- Questions [section 7]

## Approach
- Identify set of items/issues/problems/...
    - SMALL NUMBER!! -> 3?
- Investigate [Julia, Python] -> item_performance(_) language-specifically
- Make comparisons from here

## Avoid
- Language *Y* includes feature *X* in base/core/... comparisons
    - Okay to mention as needed/true. **NOT** a metric.
- "The Russell"
    - Philosophy can be commented to (e.g. "Guido's tail recursion"), but arguments remain strictly technical. (e.g. In this case you must show that tail recursion is superior.)

## Description/Bio
The assumptions of data science root deeply in the foundations of computing. It is a long trip between our code, the processing units, and user-detectable output which each language accounts for and accomodates differently. These engineering solutions are consequential to the fundamental assertions of data science, and understanding them will aid us in our work. Today we will look at how Python 3 and Julia 0.7 [1] represent the numerical values of ∅ (nothingness), float, and intetger; [2] build and bundle these into arrays; and [3] provide functional methods to operate on these values.

Python 3 is well established in data science, and Julia is a heavyweight up-and-comer. Presenting the two engineering solutions side-by-side will help make principles clear and provide us with insight into the invidual languages. By the end, you will have a clearer understanding of the decisions you are making with your code—familiarity with, or preference for, either language is not required.

[ABOUT] Jason is a human factors researcher at the University of Minnesota Medical School's simulation laboratory, SimPORTAL, working primarily with streaming data using functional programming in a polyglot development environment. He develops data farming, handling, and modeling techniques with the long-term goal of producing validatable, automated, expert-informed assessment of skills performed by healthcare providers.

## Knowns
- Julia v1.0.0
- Python v3.7.0
- Exploration of how each language handles a set of problems
- Use competent source for Python FP examples, replicate in Julia

## Production
- Code examples
    - Scripts and REPL? (preferred)
    - Notebook(s)?

## Possible References
- [Erlang's Tail Recursion is Not a Silver Bullet](https://ferd.ca/erlang-s-tail-recursion-is-not-a-silver-bullet.html)
- [Julia Docs](https://docs.julialang.org/)
- [The Seven Myths of Erlang Performance](http://erlang.org/doc/efficiency_guide/myths.html)
    - *2.1 Myth: Tail-Recursive Functions are Much Faster Than Recursive Functions*

## ToDo
- [ ] Look up "issues with Julia" (*Julia Catch-22's*)
- [ ] Find excellent Python FP reference