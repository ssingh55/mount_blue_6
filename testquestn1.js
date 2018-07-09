const fs = require('fs');
const csv = require('fast-csv');

let getMatchesWonPerTeam = (matchesFile) => {
    return new Promise(function (resolve, reject) {
        matchesWon = {};
        counter=0;
        //matchData
        csv.fromPath(matchesFile)
                .on("data", function(match){
                    let season = match[1];
                    let winner = match[10];
                    if(counter){
                        if(winner){
                            if(!matchesWon[season]){
                                matchesWon[season] = {};
                            }
                            if(!matchesWon[season][winner]){
                                matchesWon[season][winner] = 1;
                            }else{
                                matchesWon[season][winner]++;
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
    getMatchesWonPerTeam: getMatchesWonPerTeam
    // getMatchesWon: getMatchesWon
}