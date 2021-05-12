import isValidNumber from '../../components/logic/validNum';

test('take a string and check if it can be a valid integer', () => {
  const res = isValidNumber('8');
  expect(res).toBeTruthy();
});

test('if input is a string or symbol it should return false', () => {
  const res = isValidNumber('*');
  expect(res).toBeFalsy();
});
