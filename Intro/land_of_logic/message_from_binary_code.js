function messageFromBinaryCode(code) {
    let string = '';
    for (let i = 8; i < code.length + 8; i += 8) {
        let codeSlice = code.slice((i - 8), i);
        codeSlice = parseInt(codeSlice, 2)
        string += String.fromCharCode(codeSlice)
    }
    return string;
}
