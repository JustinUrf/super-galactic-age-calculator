export default class GalacticAge {
  constructor(userAge) {
    this.userAge = userAge;
  }
  mercuryAge() {
    let mercuryAge = this.userAge / .24;
    this.mercuryAge = parseFloat(mercuryAge).toFixed(2);
  }
  venusAge() {
    let venusAge = this.userAge / .62;
    this.venusAge = parseFloat(venusAge).toFixed(2);
  }


}