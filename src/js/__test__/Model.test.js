import Model from '../Model';
import collectionTypes from '../constants/collectionTypes';

describe('Model class', () => {
  const vehicles = ['vehcile1'];
  const costs = ['cost1'];
  let inst;

  beforeEach(() => {
    inst = new Model(vehicles, costs);
  });

  it('should create an instance of itself', () => {
    expect(inst).toBeInstanceOf(Model);
  });

  it('should construct an instance with default properties', () => {
    const inst = new Model();
    expect(inst.vehicles.length).toBe(0);
    expect(inst.costs.length).toBe(0);
  });

  it('should get items from LS', () => {
    inst.getItemsFromLS();

    expect(inst.vehicles).toBeInstanceOf(Array);
    expect(inst.costs).toBeInstanceOf(Array);
  });

  it('should push item to array', () => {
    const item = inst.addItem('truck1', collectionTypes.VEHICLES);

    expect(inst.vehicles.length).toBe(2);
    expect(item).toMatch('truck1');
  });
});
