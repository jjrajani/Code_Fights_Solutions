function minesweeper(matrix)  {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let solution = new Array(rows);
    for (let index = 0; index < solution.length; index++)
        solution[index] = new Array(columns);

    for (let i = 0; i < rows; i++)
        for (let j = 0; j < columns; j++) {
            let count = 0;
            if (i - 1 >= 0) {
                if (j - 1 >= 0)
                    if (matrix[i - 1][j - 1])
                        count++;
                if (j + 1 >= 0 & j + 1 < columns)
                    if (matrix[i - 1][j + 1])
                        count++;
                if (matrix[i - 1][j])
                    count++;
            }

            if (i + 1 >= 0 && i + 1 < rows) {
                if (j - 1 >= 0)
                    if (matrix[i + 1][j - 1])
                        count++;
                if (j + 1 >= 0 & j + 1 < columns)
                    if (matrix[i + 1][j + 1])
                        count++;
                if (matrix[i + 1][j])
                    count++;
            }

            if (j - 1 >= 0)
                if (matrix[i][j - 1])
                    count++;
            if (j + 1 >= 0 & j + 1 < columns)
                if (matrix[i][j + 1])
                    count++;

            solution[i][j] = count;
        }

    return solution;
}
