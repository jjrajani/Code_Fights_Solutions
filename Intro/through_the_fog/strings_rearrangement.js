function stringsRearrangement(inputArray) {
    let bruteForce = function(depth, inputArray) {
      let swap = function(i, j) {
        tmp = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = tmp;
      };
      if (depth === inputArray.length) {
        for (let i = 0; i < inputArray.length - 1; i++) {
          let differences = 0;
          for (let j = 0; j < inputArray[i].length; j++) {
            if (inputArray[i][j] !== inputArray[i + 1][j]) {
              differences++;
            }
          }
          if (differences !== 1) {
            return false;
          }
        }
        return true;
      }
      for (let i = depth; i < inputArray.length; i++) {
        swap(depth, i);
        if (bruteForce(depth + 1, inputArray)) {
          return true;
        }
        swap(depth, i);
      }
      return false;
    };
  return bruteForce(0, inputArray);
}

// had help for this one
