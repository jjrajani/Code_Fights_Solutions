function chessBoardCellColor(cell1, cell2) {
    var getColor = (cell) => {
      let col = cell.charCodeAt(0) - 64;
      let row = parseInt(cell.charAt(1));
      let color = 0;

      if (col % 2 === 0) {
        color = (row % 2 === 0) ? 1 : 2;
      } else {
        color = (row % 2 === 0) ? 2 : 1;
      }
      return color;
    }

    let firstColor = getColor(cell1);
    let secondColor = getColor(cell2);

    return firstColor === secondColor;

}
