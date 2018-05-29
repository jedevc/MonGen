const Generator = require('./generator')

class StatsGenerator extends Generator {
    static stats(challenge) {
        const offset = this.randint(-2, 3)

        const defensive = challenge - offset
        const offensive = challenge + offset

        return {
            proficiency: table[challenge].proficiency,
            defensive: this.defensive(defensive),
            offensive: this.offensive(offensive)
        }
    }

    static offensive(challenge) {
        const diff = this.randint(-2, 4)
        const offset = Math.floor(diff / 2)

        const attack = table[challenge].offensive.attack + diff
        const damage_min = table[challenge - offset].offensive.damage_min
        const damage_max = table[challenge - offset].offensive.damage_max

        return {
            attack: attack,
            damage_min: damage_min,
            damage_max: damage_max,
            save: table[challenge].offensive.save
        }
    }

    static defensive(challenge) {
        const diff = this.randint(-2, 4)
        const offset = Math.floor(diff / 2)

        const armor = table[challenge].defensive.armor + diff
        const hp_min = table[challenge - offset].defensive.hp_min
        const hp_max = table[challenge - offset].defensive.hp_max

        return {
            armor: armor,
            hp_min: hp_min,
            hp_max: hp_max
        }
    }
}

module.exports = StatsGenerator

