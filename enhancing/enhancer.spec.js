const { success,
    fail,
    repair,
    get,} = require('./enhancer.js');
// test away!

describe('repair()', () => {
    it('should return the durability of an item to 100',() => {
       const repairedItem = repair({item: 'item', durability: 50})
        expect(repairedItem.durability).toBe(100)
    })
})

describe('success()', () => {
it('should increase the enhancement by 1', () => {
    const enhancedItem = success({ item: 'item', enhancement: 10})
    expect(enhancedItem.enhancement).toBe(11)
})
})

// describe('fail()', () => {
    
// })