document.addEventListener('DOMContentLoaded', () => {

 // declare cards
 const cardArray = [
   {
    name: "baggy",
    img: "images/Baggy1.png"},
   {
    name: "baggy",
    img: "images/Baggy1.png"},
   {
    name: "bertie",
    img: "images/Bertie1.png"},
   {
    name: "bertie",
    img: "images/Bertie1.png"},
   {
    name: "billy",
    img: "images/Billy1.png"},
   {
    name: "billy",
    img: "images/Billy1.png"},
   {
    name: "capt",
    img: "images/CaptBlade1.png"},
    {
    name: "capt",
    img: "images/CaptBlade1.png"},
   {
    name: "chirpy",
    img: "images/Chirpy1.png"},
   {
    name: "chirpy",
    img: "images/Chirpy1.png"},
   {
    name: "filbert",
    img: "images/Filbert1.png"},
   {
    name: "filbert",
    img: "images/Filbert1.png"},
   {
    name: "fred",
    img: "images/Fred1.png"},
   {
    name: "fred",
    img: "images/Fred1.png"},
   {
    name: "gully",
    img: "images/Gully1.png"},
   {
    name: "gully",
    img: "images/Gully1.png"},
   {
    name: "gunner",
    img: "images/Gunnersaurus1.png"}, 
   {
    name: "gunner",
    img: "images/Gunnersaurus1.png"},
   {
    name: "hammer",
    img: "images/Hammerhead1.png"},
   {
    name: "hammer",
    img: "images/Hammerhead1.png"},
   {
    name: "hercules",
    img: "images/Hercules1.png"},
   {
    name: "hercules",
    img: "images/Hercules1.png"},
   {
    name: "red",
    img: "images/MightyRed1.png"},
   {
    name: "red",
    img: "images/MightyRed1.png"},
   
  ]

  //add cardArray.sort ->

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = [];

  // Create gameboard grid
  function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/card-back.png')
        card.setAttribute('data-id', i)
        grid.appendChild(card)
        //need to addEventListener('click',//
    }
  }

  // add matching card functions//

  // add card flip function//
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }


  createBoard()
})