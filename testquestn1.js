const fs = require('fs');
const csv = require('fast-csv');


// let getMatchesWon = (teamName) => {
//     return new Promise(function(resolve, reject) {
//         var totalMatchPerYear = [];

//         fs.createReadStream('./ipl_data/test.csv').pipe(csv()).on('data', function(data, err) {
//             // console.log(data);
//             if (err) {
//                 reject(err);
//             } else {
//                 if (Number(data[1])) {

//                     totalMatchPerYear.push(data[1]);
//                 }

//             }


//         }).on('end', function() {

//             var map = totalMatchPerYear.reduce(noOfMatchesPerYear, {});

//             function noOfMatchesPerYear(counter, year) {

//                 counter[year] = ++counter[year] || 1;
//                 return counter;

//             }

//             // console.log(JSON.stringify(map));
//             // console.log(map);
//             resolve(map)
//         });

//     }).catch(function(e) {

//     })
// }
// getMatchesWon(1).then(function(data) {
//     try {
//         console.log(data);
//         done();
//     } catch (e) {
//         done(e);
//     }
// }).catch(function(e){
	
// });



let getMatchesWonPerTeam = (matchYear,matchData,totalMatchWonPerYear) => {
    return new Promise(function(resolve, reject) {
        matchYear = 2017
        totalMatchWonPerYear = [];

                            //matchData
        fs.createReadStream('./ipl_data/test.csv').pipe(csv()).on('data', function(data, err) {

            if (err) {
                reject(err);
            } else {
                // console.log(data[10])
                if ((data[10])!='winner'&&data[1]==matchYear) {
                    totalMatchWonPerYear.push(data[10]);
                }

            }


        }).on('end', function() {

            var map = totalMatchWonPerYear.reduce(noOfMatchesPerYear, {});

            function noOfMatchesPerYear(counter, year) {

                counter[year] = ++counter[year] || 1;
                return counter;

            }

            // console.log(JSON.stringify(map));
            // console.log(map);
            resolve(map)
        });

    }).catch(function(e) {

    })
}
// getMatchesWonPerTeam(1).then(function(data) {
//     try {
//         // console.log(data);
//         done();
//     } catch (e) {
//         done(e);
//     }
// }).catch(function(e){
	
// });



let getMatchesWonPerTeamPerYear = (matchData) => {
    return new Promise(function(resolve, reject) {
        var totalMatchPerYear = [];
        var totalYear = new Set();

        fs.createReadStream('./ipl_data/test.csv').pipe(csv()).on('data', function(data, err) {

            if (err) {
                reject(err);
            } else {
                console.log(data[1]);
                if (Number(data[1])) {
                    totalYear.add(data[1]);
                }
            }


        }).on('end', function() {

            var map = totalMatchPerYear.reduce(noOfMatchesPerYear, {});

            function noOfMatchesPerYear(counter, year) {
                counter[year] = ++counter[year] || 1;
                return counter;

            }

            // console.log(JSON.stringify(map));
            // console.log(map);
            resolve(map)
        });

    }).catch(function(e) {

    })
}
// getMatchesWonPerTeamPerYear(1).then(function(data) {
//     try {
//         console.log(data);
//         done();
//     } catch (e) {
//         done(e);
//     }
// }).catch(function(e){
	
// });




module.exports = {
    getMatchesWonPerTeam: getMatchesWonPerTeam,
    getMatchesWonPerTeamPerYear: getMatchesWonPerTeamPerYear
    // getMatchesWon: getMatchesWon
}