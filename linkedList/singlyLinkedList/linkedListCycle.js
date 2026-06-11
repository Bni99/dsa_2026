//TC O(N)
//SC O(N)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addAtHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  addACycle() {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = this.head;
  }

  detectACycle() {
    let set = new Set();
    let curr = this.head;
    while (curr) {
      if (set.has(curr)) {
        return true;
      } else set.add(curr);
      curr = curr.next;
    }
    console.log(set);
    return false;
  }

  detectAcycleUsingFloydAlgo() {
    let slow = this.head;
    let fast = this.head.next;

    while (fast !== null) {
      if (slow === fast) return true;
      if (fast.next === null) return false;
      slow = slow.next;
      fast = fast.next.next;
    }
    return false;
  }

  print() {
    let curr = this.head;
    let str = "";
    while (curr) {
      if (curr.next !== null) str = str + `${curr.value} ->`;
      else str = str + `${curr.value}`;
      curr = curr.next;
    }
    console.log(str);
  }
}

const list = new LinkedList();
list.addAtHead(5);
list.addAtHead(4);
list.addAtHead(3);
list.addAtHead(2);
list.addAtHead(1);
list.print();
list.addACycle();
// list.print();
console.log(list.detectACycle());
