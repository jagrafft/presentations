## Tool 1: Encoding Causal Assumptions--Transparency and Testability
1. Representational accuracy of dataset
    - Captures sufficient degree of source state
2. Self localization of data points
    - Context for a data point is provided by its neighbors
3. Valid structural model
    - Correctly abstracts common elements of dataset and their relations

:::notes
- Recall these data are extracted from another source (in my case, transcribed from a video).
- A *compression function* defines the reconstruction process.
- The data model encodes valid structural relations between elements.
- The data model guides the compression function--representational accuracy is defined by how these structures interact iteratively.
:::

## Tool 2: *Do*-calculus and the control of confounding
- *Do*-calculus not yet implemented

## Tool 3: The Algorithmization of Counterfactuals
- "Heuristic base" of medicine?
- PGM/...

## Tool 4: Mediation Analysis and the Assessment of Direct and Indirect Effects
- "Heuristic base" of medicine?

## Tool 5: Adaptability, External Validity and Sample Selection
1. Task description
2. Data modeling
3. Data collection

## Task description
> Rapid sequence induction and intubation (RSII) of a standardized simulated patient.

## `model:` Record
A **Record** is a time series. It is *atomic* and thus immutable: changes in state violate meaning.

> $\forall R,\ell,t \nin \emptyset; n,m \ge 0: R_m \to \{t_0 \to \ell_0, \ldots, t_n \to \ell_n\}$

:::notes
- *Atomic* is here used to mean an irreducible unit.
- "Violation of meaning" asserts an a priori effect on the validity of downstream assertions.
:::

## `model:` Time Series
A **Time Series** is a 1-dimensional<sup>\*</sup> array of pairs $t_n \to \ell_n$ orderable from smallest to largest by $t_n$. It may be operated on as a stream without violating immutability.

![](img/multiple_observers-marble_error.png)

<span style="float: left;"><small><sup>\*</sup> Because $t \to \ell$ is a one-way relation, indicating $\ell$ is dependent on $t$ for meaning.</small></span>

:::notes
- More precisely, the meaning of $t$ has greater resilience to erosion than the meaning of $\ell$.
:::

## Collection
- Filmed study population performing standardized simulation case
- Two (2) raters (1 expert, 1 lay) reviewed footage

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

## Tool 6: Recovering from Missing Data
> "Using causal models of the missingness process we can now formalize the conditions under which causal and probabilistic relationships can be reovered from incomplete data and, whenever the conditions are satisfied, produce a consistent estimate of the desired relationship."[@pearl_seven_2018]

## Tool 7: Causal Discovery
- Dataflow programming (citations)
- Evaluate structural comparisons (statistically)