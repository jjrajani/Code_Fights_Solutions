function sortByHeight(a) {
    let noTrees = a.filter(b => b !== -1);
    noTrees = noTrees.sort((a, b) => a < b ? -1 : 1);
    a.forEach((b, i) => {
        if (b === -1) {
            noTrees.splice(i, 0, b);
        }
    });
    return noTrees;
}
