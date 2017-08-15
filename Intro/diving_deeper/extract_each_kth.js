function extractEachKth(inputArray, k) {
    return inputArray.filter((n, i) => (i + 1) % k !== 0);
}
