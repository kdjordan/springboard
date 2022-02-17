describe('Test loan calculator tests with set-up and teardown', () => {
    beforeEach(() => {
        document.getElementById("loan-amount").value = 250000
        document.getElementById("loan-years").value = 30
        document.getElementById("loan-rate").value = 3.8
    }) 

    it('should update DOM with monthly payment', () => {
        update()
        expect(document.getElementById("monthly-payment").innerText).toEqual('$1164.89')
    })

    it('calculate monthly payment when values is fully populated', () => {
        let values = getCurrentUIValues()
        expect(calculateMonthlyPayment(values)).toEqual('1164.89')
    })

    it('calculate monthly payment when values is fully populated', () => {
        let values = getCurrentUIValues()
        values.rate = ''
        expect(calculateMonthlyPayment(values)).toEqual('An input field is blank')
    })

    it('should retrieve values from form', () => {
        expect(document.getElementById("loan-amount").value).toEqual('250000')
        expect(document.getElementById("loan-years").value).toEqual('30')
        expect(document.getElementById("loan-rate").value).toEqual('3.8')
    })


    afterEach(() => {
        document.getElementById("loan-amount").value = 0
        document.getElementById("loan-years").value = 0
        document.getElementById("loan-rate").value = 0
        document.getElementById("monthly-payment").innerText = ''
    })
})