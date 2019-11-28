import Vehicle from '../Vehicle';

describe('Vehicle class', () => {
  const basicModel = 'Jeep';
  const basicProducedYear = 1987;
  const basicCapacity = 2300;
  const basicAverageSpeed = 420;
  const inst = new Vehicle(
    basicModel,
    basicProducedYear,
    basicCapacity,
    basicAverageSpeed,
  );

  it('should create an instance of Vehicle', () => {
    const { model, producedYear, capacity, averageSpeed } = inst;

    expect(model).toEqual(basicModel);
    expect(producedYear).toEqual(basicProducedYear);
    expect(capacity).toEqual(basicCapacity);
    expect(averageSpeed).toEqual(basicAverageSpeed);
  });

  it('should return average speed', () => {
    const phrase = `Average speed is ${inst.averageSpeed}.`;
    const result = inst.showAverageSpeed();
    expect(result).toEqual(phrase);
  });

  it('should return capacity in punds', () => {
    const phrase = `Capacity in pounds is ${inst.capacity * 2.2046}.`;
    const result = inst.showCapacityInPounds();
    expect(result).toEqual(phrase);
  });
});
