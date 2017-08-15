function longestDigitsPrefix(inputString) {
    if (!/\s/g.test(inputString.charAt(0))) {
        if (!/^[a-zA-Z]+$/.test(inputString.charAt(0))) {
            let firstLetter = 0;
            isLetter = false;
            while (!isLetter) {
                if (!/^[a-zA-Z]+$/.test(inputString[firstLetter])) {
                    firstLetter++;
                } else {
                    isLetter = true;
                }
            }
            return inputString.slice(0, firstLetter);
        } else {
            return '';
        }
    } else {
        return '';
    }
}
