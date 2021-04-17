import { linearInterpolate, Params } from './layout';

const params: Params = {
  inputRange: [0, 1],
  outputRange: [0, 100],
};

test('linearInterpolate within input range', () => {
  expect(linearInterpolate(0.25, params)).toBe(25);
  expect(linearInterpolate(0.5, params)).toBe(50);
  expect(linearInterpolate(0.75, params)).toBe(75);
});

test('linearInterpolate with clamp', () => {
  expect(linearInterpolate(-1, params)).toBe(0);
  expect(linearInterpolate(2, params)).toBe(100);
});
