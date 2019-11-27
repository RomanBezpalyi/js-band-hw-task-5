import Vehicle from './Vehicle';

export default class Ship extends Vehicle {
  constructor({
    name,
    countOfTeam,
    model,
    producedYear,
    capacity,
    averageSpeed,
  }) {
    super(model, producedYear, capacity, averageSpeed);
    this.name = name;
    this.countOfTeam = countOfTeam;
  }

  showAverageSpeed() {
    return `Average speed is ${this.averageSpeed}nm.`;
  }
}
