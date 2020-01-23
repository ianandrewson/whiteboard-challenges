const dateAdder = require('./dateAdder.js');

describe('tests for adding to a date', () => {

  const startDate = new Date('1/1/2020');
  console.log(startDate);

  it('can add a single day', ()  => {
    expect(dateAdder(startDate, '1d')).toEqual('1/2/2020');
  });
  it

});
