import GalacticAge from './../src/calculator.js'

describe('GalacticAge', () => {

  test("Should return user age which will then be used to calculate everything else.", () => {
    const userAge = new GalacticAge(7);
    expect(userAge.userAge).toEqual(7);
  })

  test("Should test class function mercuryAge() to return user's mercury age to the nearest rounded tenth ",() => {
    const userAge = new GalacticAge(7)
    userAge.mercuryAge();
    expect(userAge.mercuryAge).toEqual("29.17")
  })

  test ("Should test class function venusAge() to return user's venus age to the nearest rounded tenth ",() => {
    const userAge = new GalacticAge(7);
    userAge.venusAge();
    expect(userAge.venusAge).toEqual("11.29");
  })
  
  test("Should test class function marsAge() to return user's mars age to the nearest rounded tenth", () => {
    const userAge = new GalacticAge(7);
    userAge.marsAge();
    expect(userAge.marsAge).toEqual("3.72")
  })

    test("Should test class function jupiterAge() to return user's mars age to the nearest rounded tenth", () => {
    const userAge = new GalacticAge(7);
    userAge.jupiterAge();
    expect(userAge.jupiterAge).toEqual("0.59");
  })
})