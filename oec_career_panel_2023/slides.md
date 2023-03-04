title: 2023 SLPOEC Career Panel
author: Jason A. Grafft
professional: Graph Engineer, RelationalAI
email: jason@grafft.co

# &nbsp;

<div class="title-first-slide">
 <p>
     <span style="font-size: 2.6em; font-weight: 900;">{{title}}</span>
  <br />
     <!--<span style="font-size: 2em; font-weight: 400;">{{subtitle}}</span>//-->
 </p>
 
 <p style="color: #404d5b; font-size: 1.2em;">
  <span>{{author}}</span>
  <br />
        <span>{{professional}}</span>
        <br />
  <span><a href="mailto:{{email}}" style="color: #404d5b;">{{email}}</a></span>
 </p>
</div>

---

# Before We Begin

1. I will move _FAST_
  - Best to take notes that help you ask questions at the end
1. You may reach out to me
  - Ask Bill
1. My "story" is not important
  - Listen for how myself and others have _adapted_

---

# My Career

<a href="img/cv_timeline.gv.svg" target="_blank"><img src="img/cv_timeline.gv.svg" alt="Career Timeline" width="100%" /></a>

### Fields I Tried Out

- Academia
- Acute care
- Information Technology

--
  - $\to$ Information Science (best "fit" _for me_)

--

### Plausible Reasons for "Fit"

- ADHD
- Fascinated by the behavior of complex systems

---

# High-Fidelity Simulation Research

- M Simulation (prior)
  - with Mojca Remskar, MD, PhD

<h3 style="font-size: 18pt;">RSII Performed by an Anesthesiology Resident</h3>

<small>

| $t$   | event        | code            | state  | result    | notes              |
|:-----:|:------------:|:---------------:|:------:|:---------:|--------------------|
| 0.0   | start        |                 |        |           |                    |
| 56.0  | drug         | Fentanyl        | bolus  | 100mcg    | Stated '2.0mcg/kg' |
| 97.0  | drug         | Lidocaine       | bolus  | 70mg      |                    |
| 101.0 | drug         | Propofol        | bolus  | 150mg     | Stated '2mg/kg'    |
| 119.0 | drug         | Succinylcholine | bolus  | 70mg      | Stated '1mg/kg'    |
| 160.0 | laryngoscopy | start           | manual |           |                    |
| 192.0 | eti          | start           |        |           |                    |
| 212.0 | laryngoscopy | stop            | manual |           |                    |
| 232.0 | eti          | stop            |        |           |                    |
| 243.0 | ventilations | start           | manual |           |                    |
| 249.0 | check        | breath sounds   |        | bilateral |                    |
| 257.0 | recognize    | monitor         | etCO2  | active    |                    |
| 259.0 | end          |                 |        |           |                    |

</small>

--

- This cost over one-thousand dollars ($1000) to generate
- _Highly_ similar to most other records, $\uparrow\uparrow\uparrow$ cost of human review

---

# High-Fidelity Simulation Research

- M Simulation (prior)
  - with Mojca Remskar, MD, PhD

<div width="100%">
    <div style="background: black;"><img src="img/biogears_logoWT.png" width="15%" /></div>
    <img src="img/pulse_logo_512.png" width="10%" />
</div>
  
--

<img src="img/biogears_spO2-MAP-HR_plots.png" width="90%" />

Provider 13's performance is clearly closer to ideal.

---

# Information Science: PageRank

- RelationalAI (current)
  - with Huda Nassar, PhD

### <span style="font-size: 16pt;">_"Where are you most likely to go, randomly?"_</span>

<div style="width: 100%;">
  <div style="float: left; width: 74.5%">
    <a href="img/START_graphviz.svg" target="_blank"><img src="img/START_graphviz.svg" width="100%" /></a>
  </div>
  <div style="float: left; display: inline-block; width: 24.5%">
    <ul>
      <li>Number of arrows pointing to <em>Immediate</em> is a serious problem</li>
      <li>Specially for helicopters</li>
      <ul>
        <li><a href="https://www.popularmechanics.com/flight/a5814/medical-helicopter-safety-crashes/">Unacceptable Risk: The Troubling Medical Helicopter Safety Record</a></li>
        <li><a href="https://www.popularmechanics.com/flight/a5937/how-to-improve-medical-helicopter-safety/">How to Improve Medical Helicopter Safety</a></li>
      </ul>
    </ul>
  </div>
</div>

---

# Information Science: PageRank

- RelationalAI (current)
  - with Huda Nassar, PhD

<!-- https://www.mayoclinic.org/medical-professionals/trauma/news/mass-casualty-triage-guidelines-revised/mac-20512735 //-->
<div style="width: 100%;">
  <div style="float: left; margin-left: -35%; width: 60">
    <a href="img/SALT_graphviz.svg" target="_blank"><img src="img/SALT_graphviz.svg" width="100%" /></a>
  </div>
  <div style="float: right; display: inline-block; width: 29.5%">
    <ul>
      <li><a href="https://em.umaryland.edu/files/uploads/ems/salt_2008.pdf">SALT Mass Casualty Triage</a></li>
      <li>Improvement on START</li>
      <ul>
        <li><a href="https://www.wmpllc.org/ojs/index.php/ajdm/article/view/664">Comparison of START and SALT Triage Methodologies to Reference Standard Definitions and to a Field Mass Casualty Simulation</a></li>
      </ul>
      <li>💩 algorithm design</li>
    </ul>
  </div>
</div>

---

# Information Science: PageRank

- RelationalAI (current)
  - with Huda Nassar, PhD

<div style="width: 100%;">
  <div style="float: left; margin-left: -38%; width: 49.5%">
    <img src="img/START_pagerank_graphviz.svg" width="200%" />
  </div>
  <div style="float: left; display: inline-block; margin-left: -13%; margin-right: 10%; width: 49.5%;">
    <img src="img/SALT_pagerank_graphviz.svg" width="170%" />
  </div>
</div>

--

- Improved representation of how each triage method affects large groups of people
- Easier to see how START overuses critical care
- Bias toward overtriage seems to be retained by SALT (noted by study authors)
- Validates some design claims of SALT


<small>
<br /><br /><br />
<a href="img/START_pagerank_graphviz.svg" target="_blank">START diagram</a>
<br />
<a href="img/SALT_pagerank_graphviz.svg" target="_blank">SALT diagram</a>
</small>

---
layout: false
name: last-slide 

# &nbsp;

<div style="margin: 0; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
  <span style="font-size: 3em;">Thank You!</span>
</div>
