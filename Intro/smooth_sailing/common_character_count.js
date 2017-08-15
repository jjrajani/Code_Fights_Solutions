cofunction commonCharacterCount(s1, s2) {
    let chars1 = {};
    let chars2 = {};
    s1.split('').forEach(s => {
        chars1[s]
        ? chars1[s] += 1
        : chars1[s] = 1;
    });
    s2.split('').forEach(s => {
        chars2[s]
        ? chars2[s] += 1
        : chars2[s] = 1;
    });
    Object.keys(chars1).forEach(key => {
        if (chars2[key]) {
            chars1[key] = chars2[key] <= chars1[key]
            ? chars2[key]
            : chars1[key];
        } else {
            chars1[key] = 0;
        }
    });
    let total = 0;
    Object.keys(chars1).forEach(k => {
        total += chars1[k];
    });
    return total;
}


/// A 'smarter' solution
function commonCharacterCount(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        s2 = s2.replace(s1[i], "!");
    }
    return s2.replace(/[^!]/g, "").length;
}
