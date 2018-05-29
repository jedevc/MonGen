class RandomGenerator {
	static randbool() {
		return Math.random() < 0.5
	}

	static randint(lower, upper) {
		return Math.floor(Math.random() * (upper - lower) + lower)
	}

	static choice(array) {
		let index = this.randint(0, array.length)
		return array[index]
	}
}

module.exports = RandomGenerator
