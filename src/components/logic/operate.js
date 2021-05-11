import Big from 'big.js';

const operation = (total, next, buttonName) => {
  const newTotal = Big(total);
  const newNext = Big(next);
  let res = 0;
  switch (buttonName) {
    case '-':
      res = newTotal.minus(newNext);
      return res;
    case '+':
      res = newTotal.plus(next);
      return res;
    case 'x' || 'X':
      res = newTotal.mul(newNext);
      return res;
    case '%':
      res = newTotal.mod(newNext);
      return res;
    case '/' || '÷':
      res = newTotal.div(newNext);
      return res;
    default:
      return false;
  }
};

export default operation;
