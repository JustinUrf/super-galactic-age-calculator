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

  yearsPassed(yearsPassed) {
    let yearsPassedArray = []
    if (this.userAge > yearsPassed) {
      let difference = this.userAge - yearsPassed
      yearsPassedArray.push(difference + " Earth years have passed.")
      yearsPassedArray.push(parseFloat(difference / .24).toFixed(2) + " Mercury years have passed.")
      yearsPassedArray.push(parseFloat(difference / .62).toFixed(2) + " Venus years have passed.")
      yearsPassedArray.push(parseFloat(difference / 1.88).toFixed(2) + " Mars years have passed.")
      yearsPassedArray.push(parseFloat(difference / 11.86).toFixed(2) + " Jupiter years have passed.")
      return yearsPassedArray
      
    }
    else {
      return "Please input a number less than your current age!"
    }
  }

  yearsTillNextBirthday(yearsTill) {
    let yearsTillArray = []
    if(this.userAge < yearsTill) {
      let difference = yearsTill - this.userAge
      yearsTillArray.push(difference + " Earth years have yet to pass");
      yearsTillArray.push(parseFloat(difference / .24).toFixed(2) + " Mercury years have yet to pass.");
      yearsTillArray.push(parseFloat(difference / .62).toFixed(2) + " Venus years have yet to pass.");
      yearsTillArray.push(parseFloat(difference / 1.88).toFixed(2) + " Mars years have yet to pass.");
      yearsTillArray.push(parseFloat(difference / 11.86).toFixed(2) + " Jupiter years have yet to pass.");
      return yearsTillArray
    }
    else {
      return "Please input a number larger than your current age!"
    }
  }
}