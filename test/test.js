const expect = require('chai').expect;
const test1 = require('./testFirst.js');
const test2 = require('./testSecond.js');
const test3 = require('./testThird.js');
const test4 = require('./testFourth.js');
const test5 = require('./testFifth.js');
const path = require('path');
const fileName  = path.resolve('../iplData/test.csv')
const matches = path.resolve('../iplData/test.csv')
const deliveries = path.resolve('../iplData/test1.csv')

describe('get total match per year', function () {
    it('getting the number of matches ', function (done) {
        let expectedResult = {
            '2008': 58,
            '2009': 57,
            '2010': 60,
            '2011': 73,
            '2012': 74,
            '2013': 76,
            '2014': 60,
            '2015': 59,
            '2016': 60,
            '2017': 59
        }
        test1.getMatchesPerYear(fileName).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })
    it('testing false is working',function(){
        expect(true).not.equal(false);
    })
})


describe('matches won of all teams over all the years of IPL', function() {
    it('getting the number of matches won ', function(done) {
        let expectedResult = {
            //['2017','2016,2015]
            "2017": {
                "Kings XI Punjab": 1,
                "Kolkata Knight Riders": 1,
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
        test2.getMatchesWonPerTeam(fileName).then(function(data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })
    it('testing false is working', function() {
        expect(true).not.equal(false);
    })
})

describe('extra runs all teams over 2016 years of IPL', function () {
    it('getting the extra runs conceded ', function (done) {
        let year = 2016;
        let expectedResult = {
            "Gujarat Lions": 3,
            "Kolkata Knight Riders": 12,
            "Mumbai Indians": 9,
            "Sunrisers Hyderabad": 3
        }
        test3.getMatchesExtraRunsTeam(matches, deliveries, year).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
        it('getting the extra runs conceded ', function (done) {
            let year = 2017;
            let expectedResult = {
                "Delhi Daredevils": 6,
                "Gujarat Lions": 15,
                "Kings XI Punjab": 6,
                "Kolkata Knight Riders": 4,
                "Mumbai Indians": 4,
                "Rising Pune Supergiant": 18,
                "Royal Challengers Bangalore": 12,
                "Sunrisers Hyderabad": 6
            }
            test3.getMatchesExtraRunsTeam(matches, deliveries, year).then(function (data) {
                try {
                    expect(data).to.deep.equal(expectedResult)
                    done();
                } catch (e) {
                    done(e)
                }
            })
        })
    })

    it('testing false is working', function () {
        expect(true).not.equal(false);
    })
})

describe('year 2015 & 2016 top economical bowlers', function () {
    it('getting the extra runs conceded ', function (done) {
        let year = 2017;
        let expectedResult = {
            "B Kumar": 7,
            "Bipul Sharma": 4,
            "CH Morris": 5.5,
            "Kuldeep Yadav": 6.25,
            "P Kumar": 6.5,
            "P Negi": 3,
            "R Bhatia": 6.8,
            "S Nadeem": 3.25,
            "Swapnil Singh": 7,
            "YS Chahal": 5.25
        }
        test4.topEconomicalBowlers(year, matches, deliveries).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })

    it('getting the extra runs conceded ', function (done) {
        let year = 2016;
        let expectedResult = {
            "A Nehra": 7,
            "B Kumar": 5.75,
            "Bipul Sharma": 6,
            "DS Kulkarni": 8.5,
            "Harbhajan Singh": 6.75,
            "KH Pandya": 6,
            "P Kumar": 8,
            "Rashid Khan": 4.75,
            "S Kaushik": 7.25,
            "SP Narine": 5.5
        }
        test4.topEconomicalBowlers(year, matches, deliveries).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })

    it('getting the extra runs conceded ', function (done) {
        let year = 2015;
        let expectedResult = {
            "A Mishra": 3.6666666666666665,
            "AR Patel": 3,
            "Imran Tahir": 6.25,
            "P Negi": 8,
            "PJ Cummins": 7.894736842105264,
            "S Nadeem": 5.75,
            "Sandeep Sharma": 6.5,
            "VR Aaron": 5.5,
            "YS Chahal": 8.285714285714286,
            "Z Khan": 6.666666666666667
        }
        test4.topEconomicalBowlers(year, matches, deliveries).then(function (data) {
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

describe('year 2015 & 2016 top wicket takers', function () {
    it('getting the wicket taken by the bowlers 2017', function (done) {
        let year = 2017;
        let expectedResult = {
            'Imran Tahir': 3,
            'CH Morris': 3,
            'Rashid Khan': 2,
            'B Kumar': 2,
            'A Nehra': 2,
            'Sandeep Sharma': 2,
            'Z Khan': 2,
            'B Stanlake': 2,
            'YS Chahal': 2,
            'TS Mills': 2
        }
        test5.topWicketTakers(year, matches, deliveries).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })

    it('getting the wicket taken by the bowlers 2016', function (done) {
        let year = 2016;
        let expectedResult = {
            "A Nehra": 1,
            "AS Rajpoot": 2,
            "B Kumar": 2,
            "BCJ Cutting": 0,
            "Basil Thampi": 0,
            "Bipul Sharma": 0,
            "CR Woakes": 1,
            "KH Pandya": 3,
            "P Kumar": 1,
            "SL Malinga": 2
        }
        test5.topWicketTakers(year, matches, deliveries).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })

    it('getting the wicket taken by the bowlers 2015', function (done) {
        let year = 2015;
        let expectedResult = {
            "A Mishra": 3,
            "A Zampa": 1,
            "AR Patel": 1,
            "DL Chahar": 1,
            "Imran Tahir": 1,
            "PJ Cummins": 2,
            "S Nadeem": 1,
            "Sandeep Sharma": 1,
            "YS Chahal": 1,
            "Z Khan": 3
        }
        test5.topWicketTakers(year, matches, deliveries).then(function (data) {
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