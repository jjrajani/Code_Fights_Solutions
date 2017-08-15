function longestWord(text) {
    text = text.replace(/\W/g, ' ').split(' ')
    let longest = '';
    text.forEach(w => {
        w = w.trim();
        longest = w.length > longest.length ? w : longest;
    });
    return longest;
}
