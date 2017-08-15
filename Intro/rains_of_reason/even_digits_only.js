function evenDigitsOnly(n) {
    n = n.toString().split('').map(l => {
        return parseInt(l) % 2 === 0;
    });
    return n.indexOf(false) === -1;
}
