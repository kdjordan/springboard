const {checkInput, getMean, getMidpoint, getMode} = require('./functions')

let goodArr, goodStr, badStr

describe('test mm here', ()=> {
    beforeEach(()=> {
       goodStr = '1,2,3,4,5,6'
       badStr = '1,2,3,foo'

       goodArr = ['1', '3', '5', '7']
       goodArr1 = ['1', '3', '5', '7', '10']

       modeArr1 = ['1', '2', '2', '3']
    })

    test('test checkInput', ()=> {
        let sol = checkInput(goodStr)
        let sol2 = checkInput(badStr)
        
        expect(sol).toBeInstanceOf(Array)
        expect(sol2).toBeInstanceOf(Error)

    })

    test('test getMean', ()=> {
        let sol = getMean(goodArr)
        let sol2 = getMean(goodArr1)
        expect(sol).toEqual(4)
        expect(sol2).toEqual(5.2)
    })

    test('test getMidpoint', ()=> {
        let sol = getMidpoint(goodArr)
        let sol2 = getMidpoint(goodArr1)
        expect(sol).toEqual(5)
        expect(sol2).toEqual(5)
    })

    test('test getMode', ()=> {
        let sol = getMode(modeArr1)
        expect(sol).toEqual('2')
    })
})