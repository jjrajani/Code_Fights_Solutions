### Adjacent Elements Product
#### **Task:**
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

#### Example


```
For inputArray = [3, 6, -2, -5, 7, 3], the output should be

adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
```

---

### Almost Increasing Sequence
#### **Task:**
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

#### Example


```
For sequence = [1, 3, 2, 1], the output should be

almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be

almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
```

---

### Make Array Consecutive 2
#### **Task:**

Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

#### Example


```
For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.
```

---

### Matrix Element Sum
#### **Task:**
After becoming famous, CodeBots decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms, each cell containing an integer - the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots.

Help the bots calculate the total price of all the rooms that are suitable for them.

#### Example


```
For

matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
the output should be

matrixElementsSum(matrix) = 9.

Here's the rooms matrix with unsuitable rooms marked with 'x':

[[x, 1, 1, 2],
 [x, 5, x, x],
 [x, x, x, x]]

Thus, the answer is 1 + 5 + 1 + 2 = 9.
```

---

### Shape Area
#### **Task:**
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

![Example Image](https://codefightsuserpics.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1491302317375)

#### Example
```
For n = 2, the output should be

shapeArea(n) = 5;

For n = 3, the output should be

shapeArea(n) = 13.
```
