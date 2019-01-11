1. Remove asterisks from columns
    - ```for f in `ls 201*v*.csv`; do sed -i.asterisk 's/\*//g' $f; done```
2. Remap feature headers
    - `tail -n +2 2015_v3.csv >> ../2015_v3h.csv`
    - `tail -n +2 2016_v3.csv >> ../2016_v3h.csv`
    - `tail -n +2 2017_v2.csv >> ../2017_v2h.csv`
    - `tail -n +2 2018_v3.csv >> ../2018_v3h.csv`
3. Remove MS-DOS line breaks
    - `vim ../201*v*h.csv`
    - `:%s/^M$//g` (`ctrl+v`, `ctrl+m`)
4. Verify contents of files with remapped headers
    - ```files=(2015_v3 2016_v3 2017_v2 2018_v3); for f in "${files[@]}"; do echo `wc -l ${f}.csv; wc -l ../${f}h.csv`; done```

```bash=
 3202982 2015_v3.csv   3202982 ../2015_v3h.csv
 3116796 2016_v3.csv   3116796 ../2016_v3h.csv
 3264974 2017_v2.csv   3264974 ../2017_v2h.csv
 3269731 2018_v3.csv   3269731 ../2018_v3h.csv
-----------------------------------------------
12854483              12854483
```
5. Create tables with only identified features
    - ```files=(2015_v3h 2016_v3h 2017_v2h 2018_v3h); for f in "${files[@]}"; do julia reduce_tbl.jl ${f}; done```
6. Filter so dataset includes sliding grade windows for each test type
    - $2015 \to ([3:5]_{ELA}, [3:5]_{MAT})$
    - $2016 \to ([4:6]_{ELA}, [4:6]_{MAT})$
    - $2017 \to ([5:7]_{ELA}, [5:7]_{MAT})$
    - $2018 \to ([6:8]_{ELA}, [6:8]_{MAT})$
    - ```files=(2015_v3hr-3 2016_v3hr-4 2017_v2hr-5 2018_v3hr-6); for f in "${files[@]}"; do julia filter_tbl.jl ${f}; done```
7. Aggregate files into a single CSV
    - ```julia stack_tbl.jl```
8. Aggregate files into JuliaDB database
    - ```julia -e 'using JuliaDB; loadtable(glob("*.csv") |> reverse, output="../2015-2018_grade_windows_jdb")'```
        - `reverse` is necessary because 2015-2016 use `Int` values, while 2017-2018 use `Float`, and `Int <: Float`
9. Convert all numbers to `Float` with 0 significant digits
    - `map(x -> map(y -> typeof(y) == Missing ? missing : convert(Float64, round(y)), x), JDB_TABLE)`
10. Separate by record type
    - `categories` => (county $\land$ district $\land$ school) == 0
    - `county` => (county > 0) $\land$ ((district $\land$ school) == 0)
    - `district` => ((county $\land$ district) > 0) $\land$ (school == 0)
    - `school` => (county $\land$ district $\land$ school) > 0