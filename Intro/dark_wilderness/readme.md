### Bishop and Pawn
#### Task:
Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

![Bishop and Pawn Example Image](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/bishop.jpg?_tm=1493360096740)

#### Example

```For bishop = "a1" and pawn = "c3", the output should be

bishopAndPawn(bishop, pawn) = true.
```

![Bishop and Pawn Example Image 2](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/ex1.jpg?_tm=1493360096945)

```
For bishop = "h1" and pawn = "h3", the output should be

bishopAndPawn(bishop, pawn) = false.
```

![Bishop and Pawn Example Image 3](https://codefightsuserpics.s3.amazonaws.com/tasks/bishopAndPawn/img/ex2.jpg?_tm=1493360097459)

---

### Digit Degree
#### Task:
Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

Given an integer, find its digit degree.

#### Example

```
For n = 5, the output should be

digitDegree(n) = 0;

For n = 100, the output should be

digitDegree(n) = 1.

1 + 0 + 0 = 1.

For n = 91, the output should be

digitDegree(n) = 2.

9 + 1 = 10 -> 1 + 0 = 1.
```

---

### Growing Plant
#### Task:
Each day a plant is growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to the lack of sun heat. Initially, plant is 0 meters tall. We plant the seed at the beginning of a day. We want to know when the height of the plant will reach a certain level.

#### Example

```
For upSpeed = 100, downSpeed = 10 and desiredHeight = 910, the output should be

growingPlant(upSpeed, downSpeed, desiredHeight) = 10.
```

---

### Knapsack Light
#### Task:
You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

#### Example

```
For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 8, the output should be

knapsackLight(value1, weight1, value2, weight2, maxW) = 10.

You can only carry the first item.

For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4 and maxW = 9, the output should be

knapsackLight(value1, weight1, value2, weight2, maxW) = 16.

You're strong enough to take both of the items with you.

For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4 and maxW = 6, the output should be

knapsackLight(value1, weight1, value2, weight2, maxW) = 7.

You can't take both items, but you can take any of them.
```

---

### Longest Digits Prefix
#### Task:
Given a string, output its longest prefix which contains only digits.

#### Example

```
For inputString="123aa1", the output should be

longestDigitsPrefix(inputString) = "123".
```
