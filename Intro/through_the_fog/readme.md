### Circle of Numbers
#### Task:
Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).

Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.

####Example

```
For n = 10 and firstNumber = 2, the output should be

circleOfNumbers(n, firstNumber) = 7.
```

![Circle of Numbers Example Image](https://codefightsuserpics.s3.amazonaws.com/tasks/circleOfNumbers/img/example.png?_tm=1490625697098)

---

### Deposit Profit
#### Task
You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take for your balance to pass a specific threshold with the assumption that you don't make any additional deposits.

#### Example

```
For deposit = 100, rate = 20 and threshold = 170, the output should be

depositProfit(deposit, rate, threshold) = 3.

Each year the amount of money on your account increases by 20%. It means that throughout the years your balance would be:

year 0: 100;
year 1: 120;
year 2: 144;
year 3: 172,8.

Thus, it will take 3 years for your balance to pass the threshold, which is the answer.

```

---

### Absolute Values Sum Minimization
#### Task
Given a sorted array of integers a, find an integer x from a such that the value of

abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
is the smallest possible (here abs denotes the absolute value).
If there are several possible answers, output the smallest one.

#### Example
```
For a = [2, 4, 7], the output should be

absoluteValuesSumMinimization(a) = 4.
```

---

### Strings Rearrangement
#### Task:
Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.

#### Example

```
For inputArray = ["aba", "bbb", "bab"], the output should be

stringsRearrangement(inputArray) = false;

All rearrangements don't satisfy the description condition.

For inputArray = ["ab", "bb", "aa"], the output should be

stringsRearrangement(inputArray) = true.

Strings can be rearranged in the following way: "aa", "ab", "bb".
```
