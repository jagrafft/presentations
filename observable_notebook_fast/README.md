# Observable Notebook Dataflows, Fast

- 18.09.2018. [Twin Cities (Data) Visualization Group](https://www.meetup.com/Twin-Cities-Visualization-Group/) (Saint Paul, MN).
  - **[Presentation Notebook](https://beta.observablehq.com/@jagrafft/travel-time-for-nil-recurring-reps)**

## Resources
- JSON
    - [JSON Generator (next)](https://next.json-generator.com/)
- [Observable notebook](https://beta.observablehq.com/)
    - [Featured Collections](https://beta.observablehq.com/@observablehq?tab=collections)
    - [Jason A. Grafft](https://beta.observablehq.com/@jagrafft/)
    - [Shirley Wu](https://beta.observablehq.com/@sxywu/)
- [Vega-Lite](https://vega.github.io/vega-lite/)
    - [Docs](https://vega.github.io/vega-lite/docs/)
      - [Data Types](https://vega.github.io/vega-lite/docs/type.html)
    - [Gallery](https://vega.github.io/vega-lite/examples/)

## [JSON Generator](https://www.json-generator.com/) Fake Data
### Representatives
```javascript
[
  {
    'repeat(5, 100)': {
      rep(tags) {
        return ["Christabel Fawcus","Paulette Runcie","Cirstoforo Simmance","Shurlock Gonthier","Hilary Gingles"][Math.floor(Math.random() * 5)];
      },
      client: "{{company()}}",
	  region(tags) {
        return ["West", "North", "East", "South", "Central"][Math.floor(Math.random() * 5)];
      },
      depart: `{{moment(this.date(new Date(2018, 0, 1), new Date())).format("YYYY-MM-DD")}}`,
      return(tags) {
      	return moment(this.depart).add(Math.floor(Math.random() * 12), "days").format("YYYY-MM-DD");
      },
      cost(tags) {
        return ((Math.random() * 1000) + (moment(this.return).diff(moment(this.depart), "days") * Math.random()) * 550).toFixed(2);
      }
    }
  }
]
```
[Gist](https://gist.githubusercontent.com/jagrafft/d0f8c49420690a0ddf1a58be0dfad0db/raw/be9771cb6cec648cd2b2bace321a2f7e84e69c83/observable_notebook_fast_data.json)

[JSON](https://github.com/jagrafft/presentations/blob/master/observable_notebook_fast/2018_travel_data.json)

### Representatives from Acquired Company
```javascript
[
  {
    'repeat(5, 64)': {
      rep(tags) {
        return ["Sile Della Scala", "Stafford O'Cosgra", "Ros Wofenden", "Chandra Goodboddy", "Ingunna Chedzoy"][Math.floor(Math.random() * 5)];
      },
      client: "{{company()}}",
	  region(tags) {
        return ["West", "North", "East", "South", "Central"][Math.floor(Math.random() * 5)];
      },
      depart: `{{moment(this.date(new Date(2018, 0, 1), new Date())).format("YYYY-MM-DD")}}`,
      return(tags) {
      	return moment(this.depart).add(Math.floor(Math.random() * 12), "days").format("YYYY-MM-DD");
      },
      cost(tags) {
        return ((Math.random() * 1000) + (moment(this.return).diff(moment(this.depart), "days") * Math.random()) * 550).toFixed(2);
      }
    }
  }
]
```
[Gist](https://gist.githubusercontent.com/jagrafft/7ddabfc73c672ea73ad1cbe45f03ff57/raw/e3bb0a9b8bad33934d9c95e2c2bbb283aaeb950a/observable_notebook_fast_additional_data.json)

[JSON](https://github.com/jagrafft/presentations/blob/master/observable_notebook_fast/2018_new_reps_travel_data.json)

<a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial 4.0 International License</a>.