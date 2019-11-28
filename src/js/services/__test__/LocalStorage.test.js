import LocalStorage from '../LocalStorage';

describe('LocalStorage class', () => {
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

  it('should return undefined, if key is empty', () => {
    expect(inst.getItems()).toBeUndefined;
  });

  it('should return undefined, if key is empty', () => {
    expect(inst.setItems(undefined, undefined)).toBeUndefined;
  });
});
