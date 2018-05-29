const NameGenerator = require('./name')
const StatsGenerator = require('./stats')

let monster = generate(5)
console.log(monster)

function generate(challenge) {
	return {
		name: capitalize(NameGenerator.name()),
		challenge: challenge,
		stats: StatsGenerator.stats(challenge)
	}
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1, -1)
}
