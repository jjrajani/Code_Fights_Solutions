function growingPlant(upSpeed, downSpeed, desiredHeight) {
    let i = 1;
    let height = 0;
    while (height < desiredHeight) {
        height += (upSpeed);
        if (height < desiredHeight) {
            height = height - downSpeed;
            i++
        }
    }
    return i;
}
