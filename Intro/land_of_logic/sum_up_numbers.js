function sumUpNumbers(inputString) {
    let numbers = inputString.replace(/[^0-9]/g, '-');
    numbers = numbers.split('-').filter(n => n.length > 0);
    let total = 0;
    numbers.forEach(n => {
        total += parseInt(n);
    });
    return total;
}
