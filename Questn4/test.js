var expect = require('chai').expect;
var test = require('./test-api.js');
var path = require('path');
var matches = path.resolve('../ipl_data/test.csv')
var deliveries = path.resolve('../ipl_data/test1.csv')

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
        test.topEconomicalBowlers(year, matches, deliveries).then(function (data) {
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
        test.topEconomicalBowlers(year, matches, deliveries).then(function (data) {
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
        test.topEconomicalBowlers(year, matches, deliveries).then(function (data) {
            try {
                expect(data).to.deep.equal(expectedResult)
                done();
            } catch (e) {
                done(e)
            }
        })
    })


    //xit
    it('testing false is working', function () {
        expect(true).not.equal(false);
    })
})