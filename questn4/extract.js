let csvToJson = require('convert-csv-to-json');

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/matches.csv");

let json1 = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/deliveries.csv");

var id = [];

json.forEach(function(jsonItem){
	if(jsonItem.season === '2015'){
		id.push(jsonItem.id);
	}
});

var bowlerNameArray=new Set();
json1.forEach(function(jsonItem){
	id.forEach(function(idDetails){
		if(idDetails===jsonItem.match_id){
			bowlerNameArray.add(jsonItem.bowler);
		}
	});
});
bowlerNameArray=Array.from(bowlerNameArray);


// bowlerNameArray=['YS Chahal'];
// id=['557','562'];
var totalRuns=0,totalDeliveries=0;
var series=[],temp={};
bowlerNameArray.forEach(function(bowlerName){
	temp={};
	totalRuns=0,totalDeliveries=0;
	id.forEach(function(idDetails){
		json1.forEach(function(jsonItem){
			if(idDetails===jsonItem.match_id){
				if(bowlerName===jsonItem.bowler){
					totalRuns+=Number(jsonItem.total_runs);
					totalDeliveries++;
				}
			}
		});
	});
		temp.name=bowlerName;
		temp.eco=(totalRuns/totalDeliveries)*6;
		series.push(temp);
});
console.log(series);