const Memory = require('./memory');

let mem = new Memory;

class Array {

  constructor() {
    this.length = 0;
    this._capacity = 0;
    this.ptr = mem.allocate(this.length);
  }

  push(value) {
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    mem.set(this.ptr + this.length, value);
    this.length++;
  }

  _resize(size) {
    const oldPtr = this.ptr;
    this.ptr = mem.allocate(size);
    if (this.ptr === null) {
      throw new Error('Out of memory');
    }
    mem.copy(this.ptr, oldPtr, this.length);
    mem.free(oldPtr);
    this._capacity = size;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    return mem.get(this.ptr + index);
  }

  pop() {
    // eslint-disable-next-line eqeqeq 
    if (this.length == 0) {
      throw new Error('Index error');
    }
    const value = mem.get(this.ptr + this.length - 1);
    this.length--;
    return value;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    if (this.length >= this._capacity) {
      this._resize((this.length + 1) * Array.SIZE_RATIO);
    }
    mem.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
    mem.set(this.ptr + index, value); this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index error');
    }
    mem.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
    this.length--;
  }

}

Array.SIZE_RATIO = 3;

module.exports = Array;
