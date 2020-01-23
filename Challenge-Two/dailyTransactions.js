
const revenue = transactions => {
  const result = {};
  transactions.forEach(transaction => {
    const dateKey = getFormattedDate(transaction.timestamp);
    if(dateKey in result){
      result[dateKey] += transaction.price;
    } else {
      result[dateKey] = transaction.price;
    }
  });
  return result;
};

const getFormattedDate = function(timestamp) {
  const offsetInMs = new Date(timestamp).getTimezoneOffset() * 60000;
  if(offsetInMs < 0){
    return (new Date(timestamp - offsetInMs).toDateString());
  } else {
    return (new Date(timestamp + offsetInMs).toDateString());
  }
};

module.exports = { revenue, getFormattedDate };
