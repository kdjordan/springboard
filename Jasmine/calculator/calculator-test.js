
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({rate: 3.8, years: 30, amount: 250000})).toEqual("79166.67");
});

it('should not pass and let user know that an input field is missing', function () {
  expect(calculateMonthlyPayment({rate: '', years: 30, amount: 250000})).toEqual('An input field is blank');
});

// it("should return a result with 2 decimal places", function() {
//   // ..
// });

/// etc
