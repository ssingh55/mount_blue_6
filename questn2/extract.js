let csvToJson = require('convert-csv-to-json');

let fileInputName = '../ipl_data/matches.csv';
let fileOutputName = 'matches.json';

// csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);

// let json = csvToJson.formatValueByType().getJsonFromCsv("matches.csv");
let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/matches.csv");
var team=[];//winner list in every match

for(let i=0,temp={};i<json.length;i++){
	temp={};
	if(json[i].winner!=''){
		temp.season=json[i].season;
		temp.winner=json[i].winner;
		team.push(temp);
	}	
}
console.log(team[0].season);
// for(let va of (new Set(team.season)))
	// console.log(va);