function avoidObstacles(inputArray) {
    for (let i = 1; ; i++) {
        let found = true;
        for (let k = 0; k < inputArray.length; k++) {
          if (inputArray[k] % i === 0) found = false;
        }

        if (found) return i;

      }
}
