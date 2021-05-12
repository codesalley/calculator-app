import renderCheck from '../../components/logic/renderCheck';

test('check lengh of th string, if values exceed 10 it should replace the rest with letter e', () => {
  const res = renderCheck('123456789000');
  expect(res).toEqual('123456789e');
});

test('if input string length is less than 10 it shoud return untouched', () => {
  const res = renderCheck('123123');
  expect(res).toEqual('123123');
});
