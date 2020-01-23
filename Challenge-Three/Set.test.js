const Class = require('./Set.js');

describe('Set tests', () => {
  let set1;
  let set2;
  beforeAll(() => {
    set1 = new Set(1, 2, 3, 4, 5);
    set2 = new Set(4, 5, 6, 7);
  });

  it('can intantiate a new object of class Set', () => {
    const set = new Set();
    expect(set).toBeDefined();
  });

  it('can add an item to the set', () => {
    set1.add(6);
    expect(set1).toContainEqual([1, 2, 3, 4, 5, 6]);
    expect(set1.add(2)).toThrowError('Item already in set');
  });

  it('can remove an item from the set', () => {
    set1.remove(5);
    expect(set1).toContainEqual([1, 2, 3, 4, 4]);
    expect(set1.remove(9)).toThrowError('Item not in set');
  });

  it('can check if an item is in the set', () => {
    expect(set1.isIn(2)).toBeTruthy;
    expect(set1.isIn(9)).toBeFalsy;
  });

  it('can use instance method .intersection(otherSet) to return a new set with the intersection', () => {
    const result = set1.intersection(set2);
    expect(result).toContainEqual([4, 5]);
  });

  it('can use instance method .union(otherSet) to return a new set with the union of the two', () => {
    const result = set1.union(set2);
    expect(result).toContainEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('can use instance method .difference(otherSet) to return a set with difference between the two', () => {
    const result = set1.difference(set2);
    expect(result).toContainEqual([1, 2, 3, 6, 7]);
  });

  it('has a static method .intersection(S1, S2) that takes two sets and returns the intersection of the two', () => {
    const result = Set.intersection(set1, set2);
    expect(result).toEqual([3, 4]);
  });

  it('has a static method .union(S1, S2) that returns the union of the two sets', () => {
    const result = Set.union(set1, set2);
    expect(result).toContainEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('has a static method .difference(S1, S2) that returns the difference of the two sets', () => {
    const result = Set.difference(set1, set2);
    expect(result).toContainEqual([1, 2, 3, 6, 7]);
  });
});
