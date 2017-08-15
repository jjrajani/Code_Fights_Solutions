function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(elem => {
        return elem === elemToReplace ? substitutionElem : elem;
    });
}
