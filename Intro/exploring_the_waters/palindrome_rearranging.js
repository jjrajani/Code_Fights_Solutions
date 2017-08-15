function palindromeRearranging(inputString) {
    const unmatched = new Set();
    inputString.split('').forEach(char => {
        if (unmatched.has(char)) unmatched.delete(char);
        else unmatched.add(char);
    });
    return unmatched.size <= 1;
}
