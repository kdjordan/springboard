describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        allPayments = {
            payment1: {billAmt: '100', tipAmt: '20', tipPercent: 20},
            payment2: {billAmt: '500', tipAmt: '50', tipPercent: 10}
        }
    });
  
    it('should sum all payment types in allPayments', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(30)
        expect(sumPaymentTotal('tipAmt')).toEqual(70)
        expect(sumPaymentTotal('billAmt')).toEqual(600)
        
        
    });

    it('calculate tip %', function () {
        expect(calculateTipPercent('100.00', '20.00')).toEqual(20)
    });

    it('should append a new td element to table row', function () {
        let newTr = document.createElement('tr');
        newTr.id = 'payment1'
        appendTd(newTr, '$' + allPayments['payment1']['billAmt'])
        appendTd(newTr, '$' + allPayments['payment1']['tipAmt'])
        appendTd(newTr, allPayments['payment1']['tipPercent'] + '%')
        paymentTbody.append(newTr);
        let results = document.querySelectorAll('#payment1 td')

        expect((results[0].innerText)).toEqual('$100')
        expect((results[1].innerText)).toEqual('$20')
        expect((results[2].innerText)).toEqual('20%')
    });



    afterEach(function() {
      total = 0
      billAmt =''
      tipAmt = ''
      allPayments = {}
      let body = document.querySelector('tbody') 
      body.innerHTML = ''
    });
  });
  