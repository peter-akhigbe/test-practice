import stringLength from '../functions/stringLength.js';

describe('stringLength function', () => {
  test('should return the correct length of a string', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test('should throw an error if string is empty', () => {
    expect(() => {
      stringLength('');
    }).toThrow('String must be at least 1 character');
  });

  test('should throw an error if string is too long', () => {
    expect(() => {
      stringLength('this string is too long');
    }).toThrow('String must not be than 10 characters');
  });
});

