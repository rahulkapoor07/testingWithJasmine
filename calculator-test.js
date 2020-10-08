it('should calculate the monthly rate correctly', function() {
  // ...
  const values = {
    amount: '400000',
    years: '30',
    rate: '2.9'
  };
  expect(calculateMonthlyPayment(values)).toEqual('1664.92');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: '50000',
    years: '10',
    rate: '2.5'
  };
  expect(calculateMonthlyPayment(values)).toEqual('471.35');
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: '1000000',
    years: '30',
    rate: '35'
  };
  expect(calculateMonthlyPayment(values)).toEqual('29167.60');
});