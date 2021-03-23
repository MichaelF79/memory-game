document.addEventListener('DOMContentLoaded', () => {

 // cards
 const cardArray = [
   {
    name: "baggy",
    img: "images\Baggy1.png"},
   {
    name: "baggy",
    img: "images\Baggy1.png"},
   {
    name: "bertie",
    img: "images\Bertie1.png"},
   {
    name: "bertie",
    img: "images\Bertie1.png"},
   {
    name: "billy",
    img: "images\Billy1.png"},
   {
    name: "billy",
    img: "images\Billy1.png"},
   {
    name: "capt",
    img: "images\Capt Blade1.png"},
   {
    name: "capt",
    img: "images\Capt Blade1.png"},
   {
    name: "card-back",
    img: "images/card-back.png"},
   {
    name: "card-back",
    img: "images/card-back.png"},
   {
    name: "chirpy",
    img: "images\Chirpy1.png"},
   {
    name: "chirpy",
    img: "images\Chirpy1.png"},
   {
    name: "filbert",
    img: "images\Filbert1.png"},
   {
    name: "filbert",
    img: "images\Filbert1.png"},
   {
    name: "fred",
    img: "images\Fred1.png"},
   {
    name: "fred",
    img: "images\Fred1.png"},
   {
    name: "gully",
    img: "images\Gully1.png"},
   { 
    name: "gully",
    img: "images\Gully1.png"},
   {
    name: "gunnersaurus",
    img: "images\Gunnersaurus1.png"},
   {
    name: "gunnersaurus",
    img: "images\Gunnersaurus1.png"},
   {
    name: "hammerhead",
    img: "images\Hammerhead1.png"},
   {
    name: "hammerhead",
    img: "images\Hammerhead1.png"},
   {
    name: "hercules",
    img: "images\Hercules1.png"},
   {
    name: "hercules",
    img: "images\Hercules1.png"},
   {
    name: "red",
    img: "images\Mighty Red1.png"},
   {
    name: "red",
    img: "images\Mighty Red1.png"},
   {
    name: "monty",
    img: "images\Monty Magpie1.png"},
   {
    name: "monty",
    img: "images\Monty Magpie1.png"},
   {
    name: "moonchester",
    img: "images\Moonchester1.png"},
   {
    name: "moonchester",
    img: "images\Moonchester1.png"},
   {
    name: "pete",
    img: "images\Pete1.png"},
   {
    name: "pete",
    img: "images\Pete1.png"},
   {
    name: "sammy",
    img: "images\Sammy Saint1.png"},
   {
    name: "sammy",
    img: "images\Sammy Saint1.png"},
   {
    name: "stamford",
    img: "images\Stamford1.png"},
   {
    name: "stamford",
    img: "images\Stamford1.png"},
   {
    name: "white",
    img: "images\white.png"},
   {
   name: "white",
   img: "images\white.png"},
   {
    name: "wolfie",
    img: "images\Wolfie & Wendy1.png"},
   {
    name: "wolfie",
    img: "images\Wolfie & Wendy1.png"},
  ]
  // Create gameboard grid
  const grid = document.querySelector('.grid')

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/card-back.png')
      card.setAttribute('data-id', i)
      //card.addEventListener('click', flipcard)//
      grid.appendChild(card)
    }
  }


})