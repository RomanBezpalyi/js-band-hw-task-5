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

  it('should create a specified instance of Vehicle', () => {
    const truckInst = VehicleFactory.create(collectionTypes.TRUCKS, truck);
    const shipInst = VehicleFactory.create(collectionTypes.SHIPS, ship);
    const vehicleInst = VehicleFactory.create(null, truck);

    expect(truckInst).toBeInstanceOf(Truck);
    expect(shipInst).toBeInstanceOf(Ship);
    expect(vehicleInst).toBeInstanceOf(Vehicle);
  });
});
