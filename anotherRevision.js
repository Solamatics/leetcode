// twoSum
const twoSum = (nums, target) => {
  let storage = {};

  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

console.log(twoSum([1, 2, 5, 7], 9));

//valid parentheses

const isValid = (s) => {
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  let heap = [];

  for (let char of s) {
    if (brackets[char]) {
      heap.push(brackets[char]);
    } else {
      if (heap.pop() !== char) return false;
    }
  }
  return !heap.length;
};

console.log(isValid("()"));

//maxProfit
const maxProfit = (prices) => {
  let buy = prices[0];

  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (buy > prices[i]) {
      buy = prices[i];
    } else {
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
};
console.log(maxProfit([1, 4, 5, 7]));

//addTwoNumberss
// const addTwoNumbers = (l1, l2) => {
//   let p1 = l1,
//     p2 = l2,
//     num1 = 0,
//     num2 = 0,
//     carry = 0,
//     solution = new ListNode(0),
//     current = solution;

//   while (p1 || p2) {
//     num1 = p1 ? p1.val : 0;
//     num2 = p2 ? p2.val : 0;

//     if (num1 + num2 + carry > 9) {
//       current.next = new ListNode(num1 + num2 + carry - 10);
//       current = current.next;
//       carry = 1;
//     } else {
//       current.next = new ListNode(num1 + num2 + carry);
//       carry = 0;
//     }

//     if (p1) p1 = p1.next;
//     if (p2) p2 = p2.next;
//   }

//   if (carry) current.next = new ListNode(carry);
//   return solution.next;
// };

const integerPalindrome = (s) => {
  if (s < 0) return false;
  let reverse = 0;

  for (let i = s; i >= 1; i = Math.floor(i / 10))
    reverse = reverse * 10 + (i % 10);
  return reverse === s;
};

console.log(integerPalindrome(1111));
