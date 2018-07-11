//convert to json
let csvToJson = require('convert-csv-to-json');

// let fileInputName = '../ipl_data/matches.csv';
// let fileOutputName = 'matches.json';

let fileInputName = '../ipl_data/deliveries.csv';
let fileOutputName = 'deliveries.json';


csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(fileInputName,fileOutputName);
