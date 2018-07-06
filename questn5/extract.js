let csvToJson = require('convert-csv-to-json');

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/matches.csv");

let json1 = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/deliveries.csv");


// console.log(bash.execute(`sed '/date\|{\|city\|}/!d' matches.json`));

function findId(json) {
    var id = [];
    json.forEach(function(jsonItem) {
        if (jsonItem.season === '2015') {
            id.push(jsonItem.id);
        }
    });
    return id;
}



function findBowlerName(json1, id) {
    var bowlerNameArray = new Set();
    json1.forEach(function(jsonItem) {
        if (id.includes(jsonItem.match_id)) {
            bowlerNameArray.add(jsonItem.bowler);
        }
    });
    bowlerNameArray = Array.from(bowlerNameArray);
    return bowlerNameArray;
}


// console.log(bowlerNameArray);

// bowlerNameArray=['YS Chahal'];
// id=['557','562'];

function findSeries(bowlerNameArray, json1, id) {
    var totalRuns = 0,
        totalDeliveries = 0;
    var series = [],
        temp = {};
    bowlerNameArray.forEach(function(bowlerName) {
        temp = {};
        totalDeliveries = 0;
        json1.forEach(function(jsonItem) {
            if (id.includes(jsonItem.match_id)) {
                if (bowlerName === jsonItem.bowler) {
                    if (jsonItem.player_dismissed != '')
                        totalDeliveries++;
                }
            }
        });
        temp.name = bowlerName;
        temp.wicket = totalDeliveries;
        series.push(temp);
    });
    series.sort(function(a, b) {
        if (parseFloat(a.wicket.toFixed(4)) > parseFloat(b.wicket.toFixed(4))) return -1;
        else return 1;
    });
    return series;
}


function main() {
	// console.log(findId(json));
    // console.log(findBowlerName(json1,findId(json)));
   	return findSeries((findBowlerName(json1,findId(json))),json1,findId(json));

}

console.log(main());
// console.log(series);