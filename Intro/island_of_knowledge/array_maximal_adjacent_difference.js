function arrayMaximalAdjacentDifference(inputArray) {
    let difference = 0;

    inputArray.forEach((input, i) => {
        if (inputArray[i + 1]) {
          let currentDifference = input - inputArray[i + 1];

          if (currentDifference < 0 ) currentDifference = currentDifference * -1;

          if (currentDifference >= 0) {
           difference = difference < currentDifference
               ? currentDifference
               : difference;
          }
        }
    });
    return difference;
}
