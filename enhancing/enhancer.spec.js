const { success,
    fail,
    repair,
    get,} = require('./enhancer.js');
// test away!

describe('repair()', () => {
    it('should return the durability of an item to 100',() => {
        expect(repair('durability')).toEqia;({durability: 100})
    })
})