import currentLoans from '../../mocks/currentLoans.json';

test('the pizza data is correct', () => {
  expect(currentLoans).toMatchSnapshot();
  expect(currentLoans.loans).toHaveLength(3);
});

for (let i = 0; i < currentLoans.loans.length; i += 1) {
  it(`currentLoans[${i}] should have properties (id,
    title,
    tranche,
    available,
    annualised_return,
    term_remaining,
    ltv,
    amount)`, () => {
    expect(currentLoans.loans[i]).toHaveProperty('id');
    expect(currentLoans.loans[i]).toHaveProperty('title');
    expect(currentLoans.loans[i]).toHaveProperty('tranche');
    expect(currentLoans.loans[i]).toHaveProperty('available');
    expect(currentLoans.loans[i]).toHaveProperty('annualised_return');
    expect(currentLoans.loans[i]).toHaveProperty('term_remaining');
    expect(currentLoans.loans[i]).toHaveProperty('ltv');
    expect(currentLoans.loans[i]).toHaveProperty('amount');
  });
}
