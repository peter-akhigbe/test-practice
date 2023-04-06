import reverseString from '../functions/reverseString';

test('reverse String', () => {
  const numText = '123456789';
  const abcd = 'abcd'
  expect(reverseString(numText)).toBe('987654321');
  expect(reverseString(abcd)).toBe('dcba')
});
