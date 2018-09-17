// URL: https://beta.observablehq.com/@jagrafft/travel-time-for-nil-recurring-reps
// Title: Travel Time for *Nil Recurring* Reps
// Author: jason a. grafft (@jagrafft)
// Version: 1619
// Runtime version: 1

const m0 = {
  id: "273d68b841f4e7a3@1619",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`
# Travel Time for *Nil Recurring* Reps
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
<small>Grafft, Jason A. *Observable Notebook Dataflows, Fast*. Presented 2018-09-18 at [Twin Cities (Data) Visualization Group](https://www.meetup.com/Twin-Cities-Visualization-Group/); Minneapolis, MN.</small>
`
)})
    },
    {
      inputs: ["md","repDataSummary"],
      value: (function(md,repDataSummary){return(
md`
| start | end | span |
|:-:|:-:|:-:|
| ${repDataSummary.range[0].format("LL")} | ${repDataSummary.range[1].format("LL")} | ${repDataSummary.range[1].diff(repDataSummary.range[0], "days")} days|
`
)})
    },
    {
      inputs: ["md","totalsByRep","repDataSummary"],
      value: (function(md,totalsByRep,repDataSummary){return(
md`${
  totalsByRep.reduce((a,c) => {
    return a + `|${c.rep}|${c.days}|${(c.days/repDataSummary.days).toFixed(2)}|\$${c.cost.toFixed(2)}|${(c.cost/repDataSummary.cost).toFixed(2)}|\n`
  }, "|Rep|Days|\% Total|Cost|\% Total|\n|---|:-:|:-:|:-:|:-:|\n")
}||${repDataSummary.days}|1.00|\$${repDataSummary.cost.toFixed(2)}|1.00|
`
)})
    },
    {
      inputs: ["vegalite","repDataSummary","repData"],
      value: (function(vegalite,repDataSummary,repData){return(
vegalite({
  "repeat": {
    "column": ["rep"],
    "row": ["cost", "days"]
  },
  "title": {
    "text": `Travel cost, days per rep between ${repDataSummary.range[0].format("L")} and ${repDataSummary.range[1].format("L")}`
    },
  "spec": {
    "height": 253,
    "width": 450,
    "data": {"values": repData},
    "mark": "rect",
    "encoding": {
      "x": {
        "axis": {"domain": false, "grid": false},
        "field": {"repeat": "column"},
        "title": false,
        "type": "ordinal"
      },
      "y": {
        "axis": {"domain": false, "grid": false},
        "field":  {"repeat": "row"},
        "aggregate": "sum",
        "type": "quantitative"
      }
    }
  }
})
)})
    },
    {
      inputs: ["vegalite","repDataSummary","repData"],
      value: (function(vegalite,repDataSummary,repData){return(
vegalite({
  "repeat": {
    "row": ["region", "rep"],
    "column": ["depart"]
  },
  "title": {
    "text": `Travel days per region, rep between ${repDataSummary.range[0].format("L")} and ${repDataSummary.range[1].format("L")}`
    },
  "spec": {
    "height": 253,
    "width": 450,
    "data": {"values": repData},
    "mark": "rect",
    "encoding": {
      "x": {
        "axis": {"domain": false, "grid": false},
        "field": {"repeat": "column"},
        "timeUnit": "month",
        "title": false,
        "type": "ordinal"
      },
      "y": {
        "axis": {"domain": false, "grid": false},
        "field":  {"repeat": "row"},
        "title": false,
        "type": "nominal"
      },
      "color": {
        "aggregate": "sum",
        "field": "days",
        "type": "quantitative"
      }
    }
  }
})
)})
    },
    {
      inputs: ["vegalite","repDataSummary","repData"],
      value: (function(vegalite,repDataSummary,repData){return(
vegalite({
  "repeat": {
    "column": ["region"],
    "row": ["rep"]
  },
  "title": {
    "text": `Travel days per region by rep between ${repDataSummary.range[0].format("L")} and ${repDataSummary.range[1].format("L")}`
    },
  "spec": {
    "height": 253,
    "width": 450,
    "data": {"values": repData},
    "mark": "rect",
    "encoding": {
      "x": {
        "axis": {"domain": false, "grid": false},
        "field": {"repeat": "row"},
        "title": false,
        "type": "nominal"
      },
      "y": {
        "axis": {"domain": false, "grid": false},
        "field":  {"repeat": "column"},
        "title": false,
        "type": "nominal"
      },
      "color": {
        "aggregate": "sum",
        "field": "days",
        "type": "quantitative"
      }
    }
  }
})
)})
    },
    {
      inputs: ["vegalite","repDataSummary","repData"],
      value: (function(vegalite,repDataSummary,repData){return(
vegalite({
  "repeat": {
    "row": ["region", "rep"],
    "column": ["depart"]
  },
  "title": {
    "text": `Travel cost per region, rep between ${repDataSummary.range[0].format("L")} and ${repDataSummary.range[1].format("L")}`
    },
  "spec": {
    "height": 253,
    "width": 450,
    "data": {"values": repData},
    "mark": "rect",
    "encoding": {
      "x": {
        "axis": {"domain": false, "grid": false},
        "field": {"repeat": "column"},
        "timeUnit": "month",
        "title": false,
        "type": "ordinal"
      },
      "y": {
        "axis": {"domain": false, "grid": false},
        "field":  {"repeat": "row"},
        "title": false,
        "type": "nominal"
      },
      "color": {
        "aggregate": "sum",
        "field": "cost",
        "type": "quantitative"
      }
    }
  }
})
)})
    },
    {
      inputs: ["vegalite","repDataSummary","repData"],
      value: (function(vegalite,repDataSummary,repData){return(
vegalite({
  "repeat": {
    "column": ["region"],
    "row": ["rep"]
  },
  "title": {
    "text": `Travel cost per region by rep between ${repDataSummary.range[0].format("L")} and ${repDataSummary.range[1].format("L")}`
    },
  "spec": {
    "height": 253,
    "width": 450,
    "data": {"values": repData},
    "mark": "rect",
    "encoding": {
      "x": {
        "axis": {"domain": false, "grid": false},
        "field": {"repeat": "row"},
        "title": false,
        "type": "nominal"
      },
      "y": {
        "axis": {"domain": false, "grid": false},
        "field":  {"repeat": "column"},
        "title": false,
        "type": "nominal"
      },
      "color": {
        "aggregate": "sum",
        "field": "cost",
        "type": "quantitative"
      }
    }
  }
})
)})
    },
    {
      inputs: ["vegalite","selectedRangeData","repSelector","dateRange"],
      value: (function(vegalite,selectedRangeData,repSelector,dateRange){return(
vegalite({
  "height": 253,
  "width": 450,
  "data": {"values": selectedRangeData},
  "title": {
    "text": `Travel costs for ${repSelector} from ${dateRange.left.format("L")} to ${dateRange.right.format("L")}`
  },
  "mark": {
    "type": "bar", // bar, line, trail
    // "interpolate": "step-after" // monotone, step-after  // try with "line"
  },
  "encoding": {
    "x": {
      "axis": {"domain": false, "grid": false},
      "field": "depart",
      "title": false,
      "type": "temporal"
    },
    "y": {
      "axis": {"domain": false, "grid": false},
      "field": "cost",
      "title": "USD ($)",
      "type": "quantitative"
    },
    // "size": {  // required for "trail"
      // "field": "days",
      // "type": "quantitative"
  // },
    "color": {"field": "rep", "type": "nominal"}
  }
})
)})
    },
    {
      name: "viewof repSelector",
      inputs: ["select","totalsByRep"],
      value: (function(select,totalsByRep){return(
select(["everyone"].concat(totalsByRep.map((x) => x.rep)))
)})
    },
    {
      name: "repSelector",
      inputs: ["Generators","viewof repSelector"],
      value: (G, _) => G.input(_)
    },
    {
      name: "viewof dateRange",
      inputs: ["html","repDataSummary","moment"],
      value: (function(html,repDataSummary,moment)
{
  const form = html`<form>
    <div>
      <input type="date" name=left min=${repDataSummary.range[0].format("YYYY-MM-DD")} max=${repDataSummary.range[1].format("YYYY-MM-DD")} value=${repDataSummary.range[0].format("YYYY-MM-DD")}>
      <span style="padding: 0 6px 0 6px">to</span>
      <input type="date" name=right min=${repDataSummary.range[0].format("YYYY-MM-DD")} max=${repDataSummary.range[1].format("YYYY-MM-DD")} value=${repDataSummary.range[1].format("YYYY-MM-DD")}>
  </div>
</form>`;
  form.oninput = () => form.value = Object({
    left: moment(form.left.valueAsDate).add(6, "hours"),
    right: moment(form.right.valueAsDate).add(6, "hours")
  });
  form.oninput();
  return form;
}
)
    },
    {
      name: "dateRange",
      inputs: ["Generators","viewof dateRange"],
      value: (G, _) => G.input(_)
    },
    {
      inputs: ["md","repSelector","dateRange"],
      value: (function(md,repSelector,dateRange){return(
md`
## Travel for ${repSelector} from ${dateRange.left.format("LL")} to ${dateRange.right.format("LL")}
`
)})
    },
    {
      inputs: ["html","repTable"],
      value: (function(html,repTable){return(
html`${repTable}`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Data, Functions, Libraries`
)})
    },
    {
      name: "_repData",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://gist.githubusercontent.com/jagrafft/d0f8c49420690a0ddf1a58be0dfad0db/raw/be9771cb6cec648cd2b2bace321a2f7e84e69c83/observable_notebook_fast_data.json")
)})
    },
    {
      name: "_newRepData",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://gist.githubusercontent.com/jagrafft/7ddabfc73c672ea73ad1cbe45f03ff57/raw/e3bb0a9b8bad33934d9c95e2c2bbb283aaeb950a/observable_notebook_fast_additional_data.json")
)})
    },
    {
      name: "repData",
      inputs: ["_repData","moment"],
      value: (function(_repData,moment){return(
_repData.map((x) => {
// repData = _repData.concat(_newRepData).map((x) => {
  x.cost = parseFloat(x.cost);
  x.depart = moment.utc(x.depart);
  x.return = moment.utc(x.return);
  x.days = x.return.diff(x.depart, "days");
  x.days = x.days == 0 ? 1 : x.days;
  return x;
})
)})
    },
    {
      name: "totalsByRep",
      inputs: ["repData"],
      value: (function(repData){return(
Object.entries(
  repData.groupByKey("rep"))
  .map((x) => {
    return {
      rep: x[0],
      days :x[1].reduce((a, c) => a + c.days, 0),
      cost: x[1].reduce((a, c) => a + c.cost, 0)
    }
  })
)})
    },
    {
      name: "repDataSummary",
      inputs: ["totalsByRep","d3","repData","moment"],
      value: (function(totalsByRep,d3,repData,moment){return(
Object({
  "cost": totalsByRep.reduce((a, c) => a + c.cost, 0),
  "days": totalsByRep.reduce((a,c) => a + c.days, 0),
  "range": [d3.min(repData, (x) => x.depart), d3.max(repData, (x) => x.return)].map((x) => moment.utc(x))
})
)})
    },
    {
      name: "selectedRange",
      inputs: ["repData","dateRange"],
      value: (function(repData,dateRange){return(
repData.filter((x) => x.depart.isSameOrAfter(dateRange.left) && x.depart.isBefore(dateRange.right)).sort((a,b) => a.depart.isSameOrAfter(b.depart))
)})
    },
    {
      name: "selectedRangeData",
      inputs: ["repSelector","selectedRange"],
      value: (function(repSelector,selectedRange){return(
repSelector == "everyone" ? selectedRange : selectedRange.filter((x) => x.rep == repSelector)
)})
    },
    {
      name: "repTable",
      inputs: ["selectedRangeData"],
      value: (function(selectedRangeData){return(
selectedRangeData.reduce((a, c) => {
  const r = [c.rep, c.client, c.region, c.depart.format("YYYY-MM-DD"), c.return.format("YYYY-MM-DD"), c.days, `\$${c.cost}`].join("</td><td>");
  return a + `<tr><td>${r}</td></tr>`;
}, `<table><tr><th>${["Rep", "Client", "Region", "Depart", "Return", "Days", "USD ($)"].join("</th><th>")}</th></tr>`) + `<tr><td></td><td></td><td></td><td></td><td></td><td><strong>${selectedRangeData.reduce((a,c) => a+c.days, 0)}</strong></td><td><strong>\$${selectedRangeData.reduce((a,c) => a+c.cost, 0).toFixed(2)}</strong></td></table>`
)})
    },
    {
      value: (function(){return(
Array.prototype.groupByKey = function(k) {
        return this.reduce((g, ob) => {
            const v = ob[k];
            if (typeof g[v] === "undefined") g[v] = [];
            g[v].push(ob);
            return g;
        }, {});
    }
)})
    },
    {
      from: "@jashkenas/inputs",
      name: "select",
      remote: "select"
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3")
)})
    },
    {
      name: "moment",
      inputs: ["require"],
      value: (function(require){return(
require("moment")
)})
    },
    {
      name: "vegalite",
      inputs: ["require"],
      value: (function(require){return(
require("@observablehq/vega-lite@0.1")
)})
    }
  ]
};

const m1 = {
  id: "@jashkenas/inputs",
  variables: [
    {
      name: "select",
      inputs: ["input","html"],
      value: (function(input,html){return(
function select(config = {}) {
  let {
    value: formValue,
    title,
    description,
    submit,
    multiple,
    size,
    options
  } = config;
  if (Array.isArray(config)) options = config;
  options = options.map(
    o => (typeof o === "object" ? o : { value: o, label: o })
  );
  const form = input({
    type: "select",
    title,
    description,
    submit,
    getValue: input => {
      const selected = Array.prototype.filter
        .call(input.options, i => i.selected)
        .map(i => i.value);
      return multiple ? selected : selected[0];
    },
    form: html`
      <form>
        <select name="input" ${
          multiple ? `multiple size="${size || options.length}"` : ""
        }>
          ${options.map(
            ({ value, label }) => `
            <option value="${value}" ${
              value === formValue ? "selected" : ""
            }>${label}</option>
          `
          )}
        </select>
      </form>
    `
  });
  form.output.remove();
  return form;
}
)})
    },
    {
      name: "input",
      inputs: ["html","d3format"],
      value: (function(html,d3format){return(
function input(config) {
  let {form, type = "text", attributes = {}, action, getValue, title, description, format, submit, options} = config;
  if (!form) form = html`<form>
	<input name=input type=${type} />
  </form>`;
  const input = form.input;
  Object.keys(attributes).forEach(key => {
    const val = attributes[key];
    if (val != null) input.setAttribute(key, val);
  });
  if (submit) form.append(html`<input name=submit type=submit style="margin: 0 0.75em" value="${typeof submit == 'string' ? submit : 'Submit'}" />`);
  form.append(html`<output name=output style="font: 14px Menlo, Consolas, monospace; margin-left: 0.5em;"></output>`);
  if (title) form.prepend(html`<div style="font: 700 0.9rem sans-serif;">${title}</div>`);
  if (description) form.append(html`<div style="font-size: 0.85rem; font-style: italic;">${description}</div>`);
  if (format) format = d3format.format(format);
  if (action) {
    action(form);
  } else {
    const verb = submit ? "onsubmit" : type == "button" ? "onclick" : type == "checkbox" || type == "radio" ? "onchange" : "oninput";
    form[verb] = (e) => {
      e && e.preventDefault();
      const value = getValue ? getValue(input) : input.value;
      if (form.output) form.output.value = format ? format(value) : value;
      form.value = value;
      if (verb !== "oninput") form.dispatchEvent(new CustomEvent("input"));
    };
    if (verb !== "oninput") input.oninput = e => e && e.stopPropagation() && e.preventDefault();
    if (verb !== "onsubmit") form.onsubmit = (e) => e && e.preventDefault();
    form[verb]();
  }
  return form;
}
)})
    },
    {
      name: "d3format",
      inputs: ["require"],
      value: (function(require){return(
require("d3-format")
)})
    }
  ]
};

const notebook = {
  id: "273d68b841f4e7a3@1619",
  modules: [m0,m1]
};

export default notebook;
