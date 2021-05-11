/* eslint-disable consistent-return */
import operate from './operate';
import isValidNumber from './validNum';
import toInt from './toInt';

const calculate = (calculateData, buttonName) => {
  const {
    total, next, operation, setNext, setTotal,
  } = calculateData;
  console.log(total);
  console.log(next);
  console.log(operation);
  console.log(setNext);
  console.log(setTotal);
  console.log(buttonName);
  if (buttonName === 'AC') {
    setTotal(null);
    setNext(null);
    return true;
  }
  if (isValidNumber(buttonName) && total === null) {
    if (next && next.split('')[0] === '0') {
      setNext(null);
      return false;
    }
    setNext(next ? next.concat(buttonName) : ''.concat(buttonName));
    return true;
  }
  if (isValidNumber(buttonName) && total) {
    setNext(null);
    setTotal(null);
    setNext(''.concat(buttonName));
    return false;
  }
  if (buttonName === '.') {
    if (next.includes('.')) {
      return false;
    }
    setNext(next ? next.concat(buttonName) : '0'.concat(buttonName));
  }
  if (buttonName === '+/-') {
    if (!total && !next) {
      return false;
    }
    if (!total) {
      const conNum = toInt(next);
      setNext((conNum * -1).toString());
    }
    if (total) {
      const conNum = toInt(next);
      const conTotal = toInt(total);
      setNext((conNum * -1).toString());
      setTotal((conTotal * -1).toString());
    }
  }

  if (buttonName === '%') {
    if (!total && next) {
      const res = operate(toInt(next), 100, '/');
      setNext(next.concat(buttonName));
      setTotal(res.toString());
    }
  }
};

export default calculate;

// console.log(total);
// if (isValidNumber(buttonName) && operation == null) {
//   return { next: next + buttonName };
// }
// if (isValidNumber(next) && operation && !total) {
//   return { next: `${next} ${operation}` };
// }
// if (isValidNumber(next) && operation && total && buttonName === '=') {
//   return operate(total, next, buttonName);
// }

// if (buttonName === 'AC') {
//   return { total: null, next: null, operation: null };
// }
// if (buttonName === '.') {
//   return !next ? { next: `0${buttonName}` } : { next: `${next}${buttonName}` };
// }
// if (buttonName === '+/-') {
//   return !total ? { next: operate(next, -1, '*') } :
// { total: operate(total, -1, '*'), next: operate(next, -1, '*') };
// }
// if (buttonName === '%') {
//   if (!next && !total) {
//     return { total: null, next: null, operation: null };
//   } if (next && !total) {
//     return { next: operate(next, 100, '/') };
//   } if (next && total) {
//     const res = operate(next, 100, '/');
//     return { total: operate(res, next, '*') };
//   }
// }
