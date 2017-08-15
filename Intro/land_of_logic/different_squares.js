function differentSquares(matrix) {
  let answer = [];

  for (let x = 0; x < matrix.length - 1; x++) {
    for (let y = 0; y < matrix[0].length - 1; y++) {
      let square = '';
      for (let dx = 0; dx <= 1; dx++) {
        for (let dy = 0; dy <= 1; dy++) {
          square += matrix[x + dx][y + dy];
        }
      }
      answer.push(square);
    }
  }
  let uniques = new Set(answer);
  return uniques.size;
}
