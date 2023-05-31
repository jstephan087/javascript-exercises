class SumApp {
  constructor() {
    this.numbers = [];
  }
  addNumber(n) {
    this.numbers.push(n);
  }

  getSum() {
    return this.numbers.reduce((p, c) => p + c, 0);
  }

  reset() {
    this.numbers = [];
  }
}
