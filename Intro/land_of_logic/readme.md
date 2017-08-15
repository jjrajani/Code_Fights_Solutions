### Different Squares
#### Task
Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

#### Example

```
For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

* 1 2
* 2 2
* 2 1
* 2 2
* 2 2
* 2 2
* 2 2
* 1 2
* 2 2
* 2 3
* 2 3
* 2 1

```

---

### Digits Product
#### Task
Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

#### Example

```
For product = 12, the output should be

digitsProduct(product) = 26;

For product = 19, the output should be

digitsProduct(product) = -1.
```
---

### File Naming
#### Task
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

#### Example

```
For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be

fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].
```
---

### Longest Word
#### Task
Define a word as a sequence of consecutive English letters. Find the longest word from the given string.

#### Example

```
For text = "Ready, steady, go!", the output should be

longestWord(text) = "steady".
```

---
### Message From Binary Code
#### Task
You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.

Assuming that your hunch is correct, decode the message.

#### Example

```
For code = "010010000110010101101100011011000110111100100001", the output should be

messageFromBinaryCode(code) = "Hello!".

The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in the ASCII-table, so the first letter is H.
Other letters can be obtained in the same manner.
```
---
### Spiral Numbers
#### Task
Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

#### Example

```
For n = 3, the output should be

spiralNumbers(n) = [[1, 2, 3],
                    [8, 9, 4],
                    [7, 6, 5]]
```

---
### Sudoku
#### Task
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.

This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

#### Example

```
For the first example below, the output should be true. For the other grid, the output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.
```

![Sudoku Example Image](https://codefightsuserpics.s3.amazonaws.com/tasks/sudoku/img/sudoku.png?_tm=1494791407147)
---

### Sum Up Numbers
#### Task
CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.

Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.

#### Example

```
For inputString = "2 apples, 12 oranges", the output should be

sumUpNumbers(inputString) = 14.
```

---

### Valid Time
#### Task
Check if the given string is a correct time representation of the 24-hour clock.

#### Example

```
For time = "13:58", the output should be

validTime(time) = true;

For time = "25:51", the output should be

validTime(time) = false;

For time = "02:76", the output should be

validTime(time) = false.
```

---
