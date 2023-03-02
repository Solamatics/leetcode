// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

const addTwoNumbers = (l1, l2) => {
  let p1 = l1,
    p2 = l2,
    num1 = 0,
    num2 = 0,
    carry = 0,
    solution = new ListNode(0),
    current = solution;

  while (p1 || p2) {
    num1 = p1 ? p1.val : 0;
    num2 = p2 ? p2.val : 0;

    if (num1 + num2 + carry > 9) {
      current.next = new ListNode(num1 + num2 + carry - 10);
      current = current.next;
      carry = 1;
    } else {
      current.next = new ListNode(num1 + num2 + carry);
      current = current.next;
      carry = 0;
    }
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  if (carry) current.next = new ListNode(carry);
  return solution.next;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
