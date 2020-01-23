
class Set {
  constructor() {
    this.array = [];
  }
  add(arg) {
    if(this.array.includes(arg)) {
      throw new Error('Item already in set');
    } else {
      this.array.push(arg);
    }
  }


  [Symbol.iterator]() {
    return this.array[Symbol.iterator]();
  }

  toString() {
    return this.array.toString();
  }
}

module.exports = Set;
