import Controller from '../Controller';
import Model from '../Model';
import View from '../View';
import Ship from '../classes/Ship';
import Cost from '../classes/Cost';

describe('Controller class', () => {
  let controller;
  let view;
  let model;

  beforeEach(() => {
    document.body.innerHTML =
      `<header class='container'>` +
      `<ul class='form-list'></ul></header>` +
      `<main><ul class='vehicle-list'>` +
      `</ul><ul class='cost-list'></ul></main>`;
    view = new View();
    model = new Model();
    controller = new Controller(model, view);
  });

  it('should create an instance of itself', () => {
    expect(controller).toBeInstanceOf(Controller);
  });

  it('should add item', () => {
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

    const cost = {
      model: 'Pickup',
      costByCargo: 20,
      costByDistance: 35,
    };
    const inst2 = new Cost(cost);
    const costLength = controller.model.costs.length;
    controller.addItem(inst2);
    expect(controller.model.costs.length).toBe(costLength + 1);
  });
});
