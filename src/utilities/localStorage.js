class LocalStorage {
  constructor() {
    this.list = [];
  }
  setDataLocalStorage(item) {
    this.list = item;
  }

  getDataLocalStorage() {
    return this.list;
  }

  clearDataLocalStorage() {
    this.list = [];
  }
}

module.exports = LocalStorage;