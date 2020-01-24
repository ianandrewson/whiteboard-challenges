
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

  intersection(set) {
    const result = new Set();
    [...set].forEach(item => {
      if(this.array.includes(item)) {
        result.add(item);
      }
    });
    return result;
  }

  union(set) {
    const result = new Set();
    this.array.forEach(item => result.add(item));
    [...set].forEach(item => {
      if(!result.array.includes(item)) {
        result.add(item);
      }
    }); 
    return result;
  }

  difference(set) {
    const result = new Set();
    this.array.forEach(item => {
      if(!set.array.includes(item)) {
        result.add(item);
      }
    });
    [...set].forEach(item => {
      if(!this.array.includes(item)) {
        result.add(item);
      }
    });
    return result;
  }

  [Symbol.iterator]() {
    return this.array[Symbol.iterator]();
  }

  static intersection(set1, set2) {
    const result = new Set();
    set1.array.forEach(item => {
      if(set2.array.includes(item)) {
        result.add(item);
      }
    });
    return result;
  }

  static union(set1, set2) {
    const result = new Set();
    set1.array.forEach(item => {
      result.add(item);
    });
    set2.array.forEach(item => {
      if(!result.array.includes(item)){
        result.add(item);
      }
    });
    return result;
  }



  //toString() {
  //   return this.array.toString();
  // }
}

module.exports = Set;
