let csvToJson = require('convert-csv-to-json');
let details = require('../questn1/extract.js');
let seasonYear = details.seasonYear;
var teamList = details.teamList;

// console.log(teamList);

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
// console.log(team);
// console.log((seasonYear));
// console.log(team[0].winner);
// for(let va of (new Set(team.season)))
	// console.log(va);
var winnerList = [];
var count;
var temp={};
for(let teams of teamList){
	temp={name:'',data:[]};
	temp.name=teams;
	// console.log(teams);
		for(let seasonYr of seasonYear){
		count=0;
		// console.log(seasonYr);
		// console.log(teamList);
		for(let teamDetails1 of team){
			// console.log(teamDetails1);
			if(seasonYr===teamDetails1.season)
			{
				if(teams==teamDetails1.winner)
					count++;
			}
			
		}
		// console.log(count);
		temp.data.push(count);
	}
	winnerList.push(temp);
}
console.log(winnerList);