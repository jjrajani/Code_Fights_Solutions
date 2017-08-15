let calls = 0;
function digitDegree(n) {
    if (n.toString().length === 1) {
        return calls;
    } else {
        let total = 0;
        n.toString().split('').forEach((l) => {
            total += parseInt(l);
        });
        calls++;
        return digitDegree(total);
    }
}
