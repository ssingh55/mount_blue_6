var csv = require('fast-csv');
var fs = require('fs');

function topEconomicalBowlers(year, matches, deliveries) {
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

module.exports = {
    topEconomicalBowlers
}