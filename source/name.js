const Generator = require('./generator')

class NameGenerator extends Generator {
	static name() {
		let path = this.randint(0, 10)
		switch (path) {
			case 0:
				return this.vowel() + this.consonant() + this.vowel1()
			case 1:
				return this.vowel() + this.consonant1() + this.consonant() + this.vowel1()
			case 2:
				return this.vowel() + this.consonant() + this.vowel() + this.consonant()
			case 3:
				return this.vowel() + this.consonant() + this.vowel() + this.consonant() + this.vowel1()
			case 4:
				return this.consonant() + this.vowel() + this.consonant1()
			case 5:
				return this.consonant() + this.vowel() + this.consonant() + this.vowel1()
			case 6:
				return this.consonant() + this.vowel() + this.consonant() + this.vowel() + this.consonant1()
			case 7:
				return this.consonant() + this.vowel() + this.consonant1() + this.consonant() + this.vowel1()
			case 8:
				return this.vowel() + '-' + this.name()
			case 9:
				return this.consonant() + this.vowel() + '-' + this.name()
		}
	}

	static vowel1() {
		return this.choice('aeiou')
	}

	static vowel2() {
		return this.vowel1() + this.vowel1()
	}

	static vowel() {
		if (this.randbool()) {
			return this.vowel1()
		} else {
			return this.vowel2()
		}
	}

	static consonant1() {
		return this.choice('bcdfghjklmnprstvxyz')
	}

	static consonant2() {
		const choices = [
			'bb', 'bl', 'br',
			'cc', 'ch', 'ck', 'cl', 'cr',
			'dd', 'dl', 'dr',
			'ff', 'fl', 'fr',
			'gg', 'gl', 'gr',
			'hl',
			'jr',
			'kh', 'kk', 'kl', 'kr',
			'mm', 'mn', 'nn',
			'ph', 'pp', 'pr',
			'qu', 'rr',
			'sb', 'sc', 'sd', 'sf', 'sg', 'sh', 'sk', 'sm', 'sn', 'sp', 'sr', 'st',
			'th', 'tr', 'ts',
			'vr',
			'zr'
		]
		return this.choice(choices)
	}

	static consonant() {
		if (this.randbool()) {
			return this.consonant1()
		} else {
			return this.consonant2()
		}
	}
}

module.exports = NameGenerator
