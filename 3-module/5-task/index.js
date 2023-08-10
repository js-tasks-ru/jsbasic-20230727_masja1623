function getMinMax(str) {
  let numbers = str
    .split(' ')
    .filter((value) => !isNaN(parseFloat(value)))
    .map(value => parseFloat(value));

  let result = {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };

  return result;
}
