const { getDistance, getPower } = require('./solution');

// Test cases for getDistance function
test('testing distance between two points', () => {
  expect(getDistance([0, 0], [10, 0])).toBe(10);
});

test('testing distance between same points', () => {
    expect(getDistance([0, 0], [0, 0])).toBe(0);
});

test('testing distance between two negative points', () => {
    expect(getDistance([-10, -10], [0, -10])).toBe(10);
});


// Test cases for getPower function
test('testing link station’s power using smaller distance and greater reach', () => {
  expect(getPower(10, 12)).toBe(4);
});

test('testing link station’s power using greater distance and smaller reach', () => {
  expect(getPower(12, 10)).toBe(0);
});

test('testing link station’s power to equal distance and reach values', () => {
    expect(getPower(0, 0)).toBe(0);
});

test('testing link station’s power to negative distance value and positive reach value', () => {
    expect(getPower(-10, 0)).toBe(100);
});

test('testing link station’s power to positive distance value and negative reach value', () => {
    expect(getPower(0, -10)).toBe(0);
});

test('testing link station’s power to negative distance and negative reach values', () => {
    expect(getPower(-10, -10)).toBe(0);
});

