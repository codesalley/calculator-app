/* eslint-disable consistent-return */
import operate from './operate';
import isValidNumber from './validNum';

const calculate = (calculateData, buttonName) => {
  const { total, next, operation } = calculateData;
  console(total);
  if (isValidNumber(buttonName) && operation == null) {
    return { next: next + buttonName };
  }
  if (isValidNumber(next) && operation && !total) {
    return { next: `${next} ${operation}` };
  }
  if (isValidNumber(next) && operation && total && buttonName === '=') {
    return operate(total, next, buttonName);
  }

  if (buttonName === 'AC') {
    return { total: null, next: null, operation: null };
  }
  if (buttonName === '.') {
    return !next ? { next: `0${buttonName}` } : { next: `${next}${buttonName}` };
  }
  if (buttonName === '+/-') {
    return !total ? { next: operate(next, -1, '*') } : { total: operate(total, -1, '*'), next: operate(next, -1, '*') };
  }
  if (buttonName === '%') {
    if (!next && !total) {
      return { total: null, next: null, operation: null };
    } if (next && !total) {
      return { next: operate(next, 100, '/') };
    } if (next && total) {
      const res = operate(next, 100, '/');
      return { total: operate(res, next, '*') };
    }
  }
};

export default calculate;
