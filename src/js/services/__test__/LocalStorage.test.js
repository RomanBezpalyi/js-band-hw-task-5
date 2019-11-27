import LocalStorage from '../LocalStorage';

describe('EventEmitter class', () => {
  let inst;

  beforeEach(() => {
    inst = new LocalStorage();
  });

  it('should create an instance of itself', () => {
    expect(inst).toBeInstanceOf(LocalStorage);
  });

  it('should return a singleton', () => {
    const inst2 = new LocalStorage();

    expect(inst).toEqual(inst2);
  });

  it('should set prefix', () => {
    const prefix = 'test';
    inst.setPrefix(prefix);
    expect(inst.prefix).toEqual(`${prefix}-`);
  });

  //   it('should return array list from LS', () => {
  //     const getItemsMock = jest.fn(inst.getItems('test'));
  //     // const response = inst.getItems('test');
  //     expect(getItemsMock.mock.calls.length).toBe(1);
  //   });
});
