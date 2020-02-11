import { Game } from '../src/game.js';

describe("City", () => {
  jest.useFakeTimers();
    let game;
    let seattle;
    let paris;
    let tokyo;

  beforeEach(function() {
    game = new Game;
    seattle = game.cities[2];
    tokyo = game.cities[0];
    paris = game.cities[1];
  })

  afterEach(function() {
    jest.clearAllTimers();
  })

  test("should properly construct city with 0 disease points", () => {
    expect(seattle.diseaseCount).toEqual(0);
  })
  test("should increase Seattle diseaseCount by 1 when Seattle is infected", () => {
    game.infect(2);
    expect(seattle.diseaseCount).toEqual(1);
  })
  test("should increase Seattle diseaseCount by 1 after two minutes", () => {
    game.setDiseaseCount(2);
    jest.advanceTimersByTime(1201)
    expect(seattle.diseaseCount).toEqual(1);
  })
  test("should increase Seattle diseaseCount by 1 after every two minutes", () => {
    game.setDiseaseCount(2);
    jest.advanceTimersByTime(2401)
    expect(seattle.diseaseCount).toEqual(2);
  })
  test("should increase Seattle diseaseCount to 3 after 6 minutes", () => {
    game.setDiseaseCount(2);
    jest.advanceTimersByTime(3601)
    expect(seattle.diseaseCount).toEqual(3);
  })
  test("should increase Seattle diseaseCount to 3 after 8 minutes", () => {
    game.setDiseaseCount(2);
    jest.advanceTimersByTime(4801)
    expect(seattle.diseaseCount).toEqual(3);
  })

  test( "should increase Paris and Tokyo's diseaseCount by 1 when Seattle's diseaseCount is capped at three and has a new addtion to its diseaseCount", () => {
    game.setDiseaseCount(2);
    jest.advanceTimersByTime(4801)
    expect(seattle.diseaseCount).toEqual(3);
    expect(paris.diseaseCount).toEqual(1);
    expect(tokyo.diseaseCount).toEqual(1);
    expect(game.isGameOver).toEqual(false);
  })
  test( "should increase Paris and Tokyo's diseaseCount by 1 when Seattle's diseaseCount is capped at three and has a new addtion to its diseaseCount", () => {
    game.setDiseaseCount(2);
    jest.advanceTimersByTime(8401)
    expect(seattle.diseaseCount).toEqual(3);
    expect(paris.diseaseCount).toEqual(3);
    expect(tokyo.diseaseCount).toEqual(3);
    expect(game.getTotalDiseaseCount()).toEqual(9);
    expect(game.isGameOver).toEqual(true);
  })

  test( "should increase the total disease by 1 after 2 minutes - for a random city", () => {
    game.setRandomDiseaseCount();
    jest.advanceTimersByTime(2401)
    expect(game.getTotalDiseaseCount()).toEqual(2);
    expect(seattle.diseaseCount).toEqual(0);
    expect(paris.diseaseCount).toEqual(2);
    expect(tokyo.diseaseCount).toEqual(0);
  })

  // test( "should increase the total disease by 1 after 2 minutes - for a random city", () => {
  //   game.setRandomDiseaseCount();
  //   jest.advanceTimersByTime(2401)
  //   expect(game.getTotalDiseaseCount()).toEqual(2);
  //   expect(seattle.diseaseCount).toEqual(0);
  //   expect(paris.diseaseCount).toEqual(2);
  //   expect(tokyo.diseaseCount).toEqual(0);
  // })
})
