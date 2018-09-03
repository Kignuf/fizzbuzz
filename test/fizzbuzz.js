const { expect } = require('chai')
const FizzBuzz = require('../src/fizzbuzz')

describe('FizzBuzz', function () {
	it('Prints Fizz for numbers divisible by 2', function () {
		throw new Error('toto')
		// expect(FizzBuzz.getString(2)).to.equal('Fizz')
	})
	it('Prints Buzz for numbers divisible by 3', function () {
		expect(FizzBuzz.getString(3)).to.equal('Buzz')
	})
	it('Prints FizzBuzz for numbers divisible by 2 and 3', function () {
		expect(FizzBuzz.getString(6)).to.equal('FizzBuzz')
	})
	it('Prints number when not divisible by 2 or 3', function () {
		expect(FizzBuzz.getString(17)).to.equal(17)
	})
})
