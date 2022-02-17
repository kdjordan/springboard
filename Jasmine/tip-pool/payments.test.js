describe("Payments test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = '100.00'
        tipAmtInput.value = '20.00'
    });
  
    it('should add a new payment to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100.00');
        expect(allPayments['payment1'].tipAmt).toEqual('20.00');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
        
    });

    it('should not add a new payment to allPayments if bill amount is blank', function () {
        billAmtInput.value = ''
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toEqual(0);
    });

    it('should create new TR in paymentTable with info from curPayment', function () {
        let curPayment = createCurPayment()
        allPayments['payment1'] = curPayment
        appendPaymentTable(curPayment)
        // console.log(allPayments)
        
        let paymentTable = document.querySelectorAll('#paymentTable tbody tr td')
        console.log(paymentTable)
        expect(paymentTable.length).toEqual(3)
        // expect(paymentTable[0].innerText).toEqual('$100.00')
        
    });



    afterEach(function() {
        allPayments = {}
        paymentId = 0;
        billAmtInput.value = ''
        tipAmtInput.value = ''
        tbody.innerHTML = ''

    });
  });
  