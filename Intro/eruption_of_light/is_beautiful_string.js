function isBeautifulString(inputString) {
    let map = {};

    inputString.split('').forEach(l => {
        map[l] ? map[l]++ : map[l] = 1;
    });
    let array = Object.keys(map).sort();
    if (array.length < array[array.length - 1].charCodeAt(0) - 96)  return false;
    let valid = true;
    array.forEach((a, i) => {
        if (i >= 1) {
            let firstLetterCount = map[array[i - 1]];
            let secondLetterCount = map[array[i]];
            if (secondLetterCount > firstLetterCount) {
                valid = false
            }
        };
    });

    return valid;
}
