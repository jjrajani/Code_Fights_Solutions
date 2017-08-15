function absoluteValuesSumMinimization(a) {
  let minimum = Infinity;
  let element;
  for (let i = 0; i < a.length; i++) {
    let sum = 0;
    for (let j = 0; j < a.length; j++) {
      sum += Math.abs(a[i] - a[j]);
    }
    if (sum < minimum) {
      minimum = sum;
      element = a[i];
    }
  }
  return element;
}
