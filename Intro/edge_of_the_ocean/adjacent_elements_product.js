function adjacentElementsProduct(inputArray) {
    let total;
    inputArray.forEach((n, i) => {
        if (i === 0) { total = n * inputArray[i + 1] }

        else if (inputArray[i + 1]) {
            n * inputArray[i + 1] > total
            ? total = n * inputArray[i + 1]
            : total = total;
        }
    });
    return total;
}
