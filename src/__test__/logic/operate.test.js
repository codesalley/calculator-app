import operate from '../../components/logic/operate';

test('math operators [Addition] take to numbers and compute base on the input, and return it as a string', () => {
  const res = operate(20, 30, '+');
  const resT = operate(40, 10, '+');
  expect(res).toEqual(resT);
});

test('math operators [multiplication] take to numbers and compute base on the input, and return it as a string', () => {
  const res = operate(2, 50, 'X');
  const resT = operate(5, 20, 'X');
  expect(res).toEqual(resT);
});

test('math operators [unknown] return false if operator is unknown', () => {
  const res = operate(2, 100, '^');
  expect(res).toBeFalsy();
});
