function deleteDigit(n) {
    n = n.toString().split('');
    let combinations = [];
    for (let i = 0; i < n.length; i++ ) {
        let number = [];
        n.forEach((l, index) => {
            if (i !== index) {
                number.push(l);
            }
        });
        combinations.push(parseInt(number.join('')));
    }
    return Math.max.apply(null, combinations)
}