const table = {
    0: {
        proficiency: +2,
        defensive: { armor: 13, hp_min: 1, hp_max: 6 },
        offensive: { attack: +3, damage_min: 0, damage_max: 1, save: 13 }
    },
    '1/8': {
        proficiency: +2,
        defensive: { armor: 13, hp_min: 7, hp_max: 35 },
        offensive: { attack: +3, damage_min: 2, damage_max: 3, save: 13 }
    },
    '1/4': {
        proficiency: +2,
        defensive: { armor: 13, hp_min: 36, hp_max: 49 },
        offensive: { attack: +3, damage_min: 4, damage_max: 5, save: 13 }
    },
    '1/2': {
        proficiency: +2,
        defensive: { armor: 13, hp_min: 50, hp_max: 70 },
        offensive: { attack: +3, damage_min: 6, damage_max: 8, save: 13 }
    },
    1: {
        proficiency: +2,
        defensive: { armor: 13, hp_min: 71, hp_max: 85 },
        offensive: { attack: +3, damage_min: 9, damage_max: 14, save: 13 }
    },
    2: {
        proficiency: +2,
        defensive: { armor: 13, hp_min: 86, hp_max: 100 },
        offensive: { attack: +3, damage_min: 15, damage_max: 20, save: 13 }
    },
    3: {
        proficiency: +2,
        defensive: { armor: 13, hp_min: 101, hp_max: 115 },
        offensive: { attack: +4, damage_min: 21, damage_max: 26, save: 13 }
    },
    4: {
        proficiency: +2,
        defensive: { armor: 14, hp_min: 116, hp_max: 130 },
        offensive: { attack: +5, damage_min: 27, damage_max: 32, save: 14 }
    },
    5: {
        proficiency: +3,
        defensive: { armor: 15, hp_min: 131, hp_max: 145 },
        offensive: { attack: +6, damage_min: 33, damage_max: 38, save: 15 }
    },
    6: {
        proficiency: +3,
        defensive: { armor: 15, hp_min: 146, hp_max: 160 },
        offensive: { attack: +6, damage_min: 39, damage_max: 44, save: 15 }
    },
    7: {
        proficiency: +3,
        defensive: { armor: 15, hp_min: 161, hp_max: 175 },
        offensive: { attack: +6, damage_min: 45, damage_max: 50, save: 15 }
    },
    8: {
        proficiency: +3,
        defensive: { armor: 16, hp_min: 176, hp_max: 190 },
        offensive: { attack: +7, damage_min: 51, damage_max: 56, save: 16 }
    },
    9: {
        proficiency: +4,
        defensive: { armor: 16, hp_min: 191, hp_max: 205 },
        offensive: { attack: +7, damage_min: 57, damage_max: 62, save: 16 }
    },
    10: {
        proficiency: +4,
        defensive: { armor: 17, hp_min: 206, hp_max: 220 },
        offensive: { attack: +7, damage_min: 63, damage_max: 68, save: 16 }
    },
    11: {
        proficiency: +4,
        defensive: { armor: 17, hp_min: 221, hp_max: 235 },
        offensive: { attack: +8, damage_min: 69, damage_max: 74, save: 17 }
    },
    12: {
        proficiency: +4,
        defensive: { armor: 17, hp_min: 236, hp_max: 250 },
        offensive: { attack: +8, damage_min: 75, damage_max: 80, save: 17 }
    },
    13: {
        proficiency: +5,
        defensive: { armor: 18, hp_min: 251, hp_max: 265 },
        offensive: { attack: +8, damage_min: 81, damage_max: 86, save: 18 }
    },
    14: {
        proficiency: +5,
        defensive: { armor: 18, hp_min: 266, hp_max: 280 },
        offensive: { attack: +8, damage_min: 87, damage_max: 92, save: 18 }
    },
    15: {
        proficiency: +5,
        defensive: { armor: 18, hp_min: 281, hp_max: 295 },
        offensive: { attack: +8, damage_min: 93, damage_max: 98, save: 18 }
    },
    16: {
        proficiency: +5,
        defensive: { armor: 18, hp_min: 296, hp_max: 310 },
        offensive: { attack: +9, damage_min: 99, damage_max: 104, save: 18 }
    },
    17: {
        proficiency: +6,
        defensive: { armor: 19, hp_min: 311, hp_max: 325 },
        offensive: { attack: +10, damage_min: 105, damage_max: 110, save: 19 }
    },
    18: {
        proficiency: +6,
        defensive: { armor: 19, hp_min: 326, hp_max: 340 },
        offensive: { attack: +10, damage_min: 111, damage_max: 116, save: 19 }
    },
    19: {
        proficiency: +6,
        defensive: { armor: 19, hp_min: 341, hp_max: 355 },
        offensive: { attack: +10, damage_min: 117, damage_max: 122, save: 19 }
    },
    20: {
        proficiency: +6,
        defensive: { armor: 19, hp_min: 356, hp_max: 400 },
        offensive: { attack: +10, damage_min: 123, damage_max: 140, save: 19 }
    },
    21: {
        proficiency: +7,
        defensive: { armor: 19, hp_min: 401, hp_max: 445 },
        offensive: { attack: +11, damage_min: 141, damage_max: 158, save: 20 }
    },
    22: {
        proficiency: +7,
        defensive: { armor: 19, hp_min: 446, hp_max: 290 },
        offensive: { attack: +11, damage_min: 159, damage_max: 176, save: 20 }
    },
    23: {
        proficiency: +7,
        defensive: { armor: 19, hp_min: 491, hp_max: 535 },
        offensive: { attack: +11, damage_min: 177, damage_max: 194, save: 20 }
    },
    24: {
        proficiency: +7,
        defensive: { armor: 19, hp_min: 536, hp_max: 580 },
        offensive: { attack: +12, damage_min: 195, damage_max: 212, save: 21 }
    },
    25: {
        proficiency: +8,
        defensive: { armor: 19, hp_min: 581, hp_max: 625 },
        offensive: { attack: +12, damage_min: 213, damage_max: 230, save: 21 }
    },
    26: {
        proficiency: +8,
        defensive: { armor: 19, hp_min: 626, hp_max: 670 },
        offensive: { attack: +12, damage_min: 231, damage_max: 248, save: 21 }
    },
    27: {
        proficiency: +8,
        defensive: { armor: 19, hp_min: 671, hp_max: 715 },
        offensive: { attack: +13, damage_min: 249, damage_max: 266, save: 22 }
    },
    28: {
        proficiency: +8,
        defensive: { armor: 19, hp_min: 716, hp_max: 760 },
        offensive: { attack: +13, damage_min: 267, damage_max: 284, save: 22 }
    },
    29: {
        proficiency: +9,
        defensive: { armor: 19, hp_min: 761, hp_max: 805 },
        offensive: { attack: +13, damage_min: 285, damage_max: 302, save: 22 }
    },
    30: {
        proficiency: +9,
        defensive: { armor: 19, hp_min: 806, hp_max: 850 },
        offensive: { attack: +14, damage_min: 303, damage_max: 320, save: 23 }
    }
}
