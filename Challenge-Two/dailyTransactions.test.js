const { revenue, getFormattedDate } = require('./dailyTransactions.js');
const { expectation, transactions } = require('./dailyTransactions');

describe('daily transactions test', () => {
  it('can get the correctly formatted date', () => {
    const timestamp = 1571176523720;
    const formattedDate = 'Tue Oct 15 2019';
    expect(getFormattedDate(timestamp)).toEqual(formattedDate);
  });

  it('can add transactions from the same date together', () => {
    const transaction1 = { price: 3, timestamp: 1571176523720 };
    const transaction2 = { price: 4, timestamp: 1571176523722 };
    const transaction3 = { price: 5, timestamp: 1571176523724 };
    const transaction4 = { price: 100, timestamp: 4 };
    const transactionSample = [transaction1, transaction2, transaction3, transaction4];
    
    expect(revenue(transactionSample)).toEqual({ 'Tue Oct 15 2019': 12, 'kasdfj': 100 });
  });

  it('can output the revenue given an array of transactions', () => {
    expect(revenue(transactions)).toEqual(expectation);
  });
});
