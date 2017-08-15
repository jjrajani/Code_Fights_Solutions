function allLongestStrings(inputArray) {
    let arrays = {};
    let key = 0;
    inputArray.forEach((s) => {
        key = s.length > key ? s.length : key;
        arrays[s.length]
        ? arrays[s.length].push(s)
        : arrays[s.length] = [s];
    });
    return arrays[key];
}
