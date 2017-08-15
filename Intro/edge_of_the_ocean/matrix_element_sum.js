function matrixElementsSum(matrix) {
    let total = 0;
    let invalidIndex = [];
    matrix.forEach((array) => {
        array.forEach((a, i) => {
            if (a === 0) {
                invalidIndex.push(i);
            }
            if (invalidIndex.indexOf(i) === -1) {
                total += a;
            }
        });
    });
    return total;
}
