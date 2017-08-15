function depositProfit(deposit, rate, threshold) {
    let i = 0;
    while (deposit < threshold) {
        deposit = deposit * (1 + (rate/100))
        i++;
    }
    return i;
}
