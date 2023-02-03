import GalacticAge from './../src/calculator.js'

describe('GalacticAge', () => {

  test("Should return user age which will then be used to calculate everything else.", () => {
    const userAge = new GalacticAge(7);
    expect(userAge.userAge).toEqual(7);
  })

  test("Should test class function mercuryAge() to return user's mercury age to the nearest rounded tenth ",() => {
    const userAge = new GalacticAge(7)
    userAge.milkywayAge();
    expect(userAge.mercuryAge).toEqual("29.17")
  })

  test ("Should test class function venusAge() to return user's venus age to the nearest rounded tenth ",() => {
    const userAge = new GalacticAge(7);
    userAge.milkywayAge();
    expect(userAge.venusAge).toEqual("11.29");
  })
  
  test("Should test class function marsAge() to return user's mars age to the nearest rounded tenth", () => {
    const userAge = new GalacticAge(7);
    userAge.milkywayAge();
    expect(userAge.marsAge).toEqual("3.72")
  })

  test("Should test class function jupiterAge() to return user's mars age to the nearest rounded tenth", () => {
    const userAge = new GalacticAge(7);
    userAge.milkywayAge();
    expect(userAge.jupiterAge).toEqual("0.59");
    console.debug(userAge);
  })
  
  test("Should test the class function amountOfYearsPassed to return the amount of time passed", () => {
    const userAge = new GalacticAge(18);
    let results = userAge.yearsPassed(11);
    console.debug(results);
    expect(results.length).toEqual(5 || 1);
  })

  test("Should test the class function yearsTillNextBirthday to return the amount of time that needs to pass till a given birthday e.x > 13 earth years need to pass for your 66th birthday", () => {
    const userAge = new GalacticeAge(18);
    let yearsPassed 
  })
})
