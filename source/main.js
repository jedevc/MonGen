const NameGenerator = require('./name')
const StatsGenerator = require('./stats')
const AbilityGenerator = require('./abilities')

let monster = generate(5)
console.log(monster)

function generate(challenge) {
	const name = NameGenerator.name()

	const stats = StatsGenerator.stats(challenge)
	const abilities = AbilityGenerator.abilities(stats)
	const modifiers = AbilityGenerator.modifiers(abilities)

	return {
		name: capitalize(name),
		challenge: challenge,
		stats: stats,
		abilities: abilities,
		modifiers: modifiers
	}
}

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1)
}
