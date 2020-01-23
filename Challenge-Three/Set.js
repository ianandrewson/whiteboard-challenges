
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

  remove(arg) {
    if(!this.array.includes(arg)) {
      throw new Error('Item not in set');
    } else {
      const itemIndex = this.array.indexOf(arg);
      this.array.splice(itemIndex);
    }
  }

  isIn(arg) {
    this.array.includes(arg) ? true : false;
  }

  [Symbol.iterator]() {
    return this.array[Symbol.iterator]();
  }

  //toString() {
  //   return this.array.toString();
  // }
}

module.exports = Set;
