const fs = require('fs');
const csv = require('fast-csv');


let getMatchesPerYear = (matchData) => {
    return new Promise(function(resolve, reject) {
        var totalMatchPerYear = [];

        fs.createReadStream('./ipl_data/matches.csv').pipe(csv()).on('data', function(data, err) {

            if (err) {
                reject(err);
            } else {
                if (Number(data[1])) {

                    totalMatchPerYear.push(data[1]);
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



let getMatchesWonPerTeam = (matchesFile) => {
    return new Promise(function (resolve, reject) {
        matchesWon = {};
        counter=0;
        let nextSeason;
        //matchData
        csv.fromPath(matchesFile)
                .on("data", function(match){
                    let season = match[1];
                    let winner = match[10];


                    if (season != nextSeason) {
                        nextSeason = season
                        matchesWon[season] = {};
                    } else {
                        if(counter){
                            if(winner){
                                if(!matchesWon[season][winner]){
                                    matchesWon[season][winner] = 1;
                                }else{
                                    matchesWon[season][winner]++;
                                }
                            }
                        }
                    }
                    
                    counter++;
                })
                .on("end", function(){
                    resolve(matchesWon);
                })
}).catch(function (e) {

})
}



module.exports = {
    getMatchesPerYear,
    getMatchesWonPerTeam
}