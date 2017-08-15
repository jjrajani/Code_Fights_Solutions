function alphabeticShift(inputString) {
    return inputString.split("").map((l, i) => {
        return inputString.charCodeAt(i) + 1 > 122 ? String.fromCharCode(97) : String.fromCharCode(inputString.charCodeAt(i) + 1);
    }).join("");
}
