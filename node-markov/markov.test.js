const { MarkovMachine } = require('./markov')

let mm
let output

describe('test mm here', ()=> {
    beforeEach(()=> {
        mm = new MarkovMachine('the test input')
        keys = Array.from(mm.chain.keys())
        output = mm.makeText(numWords=10)
        
    })

    test('first test for init', ()=> {
        expect(mm).not.toBeUndefined()
        expect(keys).toBeInstanceOf(Array)
    })

    test('check length of words on input', ()=> {
        mm5 = new MarkovMachine('the cat in the hat')
        expect(mm5.words.length).toEqual(5)
        mm10 = new MarkovMachine('one two three four five six seven eight nine ten')
        expect(mm10.words.length).toEqual(10)
    })

    test('check chain type ', ()=> {
        expect(mm.chain).toBeInstanceOf(Map)
    })

    test('check output ', ()=> {
        mmTest = new MarkovMachine('the cat in the hat')
        let out = mmTest.makeText(numWords = 10)
        expect(out).toContain('cat')
        expect(out).toContain('the')
        expect(out).toContain('in')
        expect(out).toContain('the')
        expect(out).toContain('hat')
    })


})