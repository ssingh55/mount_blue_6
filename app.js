const express = require('express');
const path = require('path');
const fs = require('fs');
const matches = path.resolve('iplData/matches.csv');
const deliveries = path.resolve('iplData/deliveries.csv');
const fileName = path.resolve('iplStats.js');
const operations = require(fileName);

const app = express();
app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, "/assets")));
//app.use('assets', express.static('assets'));
app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'));
})
app.get('/matchesPerYear', (req, res) => {
    operations.getMatchesPerYear(matches).then(function (data) {
        res.send(data);
    });
})
app.get('/matchesWonPerTeam', (req, res) => {
    operations.getMatchesWonPerTeam(matches).then(function (data) {
        res.send(data);
    });
})
app.get('/matchesExtraRunsPerTeam', (req, res) => {
    operations.getMatchesExtraRunsTeam(matches, deliveries, 2016).then(function (data) {
        res.send(data);
    });
})
app.get('/topEconomicalBowlers', (req, res) => {
    operations.getTopEconomicalBowlers(2015, matches, deliveries).then(function (data) {
        res.send(data);
    });
})
app.get('/topWicketTakers', (req, res) => {
    operations.topWicketTakers(2015, matches, deliveries).then(function (data) {
        res.send(data);
    });
})
app.listen(3000);
console.log('listening');