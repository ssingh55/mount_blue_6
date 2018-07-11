var expect = require('chai').expect;
var test = require('./test-api.js');
var path = require('path');
var matches = path.resolve('../ipl_data/test.csv')
var deliveries = path.resolve('../ipl_data/test1.csv')


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
        test.topWicketTakers(year, matches, deliveries).then(function (data) {
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
        test.topWicketTakers(year, matches, deliveries).then(function (data) {
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
        test.topWicketTakers(year, matches, deliveries).then(function (data) {
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