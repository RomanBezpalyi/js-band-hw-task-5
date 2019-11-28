import Controller from '../Controller';
import Model from '../Model';
import View from '../View';
import Ship from '../classes/Ship';
import Cost from '../classes/Cost';

describe('Controller class', () => {
  document.body.innerHTML =
    `<header class='container'>` +
    `<ul class='form-list'></ul></header>` +
    `<main><ul class='vehicle-list'></ul>` +
    `<ul class='cost-list'></ul></main>`;
  const view = new View();
  const model = new Model();
  const controller = new Controller(model, view);

  it('should create an instance of itself', () => {
    expect(controller).toBeInstanceOf(Controller);
  });

  it('should add a vehicle item', () => {
    const ship = {
      name: 'Captain Nemo',
      countOfTeam: 4,
      model: 'GRA-44-MI',
      producedYear: 1987,
      capacity: 2300,
      averageSpeed: 420,
    };
    const inst = new Ship(ship);
    const vehicleLength = controller.model.vehicles.length;
    controller.addItem(inst);
    expect(controller.model.vehicles.length).toBe(vehicleLength + 1);
  });

  it('should add a cost item', () => {
    const cost = {
      model: 'Pickup',
      costByCargo: 20,
      costByDistance: 35,
    };
    const inst = new Cost(cost);
    const costLength = controller.model.costs.length;
    controller.addItem(inst);
    expect(controller.model.costs.length).toBe(costLength + 1);
  });
});
