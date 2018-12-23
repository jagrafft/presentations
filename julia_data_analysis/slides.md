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

## Dataset
**State of California Smarter Balanced Assessments**
<small>`text/plain; charset=us-ascii`</small>

|year|rows|columns|MB|
|:-:|:-:|:-:|:-:|
| 2015 | 3,202,982 | 33 | 433.5 |
| 2016 | 3,116,796 | 33 | 434.6 |
| 2017 | 3,264,974 | 32 | 541.2 |
| 2018 | 3,269,731 | 32 | 541.7 |
| | 12,854,483 | | 1951.0 |

:::notes
- Encodings increase computational overhead
- Docker is a resource limitation
- Too much for a laptop
:::

## Characteristics
<!-- $$
x \in X_{2015} \cap X_{2016} \cap X_{2017} \cap X_{2018} = \begin{matrix}
    x_{2015,3} & x_{2015,4} & x_{2015,5} \\
    x_{2016,4} & x_{2016,5} & x_{2016,6} \\
    x_{2017,5} & x_{2017,6} & x_{2017,7} \\
    x_{2018,6} & x_{2018,7} & x_{2018,8} \\
\end{matrix}
$$ -->

- $\emptyset$ significant digits
    - 2015–2016 `Vector{Int}`
    - 2017-2018 `Vector{Float}`
- $(\hat{i}=3, \hat{j}=4, \hat{k}=2$)
    - Three cohorts spanning four years and two tests
- Vectors *vertically indepdendent* and **horizontally dependent**

:::notes
- Horizontal dependence is hugely confounding in this domain
:::

## Analysis

# Smarter Balanced Assessment

---

## Standard Examinations at Scale
- Categorically distinct documentation
    - Public, Adminstrators, Psychometricians/Lawyers
- Legally defensible
    - Pedantic content associations, defined by committee
- Obtuse reporting
    - Categorical results with dynamic score ranges
- High difficulty end-to-end
    - Diverse group of experts, many support personnel, much time and more money required

:::notes
- Educational testing, **especially** concerning public education, is the effort of experts and domain of politicians
- Score ranges typically valid for a given time period
- "Below", "Near", "Above", "Well Above" common (loosely)
- Obscured reporting is intended to preserve exam validity, and generally does a good job
- "Startup" cost ~$12M as of *2009*, significant upkeep
:::

## 
- Education psychobabble
    - Words connected by farcical assumptions do not make fact (e.g. Constructivism)
- Nauseating political confounding
    - Expert created, decision-makers came out first in public popularity race
    - Big \$\$\$
    - Big impact

:::notes
- Almost everyone has an opinion because almost everyone has a stake in the process or outcome
- Money and impact greatly increase desireability of control
:::