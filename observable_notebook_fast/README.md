# Observable Notebook Dataflows, Fast

- 18.09.2018. Twin Cities Data Visualization Meetup (Saint Paul, MN).

## Resources
- **[Example Notebook](https://beta.observablehq.com/d/273d68b841f4e7a3)**
- JSON
    - JSON Generator
    - Other bookmarks
- Observable notebook
    - Examples (list some compelling/unique ones?)
- Vega-Lite
    - Docs
    - Gallery

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