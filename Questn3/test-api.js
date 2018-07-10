const fs = require('fs');
const csv = require('fast-csv');

let getMatchesExtraRunsTeam = (matchesFile, deliveriesFile,year) => {
    return new Promise(function (resolve, reject) {
            extraRunsConceded = {};
            counter = 0;
            // matchesFile = './ipl_data/test.csv'
            // deliveriesFile = './ipl_data/test1.csv'
            let matchesData = [];
            //matchData
            
            csv.fromPath(matchesFile)
                .on("data", function (match) {
                    // console.log(match)
                    if(match[1] == year)
                        matchesData.push(match[0])
                    // console.log(matchesData)
                }).on("end", function () {
                    // console.log(matchesData);
                    resolve(matchesData)
                })
            // console.log(matchesData + "out");

        })
        .then(function (matchesData) {
            return new Promise(function (resolve, reject) {
                // console.log(matchesData)
                    // matchesData.forEach(function(match){
                    csv.fromPath(deliveriesFile)
                        .on("data", function (deliveries) {
                            let extraRuns = deliveries[16];
                            let bowlingTeam = deliveries[3];
                            // console.log(extraRuns+"   "+bowlingTeam)
                            // console.log(match)
                            if (matchesData.includes(deliveries[0])) {
                                if (counter) {
                                    if (Number(extraRuns)) {
                                        if (!extraRunsConceded[bowlingTeam]) {
                                            extraRunsConceded[bowlingTeam] = Number(extraRuns);
                                            // console.log(extraRunsConceded[bowlingTeam]);
                                        } else {
                                            // console.log('hello')
                                            extraRunsConceded[bowlingTeam] += Number(extraRuns);
                                        }
                                    }
                                }
                                counter++;
                                // console.log(extraRunsConceded);
                            }
                        })
                        .on("end", function () {
                            console.log(extraRunsConceded);
                            resolve(extraRunsConceded);
                        })
                    // })
                })
                .catch(function (e) {

                })
        })
}
// getMatchesWonPerTeam(matchesFile).then(function(data) {
//     try {
//         console.log(data);
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