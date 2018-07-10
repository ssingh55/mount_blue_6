var expect = require('chai').expect;
var test = require('./testquestn1.js');
var path = require('path');
var matches = path.resolve('ipl_data/test.csv')
var deliveries = path.resolve('ipl_data/test1.csv')

describe('extra runs all teams over 2016 years of IPL', function () {
    it('getting the extra runs conceded ', function (done) {
        let year = 2016;
        let expectedResult = {
            "Gujarat Lions": 3,
            "Kolkata Knight Riders": 12,
            "Mumbai Indians": 9,
            "Sunrisers Hyderabad": 3

        }
        test.getMatchesExtraRunsTeam(matches, deliveries, year).then(function (data) {
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
            test.getMatchesExtraRunsTeam(matches, deliveries, year).then(function (data) {
                try {
                    expect(data).to.deep.equal(expectedResult)
                    done();
                } catch (e) {
                    done(e)
                }
            })
        })
    })



    xit('testing false is working', function () {
        expect(true).equal(false);
    })
})