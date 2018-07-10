var csv = require('fast-csv');
var fs = require('fs');


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
                        // console.log(ball);
                        if (yearIds.includes(ball[0])) {
                            if(!balls[ball[8]]){
                                balls[ball[8]]={
                                    "wicket":0
                                }
                            }
                            // console.log(balls)
                            if((ball[19]=='caught'||ball[19]=='bowled')){
                                balls[ball[8]].wicket++;
                            }
                        }
                        // console.log(ball[19])
                    }
                })
            }
            // console.log(balls);
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
            // console.log(wicketRates.slice(0, 10));
            let maxWickets = wicketRates.slice(0, 10);
            let playerData = {};
            maxWickets.forEach((player) => {
                playerData[player.name] = player.data;
            })
            console.log(playerData);
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
                // console.log(match)
                if (match[1] == year)
                    matchIds.push(match[0])
                // console.log(matchIds)
            }).on("end", function () {
                // console.log(matchIds);
                resolve(matchIds)
            })
        // console.log(matchIds + "out");

    })
}

// topWicketTakers(2017,'../ipl_data/test.csv','../ipl_data/test1.csv')

module.exports = {
    topWicketTakers
}