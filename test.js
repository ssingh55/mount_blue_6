var expect = require('chai').expect;
var test = require('./testquestn1.js');

describe('matches won of all teams over all the years of IPL', function () {
    it('getting the number of matches won ', function (done) {
        let expectedResult = {
            //['2017','2016,2015]
            'Sunrisers Hyderabad': [1, 1, 0],
            'Kolkata Knight Riders': [1, 0, 0],
            'Kings XI Punjab': [1, 0, 1],
            'Royal Challengers Bangalore': [1, 0, 0],
            'Mumbai Indians': [0, 1, 0],
            'Delhi Daredevils': [0, 0, 1]
        }
        test.getMatchesWonPerTeamPerYear(1).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })

    it('getting the matches won in 2017', function (done) {
        let expectedResult = {
            'Sunrisers Hyderabad': 1,
            'Kolkata Knight Riders': 1,
            'Rising Pune Supergiants': 1,
            'Kings XI Punjab': 1,
            'Royal Challengers Bangalore': 1,
            // 'Mumbai Indians': 0,
            // 'Delhi Daredevils': 0
        }
        test.getMatchesWonPerTeam(2017,'filename').then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e);
            }
        })
    })

    it('testing false is working', function () {
        expect(true).equal(false);
    })
})