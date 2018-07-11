const fs = require('fs');
const csv = require('fast-csv');
const path = require('path');
const fileName = path.resolve('../iplData/matches.csv')

let getMatchesPerYear = (matchData) => {
    return new Promise(function(resolve, reject) {
        var totalMatchPerYear = [];
        fs.createReadStream(fileName).pipe(csv()).on('data', function(data, err) {
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
            resolve(map)
        });
    }).catch(function(e) {
    })
}
getMatchesPerYear(1).then(function(data) {
    try {
        done();
    } catch (e) {
        done(e);
    }
}).catch(function(e){
	
});
module.exports = {
    getMatchesPerYear: getMatchesPerYear
}