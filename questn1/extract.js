let csvToJson = require('convert-csv-to-json');

let fileInputName = '../ipl_data/matches.csv';
let fileOutputName = 'matches.json';

// csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);

// let json = csvToJson.formatValueByType().getJsonFromCsv("matches.csv");
let json = csvToJson.fieldDelimiter(',').getJsonFromCsv("../ipl_data/matches.csv");
var seasonYear=[];
var teamList=[];

for(let i=0;i<json.length;i++){
	seasonYear[i]=json[i].season;
	teamList[i]=json[i].team1;
}
// for(let i=0;i<seasonYear.length;i++)
// {
// 	console.log(seasonYear[i]);
// }

// console.log(Array.from(new Set(seasonYear)));
var extractedYear = new Array();
        for (var yr of Array.from(new Set(seasonYear))) {
            var count = 0;
            for (let i = 0; i < seasonYear.length; i++) {
                if (yr == seasonYear[i])
                    count++;
            }
            extractedYear.push({'name':yr,'data':count});
        }

// console.log(extractedYear);
module.exports.teamList = Array.from(new Set(teamList));

module.exports.seasonYear = Array.from(new Set(seasonYear));