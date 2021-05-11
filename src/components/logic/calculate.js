/* eslint-disable consistent-return */
import operate from './operate';
import isValidNumber from './validNum';
import toInt from './toInt';
import findOperator from './findOperator';
import renderCheck from './renderCheck';

const calculate = (calculateData, buttonName) => {
  const opSigns = ['÷', 'X', '-', '+'];
  const {
    total, next, setNext, setTotal,
  } = calculateData;

  if (buttonName === 'AC') {
    setTotal(null);
    setNext(null);
    return true;
  }
  if (buttonName === '0') {
    if ((next && next.split('')[0] === '0') && next.length > 2) {
      return false;
    }
  }
  if (buttonName === '=' && total && next) {
    const res = operate(toInt(total), toInt(total), '+');
    setTotal(renderCheck(res.toString()));
    return true;
  }

  if (isValidNumber(buttonName) && total) {
    setNext(null);
    setTotal(null);
    setNext(''.concat(buttonName));
    return false;
  }
  if (isValidNumber(buttonName)) {
    setNext(next ? next.concat(buttonName) : ''.concat(buttonName));
    return true;
  }
  if (buttonName === '.') {
    if (next && next.includes('.')) {
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
      setTotal(renderCheck((conTotal * -1).toString()));
    }
  }

  if (buttonName === '%') {
    if (!total && next) {
      const res = operate(toInt(next), 100, '÷');
      setNext(next.concat(buttonName));
      setTotal(renderCheck(res.toString()));
    }
  }
  if (next && ['÷', 'X', '-', '+'].includes(buttonName)) {
    if (next.split('')[0] === '-' && !['÷', 'X', '-', '+'].includes(next.split('')[next.length - 1])) {
      setNext(next.concat(buttonName));
      return true;
    }

    if (!findOperator(next, opSigns.join(''))) {
      setNext(next.concat(buttonName));
      return true;
    }
  }

  if (buttonName === '=' && next && findOperator(next, opSigns.join(''))) {
    const datatToArray = next.split('');
    const op = datatToArray.filter((e) => ['÷', 'X', '-', '+'].includes(e));
    const denom = next.split(op)[0];
    const base = next.split(op)[1];
    const results = operate(toInt(denom), toInt(base), op.join());
    setTotal(renderCheck(results.toString()));
    return true;
  }
};

export default calculate;
