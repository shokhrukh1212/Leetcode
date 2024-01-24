/**
 * https://leetcode.com/problems/implement-stack-using-queues/
 */

class MyStack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  //  Pushes element x to the top of the stack.
  push(item) {
    this.q2.push(item);

    while (this.q1.length > 0) {
      this.q2.push(this.q1[0]);
      this.q1.shift();
    }

    this.q = this.q1;
    this.q1 = this.q2;
    this.q2 = this.q;
  }

  // Removes the element on the top of the stack and returns it.
  pop() {
    if (this.q1.length === 0) return -1;

    return this.q1.shift();
  }

  // Returns the element on the top of the stack.
  top() {
    if (this.q1.length === 0) return -1;

    return this.q1[0];
  }

  // Returns true if the stack is empty, false otherwise.
  empty() {
    return this.q1.length === 0;
  }
}
