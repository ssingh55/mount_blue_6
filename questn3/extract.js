// let teamList = require('../questn1/extract')
let csvToJson = require('convert-csv-to-json');

let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/matches.csv");
var id = [];
var teamPlaying = new Set();
for (let i = 0, j = 0; i < json.length; i++) {
    if (json[i].season == '2016') {
        id[j] = json[i].id;
        j++;
        teamPlaying.add(json[i].team1);
    }
}
teamPlaying = Array.from(teamPlaying);
console.log(teamPlaying);



var series=[];
let json1 = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/deliveries.csv");
var extra;
var temp={};
for (let teams of teamPlaying) {
    extra = 0;temp={};
    for (let j = 0; j < id.length; j++) {
        for (let i = 0; i < json1.length; i++) {
            // console.log(json1[i].id);
            if (json1[i].match_id == id[j]) {
                if (teams == json1[i].bowling_team) {
                    extra = extra + Number(json1[i].extra_runs);
                }
            }
        }
    }
    temp.name=teams;
    temp.data=extra;
    series.push(temp);
}console.log(series);