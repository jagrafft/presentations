---
title: Extracting Information from Awkward Datasets
author: Jason A. Grafft
bibliography: citations.bib
csl: '../output/american-medical-association.csl'
---
## Modeling[@pearl_do-calculus-rev_2012]
- Biomedicine provides a robust set of well-vetted causal heuristics
    - e.g. "A patient $P$ presents with initial state $S_0$, suggesting evolution over time $t$ into state $S_t$."
- The mediation of $S_0$ by $t$ creates $S_t$, which suggests interventions $I_{n—m}$."
    - In this case $t$ is best represented as a function that operates on partially ordered sets$^a$

## Psychomotor Task Model
{{img}}

- $I$ confounds the relationship of $S_0$ and $t$ in *predictable and unpredictable* ways$^b$

{{img}}

## Data
- Filmed study participants during simulated case
- Two (2) raters reviewed footage
- Created a psychomotor event log for each case

|t|event|code|state|result|notes|
|:-:|:-:|:-:|:-:|:-:|---|
|0.0|start|||||
|56.0|drug|Fentanyl|bolus|100mcg|Stated '2.0mcg/kg'|
|97.0|drug|Lidocaine|bolus|70mg||
|101.0|drug|Propofol|bolus|150mg|Stated '2mg/kg'|
|119.0|drug|Succinylcholine|bolus|70mg|Stated '1mg/kg'|
|160.0|laryngoscopy|start|manual|||
|192.0|eti|start||||
|212.0|laryngoscopy|stop|manual|||
|232.0|eti|stop||||
|243.0|ventilations|start|manual|||
|249.0|check|breath sounds||bilateral||
|257.0|recognize|monitor|etCO2|active||
|259.0|end|||||

## Data Integrity
> A minority of orderings are valid, and raters "blind" downstream consumers

- Chronology, pairing of events
- Coding and spelling errors
- Representation of dosing and instructions

## Algorithms
- Biomedicine has surprising insight into what *should*$^c$ follow $S_t$ given $t$ and/or $S_{t-n}$
- Algorithms approximate intermediary clinical reasoning, composing into reasonable clinical "takes"

## Key Algorithms
- `countunique`
    - Coding and spelling errors
    - Provides rough measure of "orthodoxy"
- `destructure`
- `tuplesbykey`
    - Extracts combinations

## Information
- Nearly all "operable" information is extracted algorithmically

## Statistics


## Validity
- Comparison with other groups
- Physiology simulation

## Thank you!!
> <jgrafft@gmail.com>

- <https://grafft.co>
- <https://github.com/jagrafft>
- <https://beta.observablehq.com/@jagrafft>

## Endnotes
<div id="ref-"><p>$^a$ $S_0$ and $S_p$ are likely posets. Reflexivity and transitivity are relatively easy to demonstrate in the physical models of biomedicine. I suspect antisymmetry holds as well, but have not investigated this property.</p></div>
<div id="ref-"><p>$^b$ In biomedicine, it is helpful to understand all applications as partial.</p></div>
<div id="ref-"><p>$^c$ In essence, aggressive data collection and review has facilitated valid association of inputs with outputs, providing some way of calculating the "other end" of a black-box model given a left or right input.</p></div>

## References