import EventEmitter from './services/EventEmitter';
import LocalStorage from './services/LocalStorage';
import Cost from './classes/Cost';
import collectionTypes from './constants/collectionTypes';

const EVENT_EMITTER = new EventEmitter();
const LOCAL_STORAGE = new LocalStorage();

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    LOCAL_STORAGE.setPrefix();
    this.model.getItemsFromLS();
    this.view.init(this.model.vehicles, this.model.costs);

    EVENT_EMITTER.on('add-via-view', this.addItem.bind(this));
  }

  addItem(item) {
    const listType =
      item instanceof Cost ? collectionTypes.COSTS : collectionTypes.VEHICLES;

    this.model.addItem(item, listType);
    LOCAL_STORAGE.setItems(listType, this.model[listType]);
  }
}
