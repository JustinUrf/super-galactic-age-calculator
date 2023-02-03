import GalacticAge from './../src/calculator.js'

describe('GalacticAge', () => {

  Test("Should return user age which will then be used to calculate everything else.", () => {
    const userAge = GalacticAge(7);
    expect(userAge).toEqual(7);

  })
})