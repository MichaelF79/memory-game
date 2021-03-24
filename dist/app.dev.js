"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // declare cards
  var cardArray = [{
    name: "baggy",
    img: "images\Baggy1.png"
  }, {
    name: "baggy",
    img: "images\Baggy1.png"
  }, {
    name: "bertie",
    img: "images\Bertie1.png"
  }, {
    name: "bertie",
    img: "images\Bertie1.png"
  }, {
    name: "billy",
    img: "images\Billy1.png"
  }, {
    name: "billy",
    img: "images\Billy1.png"
  }, {
    name: "gunner",
    img: "images\Gunnersaurus1.png"
  }, {
    name: "gunner",
    img: "images\Gunnersaurus1.png"
  }, {
    name: "chirpy",
    img: "images\Chirpy1.png"
  }, {
    name: "chirpy",
    img: "images\Chirpy1.png"
  }, {
    name: "filbert",
    img: "images\Filbert1.png"
  }, {
    name: "filbert",
    img: "images\Filbert1.png"
  }]; //add cardArray.sort ->

  var grid = document.querySelector('.grid'); // Create gameboard grid

  function createBoard() {
    for (var i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', 'images\card-back.png');
      card.setAttribute('data-id', i);
      grid.appendChild(card); //need to addEventListener('click',//
    }
  } // add matching card functions//
  // add card flip function//


  createBoard();
});