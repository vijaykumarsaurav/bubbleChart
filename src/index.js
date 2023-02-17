import React from "react";
import ReactDOM from "react-dom";
import { BubbleChart } from "@carbon/charts-react";
import "@carbon/charts/styles.css";
// Or
// import "@carbon/charts/styles/styles.scss";

// IBM Plex should either be imported in your project by using Carbon
// or consumed manually through an import
import "./plex-and-carbon-components.css";

class App extends React.Component {
	state = {
		data: [
	{
		"group": "Dataset 1",
		"sales": 10000,
		"profit": 32100,
		"surplus": 50000
	},
	{
		"group": "Dataset 1",
		"sales": 12000,
		"profit": 23500,
		"surplus": 34000
	},
	{
		"group": "Dataset 1",
		"sales": 14000,
		"profit": 53100,
		"surplus": 63000
	},
	{
		"group": "Dataset 1",
		"sales": 15000,
		"profit": 42300,
		"surplus": 43000
	},
	{
		"group": "Dataset 1",
		"sales": 16000,
		"profit": 12300,
		"surplus": 55000
	},
	{
		"group": "Dataset 2",
		"sales": 11000,
		"profit": 12400,
		"surplus": 25000
	},
	{
		"group": "Dataset 2",
		"sales": 13000,
		"profit": 34500,
		"surplus": 35000
	},
	{
		"group": "Dataset 2",
		"sales": 13500,
		"profit": 23100,
		"surplus": 55000
	},
	{
		"group": "Dataset 2",
		"sales": 15500,
		"profit": 63200,
		"surplus": 35000
	},
	{
		"group": "Dataset 2",
		"sales": 15750,
		"profit": 24300,
		"surplus": 64000
	}
],
		options: {
	"title": "Bubble (linear)",
	"axes": {
		"bottom": {
			"title": "No. of employees",
			"mapsTo": "sales",
			"includeZero": false
		},
		"left": {
			"title": "Annual sales",
			"mapsTo": "profit",
			"includeZero": false
		}
	},
	"bubble": {
		"radiusMapsTo": "surplus",
		"radiusLabel": "Surplus"
	},
	"legend": {
		"additionalItems": [
			{
				"type": "radius",
				"name": "Surplus"
			}
		]
	},
	"height": "400px"
}
	};

	render = () => (
		<BubbleChart
			data={this.state.data}
			options={this.state.options}>
		</BubbleChart>
	);
}
ReactDOM.render(<App />, document.getElementById("root"));
  