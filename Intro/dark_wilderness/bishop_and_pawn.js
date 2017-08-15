function bishopAndPawn(bishop, pawn) {
    let bishopColumn = bishop.charCodeAt(0) - 96;
    let bishopRow = parseInt(bishop.charAt(1));

    let pawnColumn = pawn.charCodeAt(0) - 96;
    let pawnRow = parseInt(pawn.charAt(1));

    return Math.abs(bishopColumn - pawnColumn) === Math.abs(bishopRow - pawnRow);
}
