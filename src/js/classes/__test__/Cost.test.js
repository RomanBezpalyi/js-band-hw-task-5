import Cost from '../Cost';

it(`should create an instance of Cost`, () => {
  const cost = {
    model: 'Pickup',
    costByCargo: 20,
    costByDistance: 35,
  };

  const inst = new Cost(cost);
  const { model, costByCargo, costByDistance } = inst;

  expect(model).toEqual(cost.model);
  expect(costByCargo).toEqual(cost.costByCargo);
  expect(costByDistance).toEqual(cost.costByDistance);
});
