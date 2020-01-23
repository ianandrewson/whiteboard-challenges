Create a function revenue that takes transactions and returns an object of the daily revenue.

A transaction is an object with price and timestamp fields:
    { price: 5, timestamp: 1571176523720 }

The output should resemble this:
    {'Thu Jul 18 2019': 25,
    'Thu Jul 04 2019': 47,
    'Tue Jul 09 2019': 18,
    ...
    };