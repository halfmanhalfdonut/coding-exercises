// https://www.codewars.com/kata/help-the-bookseller

let stockList = (stock, asks) => {
  let total = 0;
  
  let str = asks.reduce((memo, ask) => {
    let count = 0;
    stock.forEach(cat => {
      if (cat.charAt(0) === ask) count += parseInt(cat.split(' ')[1], 10);
    });
    total += count;
    memo.push(`(${ask} : ${count})`);
    return memo;
  }, []).join(' - ');
  
  if (total === 0) str = '';
  
  return str;
};

