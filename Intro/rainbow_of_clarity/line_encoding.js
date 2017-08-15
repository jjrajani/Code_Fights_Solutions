function lineEncoding(s) {
    let index = 0;
    let count = 0;
    let string = '';
    s.split('').forEach((l, i) => {
       if (s[i + 1] === l) {
           index = i + 1;
           count++;
       } else {
           count++;
           if (count > 1) {
               string += `${count}${l}`
           } else {
               string += `${l}`
           }
           count = 0;
       }
    });
    return string;
}
