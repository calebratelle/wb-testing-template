import { isEven, sum } from "../arithmetic.js";

describe('testing the isEven function', () => {
    test('return true for even numbers', ()=> {
        expect(isEven(2)).toBe(true)
    })
    
    test('returns false for odd numbers', ()=> {
        expect(isEven(1)).toBe(false)
    })
})

describe('testing the sum function', () => {
    test('return 3 when we add 1 and 2', () =>{
        expect(sum(1, 2)).toBe(3)
    })
    test('return 0 when we add 1 and -1', () => {
        expect(sum(-1, 1)).toBe(0)
    })
})