const fs = require('fs');
const csv = require('fast-csv');

let getMatchesExtraRunsTeam = (matchesFile, deliveriesFile, year) => {
    return new Promise(function (resolve, reject) {
            extraRunsConceded = {};
            counter = 0;
            // matchesFile = './ipl_data/test.csv'
            // deliveriesFile = './ipl_data/test1.csv'
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
                            // console.log(match)
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
                    // })
                })
                .catch(function (e) {

                })
        })
}
// getMatchesWonPerTeam(matchesFile).then(function(data) {
//     tr  console.log(data);
//         done();
//     } catch (e) {
//         done(e);
//     }
// }).catch(function(e){

// });

// getMatchesExtraRunsTeam(1, 1)

module.exports = {
    getMatchesExtraRunsTeam
}