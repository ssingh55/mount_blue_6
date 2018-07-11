var expect = require('chai').expect;
var test = require('./test-api.js');

describe('matches won of all teams over all the years of IPL', function () {
    it('getting the number of matches won ', function (done) {
        let expectedResult = {
            //['2017','2016,2015]
            "2017": {
                //    "Delhi Daredevils": 0,
                   "Kings XI Punjab": 1,
                   "Kolkata Knight Riders": 1,
                //    "Mumbai Indians": 0,
                   "Rising Pune Supergiants": 1,
                   "Royal Challengers Bangalore": 1,
                   "Sunrisers Hyderabad": 1
                 },
                 "2016": {
                    "Mumbai Indians": 1,
                    "Sunrisers Hyderabad": 1
                  },
                  "2015": {
                    "Delhi Daredevils": 1,
                    "Kings XI Punjab": 1
                  }
          
        }
        test.getMatchesWonPerTeam('./ipl_data/test.csv').then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })

    

    it('testing false is working', function () {
        expect(true).not.equal(false);
    })
})