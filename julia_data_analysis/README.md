# Julia Data Analysis

- 12.01.2019. [DataSciPy Meetup](https://www.meetup.com/League-of-Extraordinary-Algorithms/) (Roseville, MN).

## 12.01.2019 DataSciPy Follow-up Notes
### `|>` Here to Stay
- Pipe operator deprecation proposal denied => Operator will be retained
    - https://github.com/JuliaLang/julia/issues/20331
- Docs (Base Library)
    - https://docs.julialang.org/en/v1/manual/arrays/#Broadcasting-1
    - https://docs.julialang.org/en/v1/base/arrays/#Broadcast-and-vectorization-1
    - https://docs.julialang.org/en/v1/manual/mathematical-operations/#man-dot-operators-1
- Related packages
    - https://github.com/rened/FunctionalData.jl
    - https://github.com/oxinabox/Pipe.jl

### Access `NamedTuple` (row) at a Given Array Index in JuliaDB
- http://juliadb.org/latest/index.html

```julia
# Create JuliaDB Table
t = table([1:1:15...],[10:1:24...],[30:1:44...], names=[:x,:y,:z])
# Table with 15 rows, 3 columns:
# x   y   z
# ──────────
# 1   10  30
# 2   11  31
# 3   12  32
# 4   13  33
# 5   14  34
# 6   15  35
# 7   16  36
# 8   17  37
# 9   18  38
# 10  19  39
# 11  20  40
# 12  21  41
# 13  22  42
# 14  23  43
# 15  24  44

# Transform table into `StructArray` of `NamedTuple`s
rows(t)
# 15-element StructArrays.StructArray{NamedTuple{(:x, :y, :z),Tuple{Int64,Int64,Int64}},1,NamedTuple{(:x, :y, :z),Tuple{Array{Int64,1},Array{Int64,1},Array{Int64,1}}}}:
# (x = 1, y = 10, z = 30)
# (x = 2, y = 11, z = 31)
# (x = 3, y = 12, z = 32)
# (x = 4, y = 13, z = 33)
# (x = 5, y = 14, z = 34)
# (x = 6, y = 15, z = 35)
# (x = 7, y = 16, z = 36)
# (x = 8, y = 17, z = 37)
# (x = 9, y = 18, z = 38)
# (x = 10, y = 19, z = 39)
# (x = 11, y = 20, z = 40)
# (x = 12, y = 21, z = 41)
# (x = 13, y = 22, z = 42)
# (x = 14, y = 23, z = 43)
# (x = 15, y = 24, z = 44)

rows(t)[1]
# (x = 1, y = 10, z = 30)

rows(t)[8]
# (x = 8, y = 17, z = 37)


### Type Relation ###
t |> typeof
# IndexedTable{StructArrays.StructArray{NamedTuple{(:x, :y, :z),Tuple{Int64,Int64,Int64}},1,NamedTuple{(:x, :y, :z),Tuple{Array{Int64,1},Array{Int64,1},Array{Int64,1}}}}}

t |> rows |> typeof
# StructArrays.StructArray{NamedTuple{(:x, :y, :z),Tuple{Int64,Int64,Int64}},1,NamedTuple{(:x, :y, :z),Tuple{Array{Int64,1},Array{Int64,1},Array{Int64,1}}}}

# IndexedTable{rows(t)} == t    # will not run
```

### Julia Streams
- Docs (Base Library)
    - https://docs.julialang.org/en/v1/stdlib/Sockets/index.html
    - https://docs.julialang.org/en/v1/manual/networking-and-streams/
    - https://docs.julialang.org/en/v1/manual/parallel-computing/index.html
- Packages
    - https://github.com/BioJulia/BufferedStreams.jl
    - https://github.com/JuliaData/DataStreams.jl
    - https://github.com/joshday/OnlineStats.jl
    - https://github.com/JuliaWeb/WebSockets.jl

## Building
1. `git clone https://github.com/hakimel/reveal.js.git`
2. `make slides`
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