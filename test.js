var expect = require('chai').expect;
var test = require('./testquestn1.js');

describe('get total match per year', function() {
    it('getting the number of matches ', function() {
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
        expect(test.getMatchesPerYear(1).then(function(data){
        	try{
        	expect(data).to.deep.equal(expectedResult)
        	// done();
        } catch(e){
        	// done(e)
        }
        })
        	
})