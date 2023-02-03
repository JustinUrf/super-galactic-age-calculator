import GalacticAge from './../src/calculator.js'

describe('GalacticAge', () => {

  test("Should return user age which will then be used to calculate everything else.", () => {
    const userAge = new GalacticAge(7);
    expect(userAge.userAge).toEqual(7);
  })

  test("Should test class function mercuryAge() to return user's mercury age ",() => {
    const userAge = new GalacticAge(7)
    userAge.mercuryAge();
    expect(userAge.mercuryAge).toEqual(29.17)

  })
})