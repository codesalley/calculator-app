import toInt from '../../components/logic/toInt';

test('turns a string into a valid integer', () => {
  const res = toInt('123');
  expect(res).toEqual(123);
});

test('turn a string with decimanl into a float', () => {
  const res = toInt('22.6');
  expect(res).toEqual(22.6);
});
