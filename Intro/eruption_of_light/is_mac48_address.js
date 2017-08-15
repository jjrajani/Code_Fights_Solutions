let validChar = (l) => (
    l <= 'F' && l >= 'A'
    || l <= '9' && l >= '0'
);

function isMAC48Address(inputString) {
    let array = inputString.split('-');
    if (array.length < 6) { return false };

    let valid = true;
    let i = 0;

    while (valid && i < array.length) {
        if (!validChar(array[i].charAt(0))) { valid = false }
        if (!validChar(array[i].charAt(1))) { valid = false }
        i++;
    }
    return valid;
}
// another way
//
// function isMAC48Address(inputString) {
//     for (let i = 0; i < inputString.length; i++) {
//         if (i % 3 == 2) {
//             if (inputString[i] != '-') {
//                 return false;
//             }
//         } else {
//             let sym = inputString[i];
//             if (!('0' <= sym && sym <= '9' || 'A' <= sym && sym <= 'F')) {
//                 return false;
//             }
//         }
//     }
//
//     return inputString.length == 17;
//
// }
//
//
