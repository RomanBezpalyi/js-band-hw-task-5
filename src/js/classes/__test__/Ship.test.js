import Ship from '../Ship';

describe('Ship class', () => {
  const ship = {
    name: 'Captain Nemo',
    countOfTeam: 4,
    model: 'GRA-44-MI',
    producedYear: 1987,
    capacity: 2300,
    averageSpeed: 420,
  };
  const inst = new Ship(ship);

  it('should create an instance of Ship', () => {
    const {
      name,
      countOfTeam,
      model,
      producedYear,
      capacity,
      averageSpeed,
    } = inst;

    expect(name).toEqual(ship.name);
    expect(countOfTeam).toEqual(ship.countOfTeam);
    expect(model).toEqual(ship.model);
    expect(producedYear).toEqual(ship.producedYear);
    expect(capacity).toEqual(ship.capacity);
    expect(averageSpeed).toEqual(ship.averageSpeed);
  });

  it('should return average speed', () => {
    const phrase = `Average speed is ${inst.averageSpeed}nm.`;
    const result = inst.showAverageSpeed();
    expect(result).toEqual(phrase);
  });
});
