export class Player {
  constructor(){
    this.moveCount = 0;
    //this.currentLocation = seattle;
  }

  treat(city){
    // disease count --
  }

  travel(){

  }
}

export class City {
  constructor(){
    this.diseaseCount = 0;
  }
}

export class Game {
  constructor(){
    let tokyo = new City;
    let paris = new City;
    let seattle = new City;
    this.isGameOver = false;
    this.cities = [tokyo, paris, seattle];
    this.infectRate;
    this.infectRateRandom;
  }

  getTotalDiseaseCount(){
    let totalDisease = 0;
    for (let i = 0; i < this.cities.length; i++){
      totalDisease += this.cities[i].diseaseCount;
    }
    return totalDisease;
  }

  infect(cityIndex){
    let totalDisease = this.getTotalDiseaseCount();
    if (totalDisease >= (3 * this.cities.length)){
      console.log(this);
      this.isGameOver = true;
      clearInterval(this.infectRate);
      clearInterval(this.infectRateRandom);
    } else if(this.cities[cityIndex].diseaseCount === 3){ 
      for (let i = 0; i < this.cities.length; i++){
        if (i != cityIndex && this.cities[i].diseaseCount < 3) {
          this.cities[i].diseaseCount ++;
          console.log("infected city index = ", i, " at current count: ", this.cities[i].diseaseCount);
        }
      }
    } else{
      this.cities[cityIndex].diseaseCount ++;
    }
  }

  setDiseaseCount(cityIndex){
    this.infectRate = setInterval(() => {
      this.infect(cityIndex);
    }, 1200);
  }

  getRandomCityIndex(){
    return Math.floor(Math.random() * 3);
  }
  setRandomDiseaseCount(){
    this.infectRateRandom = setInterval(() => {
      let cityIndex = this.getRandomCityIndex();
      this.infect(cityIndex);
    }, 1200);
  }
}
