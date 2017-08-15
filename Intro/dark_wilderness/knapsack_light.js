function knapsackLight(value1, weight1, value2, weight2, maxW) {

    let combinedWeight = weight1 + weight2;
    let combinedValue = value1 + value2;
    if (combinedWeight <= maxW) { return combinedValue }


    let canTake1 = (weight1 <= maxW);
    let canTake2 = (weight2 <= maxW);

    if (canTake1 && canTake2) {
        return value1 > value2 ? value1 : value2
    } else if (canTake1) {
        return value1
    } else if (canTake2) {
        return value2
    } else {
        return 0;
    }

}
