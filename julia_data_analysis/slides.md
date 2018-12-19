---
title:  Data Analysis with Julia
author: Jason A. Grafft
bibliography: citations.bib
csl: '../output/american-medical-association.csl'
---
# Planning

---

## Execution Environment
|||
|:-:|:-:|
|![](img/macbook_specs_1.png)|![](img/macbook_specs_2.png)|

![](img/docker_logo.png)

## Dataset (table?)
- 2015–2018 State of California Smarter Balanced Assessment Data
    - 4 files (1/year)
        - `text/plain; charset=us-ascii` (CSV format)
        - $\approx 3.2 \times 10^6$ rows per file
        - 2015-2016
            - 33 columns
            - $\approx 434$`MB`
        - 2017-2018
            - 32 columns
            - $\approx 541$`MB`
    - $\approx 1.95$`GB`
    - $12,854,483$ total rows

:::notes
- Encodings increase computational overhead
- Docker is a resource limitation
- Too much for a laptop
:::

## Definition of Work
