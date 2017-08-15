function variableName(name) {
    if (/^\d+$/.test(name.charAt(0))) {
        return false;
    }
    return /^\w+$/.test(name);
}
