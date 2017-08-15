function buildPalindrome(st) {
    let canConvert;
    for (let i = st.length; ; i++) {
        canConvert = true;
        for (let j = 0; j < i - j - 1; j++) {
            if (i - j - 1 < st.length && st[j] != st[i - j - 1]) {
              canConvert = false;
              break;
            }
        }
        if (canConvert) {
            for (let j = st.length; j < i; j++) {
                st += st[i - j - 1];
            }
            return st;
        }
    }
}

// had help for this one
