export default class GalacticAge {
  constructor(userAge) {
    this.userAge = userAge
  }
  mercuryAge() {
    let mercuryAge = this.userAge / .24;
    this.mercuryAge = parse.Float(mercuryAge).toFixed(2);
  }


}