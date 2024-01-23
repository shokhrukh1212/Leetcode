/**
 * https://leetcode.com/problems/implement-queue-using-stacks/
 */

class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  // 1. We will move stack 2 items to stack 1
  // 2. Then push item to stack 1
  // 3. At the end, we will take back items from stack 2 to stack 1
  push(item) {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(item);

    while (this.stack2.length > 0) {
      this.stack1.push(this.stack2.pop());
    }
  }

  // 1. Just we can return the last element from stack1 and pop at the end
  pop() {
    if (this.empty()) return -1;

    const top = this.stack1[this.stack1.length - 1];
    this.stack1.pop();
    return top;
  }

  // 1. Just return stack1 last element
  peek() {
    if (this.empty()) return -1;

    return this.stack1[this.stack1.length - 1];
  }

  // check whether a stack1 is empty or not
  empty() {
    return this.stack1.length === 0;
  }
}
