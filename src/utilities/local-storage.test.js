const { expect, test } = require("@jest/globals");

class LocalStorage {
  static list = []

  static set(item) {
    this.list.push(item);
  }

  static get() {
    return this.list;
  }
}

class Task {
  constructor(description, status, index) {
    this.description = description;
    this.status = status;
    this.index = index;
  }
}

describe("Test LocalStorage mocking", () => {
  
  let task = new Task("Play the guitar", false, 0)
  test('test add task to localStorage', () => {
    LocalStorage.set(task);
    expect(LocalStorage.get()).toEqual([{
      description: "Play the guitar",
      status: false,
      index: 0
    }]);
  });

  test('test get task from localStorage', () => {
    expect(LocalStorage.get()).toEqual([{
      description: "Play the guitar",
      status: false,
      index: 0
    }]);
  });

})