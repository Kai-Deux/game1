document.addEventListener("DOMContentLoaded", () => {
  // Card Options
  const cardArray = [
    {
        name: 'fries',
        img: 'fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'pizza.png'
      },
      {
        name: 'milkshake',
        img: 'milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'hotdog.png'
      },
      {
        name: 'fries',
        img: 'fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'pizza.png'
      },
      {
        name: 'milkshake',
        img: 'milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'hotdog.png'
      }
  ];

    cardArray.sort(() => 0.5 - Math.random());
    
    const grid = document.querySelector(".grid");
    const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];

  // Create your board
  function createBoard() {
    //For Loop
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      // Set as an attribute
      card.setAttribute("src", "blank.png");
      // Data ID
      card.setAttribute("data-id", i);
      // Add EventListener
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
    }
  }

  // Check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const OptionTwoId = cardsChosenId[1];
      if (cardsChosen[0] === cardsChosen[1]) {
          alert("You found a match");
          cards[optionOneId].setAttribute("src", "white.png");
          cards[OptionTwoId].setAttribute("src", "white.png");
          cardsWon.push(cardsChosen);
      } else {
          cards[optionOneId].setAttribute('src', 'blank.png');
          cards[OptionTwoId].setAttribute('src', 'blank.png');
          alert('Sorry, try again');
      }
      cardsChosen = [];
      cardsChosenId = [];
      resultDisplay.textContent = cardsWon.length;
      if (cardsWon.length === cardArray.length / 2) {
          resultDisplay.textContent = 'Congratulations!🥳 You found them all!😄'
      }
  }

  // Flip your card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosenId.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
