import collectionTypes from '../constants/collectionTypes';
import Vehicle from './Vehicle';
import Truck from './Truck';
import Ship from './Ship';

export default class VehicleFactory {
  static create(type, object) {
    switch (type) {
      case collectionTypes.TRUCKS:
        return new Truck(object);
      case collectionTypes.SHIPS:
        return new Ship(object);
      default: {
        const { model, producedYear, capacity, averageSpeed } = object;
        return new Vehicle(model, producedYear, capacity, averageSpeed);
      }
    }
  }
}
