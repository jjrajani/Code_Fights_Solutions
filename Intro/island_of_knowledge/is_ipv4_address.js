function isIPv4Address(inputString) {
    inputString = inputString.split('.');
    if (inputString.length !== 4) { return false }
    let valid = true;
    inputString.forEach(input => {
        if (input > 255
            || !input.length
            || input.match(/[a-zA-Z]/i))
        { valid = false}
    });
    return valid;
}
