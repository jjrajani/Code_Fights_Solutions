### Chess Knight
#### Task
Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.
![Chess Knight Example](https://codefightsuserpics.s3.amazonaws.com/tasks/chessKnight/img/knight.jpg?_tm=1486560102464)

#### Example

```
For cell = "a1", the output should be

chessKnight(cell) = 2.
```
![Chess Knight Example 2](https://codefightsuserpics.s3.amazonaws.com/tasks/chessKnight/img/ex_1.jpg?_tm=1486560102718)

```
For cell = "c2", the output should be

chessKnight(cell) = 6.
```
![Chess Knight Example 3](https://codefightsuserpics.s3.amazonaws.com/tasks/chessKnight/img/ex_2.jpg?_tm=1486560102902)
---

### Delete Digit
#### Task
Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

#### Example

```
For n = 152, the output should be

deleteDigit(n) = 52;

For n = 1001, the output should be

deleteDigit(n) = 101.
```
---

### Is Digit
#### Task
Determine if the given character is a digit or not.

Example

```
For symbol = '0', the output should be

isDigit(symbol) = true;

For symbol = '-', the output should be

isDigit(symbol) = false.
```
---

### Line Encoding
#### Task
Given a string, return its encoding defined as follows:

First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
for example, "aabbbc" is divided into ["aa", "bbb", "c"]
Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
for example, substring "bbb" is replaced by "3b"
Finally, all the new strings are concatenated together in the same order and a new string is returned.

#### Example

```
For s = "aabbbc", the output should be

lineEncoding(s) = "2a3bc".
```
