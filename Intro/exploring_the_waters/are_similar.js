function areSimilar(a, b) {
    if (a.toString() === b.toString()) { return true }

    let aArray = [];
    let bArray = [];
    // push not identical entries to array, one mismatch array for each input array;
    for ( let i = 0; i < a.length; i++ ) {
       if (a[i] !== b[i]) {
           aArray.push(a[i]);
           bArray.push(b[i]);
       }
    };
    // reverse one not identical array
    aArray = aArray.reverse();
    // if only two misplaced, indicating one neccessary swap
    // && if reversed difference array === not reversed difference array
    // swap is valid
    if (aArray.length === 2 && (aArray.toString() === bArray.toString())) {
        return true;
    }
    return false;
}
