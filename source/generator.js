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

	static shuffle(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = this.randint(0, i + 1)

			const x = array[i]
			array[i] = array[j];
			array[j] = x;
		}
		return array
	}
}

module.exports = RandomGenerator
