import $ from 'jquery';
import 'bootstrap' ; 
import 'bootstrap/dist/css/bootstrap.min.css' ; 
import './styles.css' ;
import { Game, City } from './game';


$(document).ready(function() {
  
})

var game = new Game;

var cityIndex = function(){
  return Math.floor(Math.random() * (this.cities.length));
}

game.setRandomDiseaseCount();

