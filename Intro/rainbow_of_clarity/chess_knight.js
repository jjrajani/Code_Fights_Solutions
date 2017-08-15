function chessKnight(cell) {
    let x = parseInt(cell.charCodeAt(0) - 96);
    let y = parseInt(cell.charAt(1));

    let upLeft = (y, x) => {return ( y + 2 <= 8 && x - 1 > 0 ) }
    let leftUp = (y, x) => { return ( y + 1 <= 8 && x - 2 > 0 ) }
    let downLeft = (y, x) => { return ( y - 2 > 0 && x - 1 > 0 ) }
    let leftDown = (y, x) => { return ( y - 1 > 0 && x - 2 > 0 ) }

    let upRight = (y, x) => { return ( y + 2 <= 8 && x + 1 <= 8 )  }
    let rightUp = (y,x) => {  return ( y + 1 <= 8 && x + 2 <= 8 ) }
    let downRight = (y, x) => { return ( y - 2 > 0 && x + 1 <= 8 ) }
    let rightDown = (y, x) => { return ( y - 1 > 0 && x + 2 <= 8 ) }


    let possibleMoves = 0;
    if (upLeft(y, x))    {  possibleMoves++; }
    if (leftUp(y, x))    {  possibleMoves++; }
    if (downLeft(y, x))  {  possibleMoves++; }
    if (leftDown(y, x))  {  possibleMoves++; }

    if (upRight(y, x))   {  possibleMoves++; }
    if (rightUp(y, x))   {  possibleMoves++; }
    if (downRight(y, x)) {  possibleMoves++; }
    if (rightDown(y, x)) {  possibleMoves++; }
    return possibleMoves;
}
