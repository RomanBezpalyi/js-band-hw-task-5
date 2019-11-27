class LocalStorage {
  constructor() {
    if (typeof LocalStorage.instance === 'object') {
      return LocalStorage.instance;
    }

    this.prefix = '';
    LocalStorage.instance = this;
    return this;
  }

  setPrefix(prefix = 'JS-Band') {
    this.prefix = `${prefix}-`;
  }

  getItems(list) {
    let response;
    if (localStorage[`${this.prefix}${list}`]) {
      try {
        response = JSON.parse(localStorage.getItem(`${this.prefix}${list}`));
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error while parsing.');
      }
    }
    return response;
  }

  setItems(listType, list) {
    try {
      localStorage.setItem(`${this.prefix}${listType}`, JSON.stringify(list));
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error while parsing.');
    }
  }
}

export default LocalStorage;
