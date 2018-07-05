//convert to json
let csvToJson = require('convert-csv-to-json');

let fileInputName = '../ipl_data/matches.csv';
let fileOutputName = 'matches.json';

csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);
