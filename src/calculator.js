export default class GalacticAge {
  constructor(userAge) {
    this.userAge = userAge;
  }
  milkywayAge() {
    let mercuryAge = this.userAge / .24;
    this.mercuryAge = parseFloat(mercuryAge).toFixed(2);
    let venusAge = this.userAge / .62;
    this.venusAge = parseFloat(venusAge).toFixed(2);
    let marsAge = this.userAge / 1.88;
    this.marsAge = parseFloat(marsAge).toFixed(2);
    let jupiterAge = this.userAge / 11.86;
    this.jupiterAge = parseFloat(jupiterAge).toFixed(2);
  }

  yearsPassed(amountOfYearsPassed) {
  
  }


}