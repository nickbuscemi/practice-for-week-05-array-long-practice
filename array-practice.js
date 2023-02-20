// time complexity - O(n)
// space complexity - O(1)
const findMinimum = arr => {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
};

// time complexity - 0(n)
// space complexity - O(n)
const runningSum = arr => {
  const n = arr.length;
  if (n === 0) return [];
  const result = new Array(n);
  result[0] = arr[0];
  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] + arr[i];
  }
  return result;
};

// time complexity - O(n)
// space complexity - O(n)
const evenNumOfChars = arr => {
  const result = [];
  arr.forEach(element => {
    if (element.length % 2 === 0) {
      result.push(element);
    }
  });
  return result;
};

// time complexity - O(n log n)
// space comelexity - O(n)

const smallerThanCurr = arr => {

  const sorted = arr.slice().sort((a, b) => a - b); // => [1,2,2,3,8]
  const map = new Map(); 
  for (let i = 0; i < sorted.length; i++) {
    if (!map.has(sorted[i])) {
      map.set(sorted[i], i);
      console.log(map)
    }
  }
  return arr.map((num) => map.get(num));

};

// time complexity - O(n)
// space complexity - O(n)
const twoSum = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    
    if (map.has(complement)) return true;
    map.set(arr[i], i); console.log(map)
  }
  return false;
};

// time complexity - O(n)
// space complexity - O(1)
const secondLargest = arr => {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num < max) {
      secondMax = num;
    }
  }
  return secondMax;
};

const shuffle = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
  return arr;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];