const NameGenerator = require('./name')
const StatsGenerator = require('./stats')
const AbilityGenerator = require('./abilities')

let monster = generate(5)
console.log(monster)

function generate(challenge) {
	let stats = StatsGenerator.stats(challenge)

	let abilities = AbilityGenerator.abilities(stats, 'strength')

	return {
		name: capitalize(NameGenerator.name()),
		challenge: challenge,
		stats: stats,
		abilities: abilities,
		modifiers: AbilityGenerator.modifiers(abilities)
	}
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1)
}
