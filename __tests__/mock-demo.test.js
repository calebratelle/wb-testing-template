import { jest } from '@jest/globals';
//designating a mock that is a fake version of axios
jest.unstable_mockModule('axios', () => {
    //we are returning an object that represents what the axios library would return to us when imported.
  return {
    //we need to have a default export for axios that is an object which represents the fake axios object
    default: {
        //have a get method available on our fake axios object that uses built in jest methods to mimick a resolved http request
      get: jest.fn().mockResolvedValue({
        //finally we return a data object that mimics the format of the data coming back from the pokeapi request
        data: {
          results: [{ name: 'pokemon1' }, { name: 'pokemon2' }],
        },
      }),
    },
  };
});

const mockRandom = jest.fn()
jest.unstable_mockModule('lodash', () => {
    return{
        default: {
            random: mockRandom
        }
    }
})

const { getNthPokemon, doSkillCheck} = await import('../mock-demo.js')

describe('testing the get nth pokemon function', () => {
    test('returns pokemon 2 when n = 2', async () => {
        const pokemon2 = await getNthPokemon(2)
        expect(pokemon2).toEqual({name: 'pokemon2'})
    })
})

describe('testing the doSkillCheck function', () => {
    test('returns false for rolls of 1-9', () => {
        for(let n = 1; n <=9; n++){
            mockRandom.mockReturnValue(n)
            expect(doSkillCheck()).toBe(false)
        }
    })
    test('returns true for rolls of 10-20', () => {
        for(let n = 10; n <=20; n++){
            mockRandom.mockReturnValue(n)
            expect(doSkillCheck()).toBe(true)
        }
    })
})