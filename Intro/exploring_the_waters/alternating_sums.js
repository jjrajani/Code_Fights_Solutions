function alternatingSums(a) {
    return a.reduce((a, b, i) => {
        if (i % 2 !== 0) {
            return [a[0], a[1] + b];
        } else {
            return [a[0] + b, a[1]];
        }
    },[0, 0])
}
