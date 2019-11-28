import VehicleFactory from '../VehicleFactory';
import Truck from '../Truck';
import Ship from '../Ship';
import Vehicle from '../Vehicle';
import collectionTypes from '../../constants/collectionTypes';

describe('VehicleFactory class', () => {
  const truck = {
    model: 'Jeep',
    typeOfGas: 'Diesel',
    licensePlate: 'GRA-44-MI',
    producedYear: 1987,
    capacity: 2300,
    averageSpeed: 420,
  };
  const ship = {
    name: 'Captain Nemo',
    countOfTeam: 4,
    model: 'GRA-44-MI',
    producedYear: 1987,
    capacity: 2300,
    averageSpeed: 420,
  };

  it('should create an instance of Truck', () => {
    const truckInst = VehicleFactory.create(collectionTypes.TRUCKS, truck);

    expect(truckInst).toBeInstanceOf(Truck);
  });

  it('should create an instance of Ship', () => {
    const shipInst = VehicleFactory.create(collectionTypes.SHIPS, ship);

    expect(shipInst).toBeInstanceOf(Ship);
  });

  it('should create a default instance', () => {
    const vehicleInst = VehicleFactory.create(null, truck);

    expect(vehicleInst).not.toBeInstanceOf(Truck);
    expect(vehicleInst).toBeInstanceOf(Vehicle);
  });
});
