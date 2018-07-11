const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');
const fileName = path.resolve('iplData/matches.csv')

//question1
let getMatchesPerYear = (matchData) => {
    return new Promise(function (resolve, reject) {
        var totalMatchPerYear = [];
        fs.createReadStream(matchData).pipe(csv()).on('data', function (data, err) {
            if (err) {
                reject(err);
            } else {
                if (Number(data[1])) {
                    totalMatchPerYear.push(data[1]);
                }
            }
        }).on('end', function () {
            var map = totalMatchPerYear.reduce(noOfMatchesPerYear, {});
            function noOfMatchesPerYear(counter, year) {
                counter[year] = ++counter[year] || 1;
                return counter;
            }
            resolve(map)
        });
    }).catch(function (e) {

    })
}

//question2
let getMatchesWonPerTeam = (matchesFile) => {
    return new Promise(function (resolve, reject) {
        matchesWon = {};
        counter = 0;
        let nextSeason;
        
        //matchData
        csv.fromPath(matchesFile)
            .on("data", function (match) {
                let season = match[1];
                let winner = match[10];
                if (counter) {
                    if (winner) {
                        if (!matchesWon[winner]) {
                            matchesWon[winner] = {};
                        }
                        if (!matchesWon[winner][season]) {
                            matchesWon[winner][season] = 1;
                        } else {
                            matchesWon[winner][season]++;
                        }
                    }
                }
                counter++;
            })
            .on("end", function () {
                resolve(matchesWon);
            })
    }).catch(function (e) {

    })
}

//question3
let getMatchesExtraRunsTeam = (matchesFile, deliveriesFile, year) => {
    return new Promise(function (resolve, reject) {
            extraRunsConceded = {};
            counter = 0;
            let matchesData = [];
            
            //matchData
            csv.fromPath(matchesFile)
                .on("data", function (match) {
                    if (match[1] == year)
                        matchesData.push(match[0])
                }).on("end", function () {
                    resolve(matchesData)
                })
        })
        .then(function (matchesData) {
            return new Promise(function (resolve, reject) {
                    // matchesData.forEach(function(match){
                    csv.fromPath(deliveriesFile)
                        .on("data", function (deliveries) {
                            let extraRuns = deliveries[16];
                            let bowlingTeam = deliveries[3];
                            if (matchesData.includes(deliveries[0])) {
                                if (counter) {
                                    if (Number(extraRuns)) {
                                        if (!extraRunsConceded[bowlingTeam]) {
                                            extraRunsConceded[bowlingTeam] = Number(extraRuns);
                                        } else {
                                            extraRunsConceded[bowlingTeam] += Number(extraRuns);
                                        }
                                    }
                                }
                                counter++;
                            }
                        })
                        .on("end", function () {
                            resolve(extraRunsConceded);
                        })
                })
                .catch(function (e) {

                })
        })
}

//question4
function getTopEconomicalBowlers(year, matches, deliveries) {
    return new Promise(async function (resolve, reject) {
        let balls = [];
        let specificYearIds = await getMatchID(year, matches);
        fs.readFile(deliveries, function (err, data) {
            if (err) {
                reject(err)
            } else {
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index !== 0) {
                        const ball = line.split(",")
                        if (specificYearIds.includes(ball[0])) {
                            if (!balls[ball[8]]) {
                                balls[ball[8]] = {
                                    "total_run": 0,
                                    "noOfBall": 0,
                                    "over": 0,
                                    'economy_rate': 0
                                };
                            }
                            balls[ball[8]].total_run += parseInt(ball[17]);
                            balls[ball[8]].noOfBall++;
                            if (ball[10] != 0) {
                                balls[ball[8]].noOfBall--;
                            } else if (ball[13] != 0) {
                                balls[ball[8]].noOfBall--;
                            }
                        }
                    }
                })
            }
            let economyRates = [];
            for (let player in balls) {
                balls[player].over = parseInt(balls[player].noOfBall) / 6;
                balls[player].economy_rate = balls[player].total_run / balls[player].over;
                let playerObject = {
                    'name': player,
                    'data': balls[player].economy_rate
                }
                economyRates.push(playerObject);
            }
            economyRates.sort(function (a, b) {
                if (parseFloat(a.data.toFixed(3)) < parseFloat(b.data.toFixed(3)))
                    return -1;
                else
                    return 1;
            });
            let maxRunsPerOverData = economyRates.slice(0, 10);
            let playerData = {};
            maxRunsPerOverData.forEach((player) => {
                playerData[player.name] = player.data;
            })
            resolve(playerData);
        })
    }).catch(function (e) {

    })
}

const getMatchID = (year, matchesFile) => {
    var matchIds = [];
    return new Promise(function (resolve, reject) {
        extraRunsConceded = {};
        counter = 0;
       
        //matchData
        csv.fromPath(matchesFile)
            .on("data", function (match) {
                if (match[1] == year)
                    matchIds.push(match[0])
            }).on("end", function () {
                resolve(matchIds)
            })
    })
}

//question5
function topWicketTakers(year, matches, deliveries) {
    return new Promise(async function (resolve, reject) {
        let balls = [];
        let yearIds = await getMatchID(year, matches);
        fs.readFile(deliveries, function (err, data) {
            if (err) {
                reject(err)
            } else {
                data.toString().split("\n").forEach(function (line, index, arr) {
                    if (index !== 0) {
                        const ball = line.split(",")
                        if (yearIds.includes(ball[0])) {
                            if (!balls[ball[8]]) {
                                balls[ball[8]] = {
                                    "wicket": 0
                                }
                            }
                            if ((ball[19] == 'caught' || ball[19] == 'bowled')) {
                                balls[ball[8]].wicket++;
                            }
                        }
                    }
                })
            }
            let wicketRates = [];
            for (let player in balls) {
                let playerObject = {
                    'name': player,
                    'data': balls[player].wicket
                }
                wicketRates.push(playerObject);
            }
            wicketRates.sort(function (a, b) {
                if (parseFloat(a.data.toFixed(3)) > parseFloat(b.data.toFixed(3)))
                    return -1;
                else
                    return 1;
            });
            let maxWickets = wicketRates.slice(0, 10);
            let playerData = {};
            maxWickets.forEach((player) => {
                playerData[player.name] = player.data;
            })
            resolve(playerData);
        })
    }).catch(function (e) {

    })
}

module.exports = {
    getMatchesPerYear,
    getMatchesWonPerTeam,
    getMatchesExtraRunsTeam,
    getTopEconomicalBowlers,
    topWicketTakers
}