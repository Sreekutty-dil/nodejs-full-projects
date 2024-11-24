const assert = require('assert');
// array of object
const x = [
    {
        name: "Dil"
    }
]

// object
const y = {
    name: "Sree"
}

const z = [
    {
        name: "Dil"
    }
]
// assert.deepStrictEqual(x,z)

// check prototype and values equal
// assert.deepStrictEqual(x,y)

assert.notDeepStrictEqual(x,z)
