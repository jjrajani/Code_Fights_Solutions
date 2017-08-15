function spiralNumbers(n) {
    var arr = Array(n),
        x = 0,
        y = n,
        total = n * n--,
        dx = 1,
        dy = 0,
        i = 1,
        j = 0;
    while (y) {
        arr[--y] = [];
    }
    while (i <= total) {
        arr[y][x] = i++;
        x += dx;
        y += dy;
        if (++j == n) {
            if (dy < 0) {x++; y++; n -= 2}
            j = dx; dx = -dy; dy = j; j = 0;
       }
    }
    return arr;
}
