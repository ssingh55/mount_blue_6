var expect = require('chai').expect;
var test = require('./testquestn1.js');

describe('get total match per year',function(){
	it('getting the number of matches ',function(){
		let expectedResult= {
			2008: 5,
			2008:12,
			2009:13
		}
		expect(test.getMatchesPerYear().equals(expectedResult))
	})
})