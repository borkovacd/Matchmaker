export function getAgeObjects(min, max) {
  let result = [];

  for (let i = min; i <= max; i++) {
    result.push({
      name: i,
      value: i
    });
  }

  return result;
}
