import calculate from '../../components/logic/calculate';

test('if valute is === +/- and no values are entred, it should return false', () => {
  const res = calculate({ next: null, total: null }, '+/-');
  expect(res).toEqual(false);
});

test('if button === 0 and and current value is 0 it should not compute ', () => {
  const res = calculate({ next: '000' }, '0');
  expect(res).toBeFalsy();
});
