import View from '../View';
import collectionTypes from '../constants/collectionTypes';

describe('View class', () => {
  let inst;

  beforeEach(() => {
    document.body.innerHTML =
      `<header class='container'>` +
      `<ul class='form-list'></ul></header>` +
      `<main><ul class='vehicle-list'>` +
      `</ul><ul class='cost-list'></ul></main>`;
    inst = new View();
  });

  it('should create an instance of itself', () => {
    expect(inst).toBeInstanceOf(View);
  });

  it('should handle add of a truck', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'trucks',
        querySelector: jest.fn(() => {
          return { value: 'value' };
        }),
        reset: jest.fn(),
      },
    };

    inst.handleAdd(event);
    expect(event.preventDefault.mock.calls.length).toBe(1);
    expect(event.target.reset.mock.calls.length).toBe(1);
  });

  it('should handle add of a ship', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'ships',
        querySelector: jest.fn(() => {
          return { value: 'value' };
        }),
        reset: jest.fn(),
      },
    };

    inst.handleAdd(event);
    expect(event.preventDefault.mock.calls.length).toBe(1);
    expect(event.target.reset.mock.calls.length).toBe(1);
  });

  it('should handle add of a cost', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'costs',
        querySelector: jest.fn(() => {
          return { value: 'value' };
        }),
        querySelectorAll: jest.fn(() => {
          return [
            { checked: true, value: 'truck' },
            { checked: false, value: 'ship' },
          ];
        }),
        reset: jest.fn(),
      },
    };

    inst.handleAdd(event);
    expect(event.preventDefault.mock.calls.length).toBe(1);
    expect(event.target.reset.mock.calls.length).toBe(1);
  });

  it('should return from adding undefined item', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: undefined,
        querySelector: jest.fn(() => {
          return { value: 'value' };
        }),
        reset: jest.fn(),
      },
    };

    expect(inst.handleAdd(event)).toBeUndefined;
  });

  it('should create a DOM element', () => {
    const p = document.createElement('p');
    p.classList.add('text');
    p.textContent = 'Hello World!';

    const element = inst.createDOMElement('p', 'Hello World!', 'text');
    expect(element).toEqual(p);
  });

  it('should create a wrapper with child elements', () => {
    const title = inst.createDOMElement('h3', 'Hello', 'item__title');
    const text = inst.createDOMElement('p', 'World', 'item__text');
    const wrapper = inst.createDOMElement('div', null, 'item__wrapper');

    wrapper.append(title, text);

    const element = inst.createWrapperWithChildren('Hello', 'World');
    expect(element).toEqual(wrapper);
  });

  it('should create a cost', () => {
    const result = inst.createCost({ costByCargo: 4, costByDistance: 10 });
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(2);
  });

  it('should create a ship', () => {
    const ship = {
      name: 'Captain Nemo',
      countOfTeam: 4,
      model: 'GRA-44-MI',
      producedYear: 1987,
      capacity: 2300,
      averageSpeed: 420,
    };
    const result = inst.createVehicle(collectionTypes.SHIPS, ship);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(5);
  });

  it('should create a truck', () => {
    const truck = {
      licensePlate: 'GRA-44-MI',
      typeOfGas: 'Diesel',
      model: 'Jeep',
      producedYear: 1987,
      capacity: 2300,
      averageSpeed: 420,
    };
    const result = inst.createVehicle(collectionTypes.TRUCKS, truck);
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBe(5);
  });

  it('should reset an event target', () => {
    const event = {
      target: {
        reset: jest.fn(),
      },
    };
    inst.handleCancel(event);
    expect(event.target.reset.mock.calls.length).toBe(1);
  });

  it('should create a list item for vehicle and cost lists', () => {
    const vehicles = [{ licensePlate: 'test' }, { name: 'Titanic' }];
    const costs = ['cost1', 'cost2', 'cost3'];

    inst.init(vehicles, costs);
    const { vehicleList, costList } = inst;
    expect(vehicleList.childNodes.length).toBe(2);
    expect(costList.childNodes.length).toBe(3);
  });
});
