import capitalize from '../functions/capitalize';

test('capitalize', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('new day')).toBe('New day');
    expect(capitalize('goto school')).toBe('Goto school');
});
