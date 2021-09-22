##### Edabit > Very Hard

---

# ASCII Charts (Part 2: Bar Chart)

Given an object containing quarterly sales values for a year, return a string representing a *bar chart* of the sales by quarter.

- Quarter names (Q1, Q2, Q3, Q4) should appear on the left.
- Quarters should be sorted in descending order by value.
- Quarters with the same value should be shown in their yearly order (Q1 -> Q4).
- Bars should begin with a "|".
- Repeat the character "#" to fill the bar, with each character having a value of 50.
- A single space comes after the bar, then the sales for that quarter.
- If the value is 0, there should be no space after "|".
- Use the newline character ("\n") to separate each bar in the chart.

### Example #1

```
barChart({Q4: 250, Q1: 300, Q2: 150, Q3: 0})
➞ "Q1|###### 300\nQ4|##### 250\nQ2|### 150\nQ3|0"
```

When printed:

```
Q1|###### 300
Q4|##### 250
Q2|### 150
Q3|0
```

### Example #2

```
barChart({Q4: 500, Q3: 100, Q2: 100, Q1: 150})
➞ "Q4|########## 500\nQ1|### 150\nQ2|## 100\nQ3|## 100"
```

When printed:

```
Q4|########## 500
Q1|### 150
Q2|## 100
Q3|## 100
```

### Notes

There should be no additional whitespace after each value.

---

## Breakdown

### Rules / Definitions

- Quarter names (Q1, Q2, Q3, Q4) should appear on the left.
- Quarters should be sorted in descending order by value.
- Quarters with the same value should be shown in their yearly order (Q1 -> Q4).
- Bars should begin with a "|".
- Repeat the character "#" to fill the bar, with each character having a value of 50.
- A single space comes after the bar, then the sales for that quarter.
- If the value is 0, there should be no space after "|".
- Use the newline character ("\n") to separate each bar in the chart.

### Input / Output

**Input:**

- Object
  - Contains 4 properties: Q1 - Q4
  - Each property has a number >= 0 as a value

**Output**

- String
  - Consists of the property names (Q1- Q4), '|' char, 0 or more '#' chars, and the number value of each property
  - If a property has 0 for a value, then it will not contain any '#'s

### Examples / Test Cases

```javascript
barChart({Q4: 250, Q1: 300, Q2: 150, Q3: 0})
➞ "Q1|###### 300\nQ4|##### 250\nQ2|### 150\nQ3|0"

barChart({Q4: 500, Q3: 100, Q2: 100, Q1: 150})
➞ "Q4|########## 500\nQ1|### 150\nQ2|## 100\nQ3|## 100"

barChart({})
-> ""
```

### Data Structures

**Input**

- Object consisting of 4 properties

**Output** 

- String

#### Intermediary Data Structures

**Array**

- An array where each element is a string representing each Quarter
- Join the array using "\n"

### Mental Model

Get the keys of the object and map over them. On each iteration, return an array containing the key, a '|' char, '#' chars, and the value of each property. Sort this array based on the property value, if 2 values are equal, sort them based on the Quarter Values. Eg. Q1 precedes Q2 and so on. Once the array is sorted, join each nested array using '', then join the main outer array using '\n'.

### Algorithm

- Get the keys of the object
- map over the keys
  - return [key, '|', '#'.repeat(object[key] / 50), object[key]]
- Sort the array of arrays based on the object[key] of each nested array
  - If there are two values that are equal, sort them based on the key[1] value (the number value of Q1 etc)
- map over the sorted array and join each nested array
- join the outer array with '\n'

### Code

```javascript
function barChart(results) {
  return Object.keys(results)
               .map(quarter => buildQuartersArray(quarter, results))
               .sort(quarterOrderHighToLow)
               .map(quarter => quarter.join(''))
               .join('\n');
}

function buildQuartersArray(quarter, results) {
  let sales = results[quarter];
  let bars = sales === 0 ? '' : '#'.repeat(sales / 50) + ' ';
  return [quarter, '|', bars, results[quarter]]; 
}

function quarterOrderHighToLow(q1, q2) {
  let q1Sales = q1[3];
  let q2Sales = q2[3];

  if (q1Sales === q2Sales) {
    return Number(q1[0][1]) - Number(q2[0][1]);
  }

  return q2Sales - q1Sales;
}
```

#### Code Notes

**buildQuartersArray function**

- builds array of arrays

- Example:

  [
    [ 'Q2', '|', '####### ', 350 ],
    [ 'Q4', '|', '###### ', 300 ],
    [ 'Q1', '|', '##### ', 250 ],
    [ 'Q3', '|', '### ', 150 ]
  ]

**quarterOrderHighToLow function**

- Sorts the array of arrays based on each subarrays sales value
-  if the sales values are equal, sorts based on quarter eg Q1, Q2, Q3, Q4