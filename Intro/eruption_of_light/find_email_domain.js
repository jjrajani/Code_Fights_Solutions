function findEmailDomain(address) {
    let symbol = address.lastIndexOf('@');
    return address.slice(symbol + 1, address.lenght);
}
