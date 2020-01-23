
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
  //return new Date(timestamp).toDateString();
  const offsetInMs = new Date(timestamp).getTimezoneOffset() * 60000;
  if(offsetInMs < 0){
    //console.log(new Date(timestamp), new Date(timestamp + offsetInMs));
    return (new Date(timestamp - offsetInMs).toDateString());
  } else {
    //console.log(new Date(timestamp), new Date(timestamp - offsetInMs));
    return (new Date(timestamp + offsetInMs).toDateString());
  }

  console.log(new Date(timestamp).getTimezoneOffset());

};

module.exports = { revenue, getFormattedDate };
