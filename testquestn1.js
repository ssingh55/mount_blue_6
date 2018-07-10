const fs = require('fs');
const csv = require('fast-csv');

let getMatchesExtraRunsTeam = (matchesFile, deliveriesFile) => {
    return new Promise(function (resolve, reject) {
        extraRunsConceded = {};
        counter = 0;
        matchesFile = './ipl_data/test.csv'
        deliveriesFile = './ipl_data/test1.csv'
        //matchData
        csv.fromPath(matchesFile)
            .on("data", function (match) {
                match = match.filter(data => match[1] == 2016)
                csv.fromPath(deliveriesFile)
                    .on("data", function (deliveries) {
                        // console.log(match)
                        // console.log(deliveries)
                        // console.log(match)
                        let extraRuns = deliveries[16];
                        let bowlingTeam = deliveries[3];
                        // console.log(extraRuns+"   "+bowlingTeam)
                        if (match[1] == 2016) {
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
            })
            .on("end", function () {
                console.log('hi' + extraRunsConceded);
                resolve(extraRunsConceded);
            })
    }).catch(function (e) {

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



module.exports = {
    getMatchesExtraRunsTeam
}