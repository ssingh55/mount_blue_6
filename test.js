var expect = require('chai').expect;
var test = require('./testquestn1.js');
var path=require('path');
var matches = path.resolve('ipl_data/test.csv')
var deliveries = path.resolve('ipl_data/test1.csv')

describe('extra runs all teams over 2016 years of IPL', function () {
    it('getting the extra runs conceded ', function (done) {
        let expectedResult = {
            'Royal Challengers Bangalore': 36,
            'Sunrisers Hyderabad': 18,
            'Rising Pune Supergiant': 52,
            'Mumbai Indians': 26,
            'Kolkata Knight Riders': 32,
            'Gujarat Lions': 36,
            'Kings XI Punjab': 20,
            'Delhi Daredevils': 22
        }
        test.getMatchesExtraRunsTeam(matches,deliveries).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })

    

   xit('testing false is working', function () {
        expect(true).equal(false);
    })
})