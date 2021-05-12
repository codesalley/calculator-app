import getRandomeInt from '../../components/logic/getRandom';

test('get random number from 0 to input number', () => {
  const res = getRandomeInt(8);

  expect(res).toBeLessThanOrEqual(8);
});

test('number must not be zero or less than 0', () => {
  const res = getRandomeInt(5);
  expect(res).toBeGreaterThan(0);
});
