import findOperator from '../../components/logic/findOperator';

test('takes the state value and next input to check if it is an operator or not', () => {
  const res = findOperator('123', '+');
  expect(res).toBeFalsy();
});

test('finds and return the match operator', () => {
  const res = findOperator('123+', '+');
  expect(res).toMatch('+');
});
