const Generator = require('./generator')

class AbilityGenerator extends Generator {
    static abilities(stats, primary) {
        if (!abilities.includes(primary)) throw 'invalid ability type'

        const mod = stats.offensive.attack - stats.proficiency
        const high = mod * 2 + 10 + this.randint(0, 1)

        let rest = [high]
        while (rest.length < 6) {
            const last = rest[rest.length - 1]
            rest.push(last - this.randint(0, 3))
        }
        rest = this.shuffle(rest.slice(1))

        let results = {}
        results[primary] = high
        for (let ability of abilities) {
            if (!results.hasOwnProperty(ability)) {
                results[ability] = rest.pop()
            }
        }

        return results
    }

    static modifiers(abilities) {
        let results = {}
        for (let key of Object.keys(abilities)) {
            const mod = Math.floor((abilities[key] - 10) / 2)
            if (mod >= 0) {
                results[key] = '+' + String(mod)
            } else {
                results[key] = String(mod)
            }
        }
        return results
    }
}

module.exports = AbilityGenerator

const abilities = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
]
