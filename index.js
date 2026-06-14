export class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

export class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this._head === null) {
      this._head = newNode;
    } else {
      let current = this._head;
      while (current.nextNode !== null) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this._size++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this._head;
    this._head = newNode;
    this._size++;
  }

  size() {
    return this._size;
  }

  head() {
    if (this._head === null) {
      return undefined;
    }
    return this._head.value;
  }

  tail() {
    if (this._head === null) {
      return undefined;
    }
    let current = this._head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0 || index >= this._size) {
      return undefined;
    }
    let current = this._head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current.value;
  }

  pop() {
    if (this._head === null) {
      return undefined;
    }
    const poppedValue = this._head.value;
    this._head = this._head.nextNode;
    this._size--;
    return poppedValue;
  }

  contains(value) {
    let current = this._head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this._head;
    let index = 0;
    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    if (this._head === null) {
      return "";
    }
    const parts = [];
    let current = this._head;
    while (current !== null) {
      parts.push(`( ${current.value} )`);
      current = current.nextNode;
    }
    parts.push("null");
    return parts.join(" -> ");
  }

  insertAt(index, ...values) {
    if (values.length === 0) {
      return;
    }
    if (index < 0 || index > this._size) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        const newNode = new Node(values[i]);
        newNode.nextNode = this._head;
        this._head = newNode;
        this._size++;
      }
      return;
    }

    let previous = this._head;
    for (let i = 0; i < index - 1; i++) {
      previous = previous.nextNode;
    }

    const newChainHead = new Node(values[0]);
    let currentNewNode = newChainHead;
    for (let i = 1; i < values.length; i++) {
      currentNewNode.nextNode = new Node(values[i]);
      currentNewNode = currentNewNode.nextNode;
    }

    currentNewNode.nextNode = previous.nextNode;
    previous.nextNode = newChainHead;
    this._size += values.length;
  }

  removeAt(index) {
    if (index < 0 || index >= this._size) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      this._head = this._head.nextNode;
      this._size--;
      return;
    }

    let previous = this._head;
    for (let i = 0; i < index - 1; i++) {
      previous = previous.nextNode;
    }
    previous.nextNode = previous.nextNode.nextNode;
    this._size--;
  }
}
