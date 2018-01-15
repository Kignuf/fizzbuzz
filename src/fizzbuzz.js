class FizzBuzz {
	static getString(nb) {
		const fizz = nb % 2 === 0
		const buzz = nb % 3 === 0
		if (fizz && buzz) {
			return 'FizzBuzz'
		} else if (fizz) {
			return 'Fizz'
		} else if (buzz) {
			return 'Buzz'
		}
		return nb
	}

	static run(bound) {
		for (let i = 1; i <= bound; i += 1) {
			console.log(FizzBuzz.getString(i))
		}
	}
}

module.exports = FizzBuzz
