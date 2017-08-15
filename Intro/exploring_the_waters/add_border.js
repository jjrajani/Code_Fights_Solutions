function addBorder(picture) {
    let frame = new Array(picture[0].length + 2).fill('*').join('');
    return [
        frame,
        ...picture.map(p => `*${p}*`);,
        frame
    ];
}

// With repeat();
function addBorder(picture) {
    var width = picture[0].length + 2;
    return [
        '*'.repeat(width),
        ...picture.map(line => `*${line}*`),
        '*'.repeat(width)
    ];
}
