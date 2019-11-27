import EventEmitter from './services/EventEmitter';
import LocalStorage from './services/LocalStorage';
import collectionTypes from './constants/collectionTypes';

const EVENT_EMITTER = new EventEmitter();
const LOCAL_STORAGE = new LocalStorage();

export default class Model {
  constructor(vehicles = [], costs = []) {
    this.vehicles = vehicles;
    this.costs = costs;
  }

  getItemsFromLS() {
    this.vehicles = LOCAL_STORAGE.getItems(collectionTypes.VEHICLES) || [];
    this.costs = LOCAL_STORAGE.getItems(collectionTypes.COSTS) || [];
  }

  addItem(item, list) {
    this[list].push(item);
    EVENT_EMITTER.emit('add-to-model', this.vehicles, this.costs);
    return item;
  }
}
