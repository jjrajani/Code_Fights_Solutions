function boxBlur(image) {
  let answer = [];

  for (let x = 1; x < image.length - 1; x++) {
    let line = [];
    for (let y = 1; y < image[0].length - 1; y++) {
      let sum = 0;
      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          sum += image[x + dx][y + dy];
        }
      }
      line.push(Math.floor(sum / 9));
    }
    answer.push(line);
  }
  return answer;
}


// Had Help for this one
