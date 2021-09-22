"use strict";

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

console.log(barChart({Q4: 250, Q1: 300, Q2: 150, Q3: 0}))// "Q1|###### 300\nQ4|##### 250\nQ2|### 150\nQ3|0"
console.log(barChart({Q4: 500, Q3: 100, Q2: 100, Q1: 150}))// "Q4|########## 500\nQ1|### 150\nQ2|## 100\nQ3|## 100"
console.log(barChart({Q4: 0, Q3: 100, Q2: 0, Q1: 600}))// "Q1|############ 600\nQ3|## 100\nQ2|0\nQ4|0")
console.log(barChart({Q4: 300, Q3: 150, Q2: 350, Q1: 250}))//, "Q2|####### 350\nQ4|###### 300\nQ1|##### 250\nQ3|### 150")
console.log(barChart({Q4: 350, Q3: 400, Q2: 400, Q1: 50}))// "Q2|######## 400\nQ3|######## 400\nQ4|####### 350\nQ1|# 50")
console.log(barChart({Q4: 200, Q1: 500, Q2: 300, Q3: 300}))// "Q1|########## 500\nQ2|###### 300\nQ3|###### 300\nQ4|#### 200")
console.log(barChart({Q4: 300, Q3: 250, Q2: 600, Q1: 350}))// "Q2|############ 600\nQ1|####### 350\nQ4|###### 300\nQ3|##### 250")
console.log(barChart({Q4: 150, Q1: 550, Q2: 50, Q3: 600}))// "Q3|############ 600\nQ1|########### 550\nQ4|### 150\nQ2|# 50")
console.log(barChart({Q4: 450, Q3: 0, Q2: 50, Q1: 200}))// "Q4|######### 450\nQ1|#### 200\nQ2|# 50\nQ3|0")
console.log(barChart({Q4: 150, Q3: 0, Q2: 0, Q1: 450}))// "Q1|######### 450\nQ4|### 150\nQ2|0\nQ3|0")
console.log(barChart({Q4: 0, Q1: 600, Q2: 250, Q3: 400}))// "Q1|############ 600\nQ3|######## 400\nQ2|##### 250\nQ4|0")