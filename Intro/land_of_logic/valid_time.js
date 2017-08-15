function validTime(time) {
    time = time.split(':');
    return parseInt(time[0]) < 24 && parseInt(time[1]) < 60;
}
