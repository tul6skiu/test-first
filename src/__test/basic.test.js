import calculateAndGetHealthIndecator from '../basic';

const dataList = [
  ['Маг', 60, 'healthy'],
  ['Эльф', 30, 'wounded'],
  ['Человек', 10, 'critical'],
];

const handler = test.each(dataList);

handler('check health indecator for %s when health %i', (name, health, expected) => {
  const result = calculateAndGetHealthIndecator({ name, health });
  expect(result).toBe(expected);
});
