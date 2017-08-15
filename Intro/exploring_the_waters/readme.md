### Alternating Sums
#### Task:
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

#### Example

```
For a = [50, 60, 60, 45, 70], the output should be

alternatingSums(a) = [180, 105].
```

---

### Add Border
#### Task:

Given a rectangular matrix of characters, add a border of asterisks to it.

#### Example

```
For

picture = ["abc",
           "ded"]

the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
```

---

### Are Similar
#### Task:
Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

####Example

```
For a = [1, 2, 3] and b = [1, 2, 3], the output should be

areSimilar(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be

areSimilar(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be

areSimilar(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.
```

---

### Array Change
#### Task:
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

#### Example

```
For inputArray = [1, 1, 1], the output should be

arrayChange(inputArray) = 3.
```

___

### Palindrome Rearranging
#### Task:
Given a string, find out if its characters can be rearranged to form a palindrome.

#### Example

```
For inputString = "aabb", the output should be

palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.
```
