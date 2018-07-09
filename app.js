const express = require('express');
const path = require('path');
const fs = require('fs');
const matches = path.resolve('ipl_data/matches.csv');
// const deliveries = path.resolve('ipl/deliveries.csv');
const fileName = path.resolve('iplStats.js');
const operations = require(fileName);
const app = express();
app.use(express.static('public'));

console.log(path.join(__dirname, "/assets"));
//app.use(express.static(path.join(__dirname, "/assets")));
//app.use('assets', express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('index.html'));
})
app.get('/matchesPerYear', (req, res) => {
    operations.getMatchesPerYear(matches).then(function (data) {
        res.send(data);
    });
})
app.listen(3000);
console.log('listening');