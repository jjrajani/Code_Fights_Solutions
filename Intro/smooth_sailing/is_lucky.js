function isLucky(n) {
    n = n.toString().split('');
    let first = n.slice(0, ((n.length) / 2))
    let second = n.slice(((n.length) / 2), n.length)
    return first.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    }) === second.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
}
