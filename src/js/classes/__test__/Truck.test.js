import Truck from '../Truck';

describe('Truck class', () => {
  const truck = {
    model: 'Jeep',
    typeOfGas: 'Diesel',
    licensePlate: 'GRA-44-MI',
    producedYear: 1987,
    capacity: 2300,
    averageSpeed: 420,
  };
  const inst = new Truck(truck);

  it('should create an instance of Truck', () => {
    const {
      licensePlate,
      typeOfGas,
      model,
      producedYear,
      capacity,
      averageSpeed,
    } = inst;

    expect(licensePlate).toEqual(truck.licensePlate);
    expect(typeOfGas).toEqual(truck.typeOfGas);
    expect(model).toEqual(truck.model);
    expect(producedYear).toEqual(truck.producedYear);
    expect(capacity).toEqual(truck.capacity);
    expect(averageSpeed).toEqual(truck.averageSpeed);
  });

  it('should return average speed', () => {
    const phrase = `Average speed is ${inst.averageSpeed}km.`;
    const result = inst.showAverageSpeed();
    expect(result).toEqual(phrase);
  });
});
