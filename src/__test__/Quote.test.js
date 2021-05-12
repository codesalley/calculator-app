import renderer from 'react-test-renderer';
import QuotePage from '../components/Quote';

test('render QuotePage properly', () => {
  const res = renderer.create(<QuotePage />).toJSON();
  expect(res).toMatchSnapshot();
});
