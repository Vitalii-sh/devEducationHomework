class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const node = new Node(data);

    if (this.tail) {
      this.tail.next = node;
    }

    if (!this.head) {
      this.head = node;
    }
    node.prev = this.tail;
    this.tail = node;
    this.length++;
    return this;
  }
  
appendArr(data) {
  data.forEach(element => {
    this.append(element)
  });
}
  prepend(data) {
    const node = new Node(data, this.head);

    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }
  find(data) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
  }

  remove(data) {
    if (!this.head) {
      return;
    }
    while (this.head && this.head.data === data) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
    if (this.tail.data === data) {
      // this.removeLastEltment(data);
      this.tail = current;
      this.tail.prev = this.length--;
    }
  }

  removeLastEltment() {
    if (this.length === 0) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }

  toArr() {
    const output = [];
    let current = this.head;

    while (current) {
      output.push(current);
      current = current.next;
    }
    return output;
  }
}
const list = new LinkedList();
list.appendArr([1,2,3])
// list.append(1);
// list.append(2);
// list.append(3);
// list.remove(3);
// list.remove(2);
console.log(list);
