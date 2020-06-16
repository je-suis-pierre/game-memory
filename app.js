document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: './images/image_1.png',
    },
    {
      name: '1',
      img: './images/image_1.png',
    },
    {
      name: '2',
      img: './images/image_2.png',
    },
    {
      name: '2',
      img: './images/image_2.png',
    },
    {
      name: '3',
      img: './images/image_3.png',
    },
    {
      name: '3',
      img: './images/image_3.png',
    },
    {
      name: '4',
      img: './images/image_4.png',
    },
    {
      name: '4',
      img: './images/image_4.png',
    },
    {
      name: '5',
      img: './images/image_5.png',
    },
    {
      name: '5',
      img: './images/image_5.png',
    },
    {
      name: '6',
      img: './images/image_6.png',
    },
    {
      name: '6',
      img: './images/image_6.png',
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  const resultDisplay = document.querySelector('#result');
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img');
      card.setAttribute('src', './images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click', flipCard);
      grid.appendChild(card);
      if ((i + 1) % 4 == 0) {
        grid.appendChild(document.createElement('br'));
      }
    }
  }
  //check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match');
      cards[optionOneId].setAttribute('src', './images/white.png');
      cards[optionTwoId].setAttribute('src', './images/white.png');
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute('src', './images/blank.png');
      cards[optionTwoId].setAttribute('src', './images/blank.png');
      alert('Sorry, try again.');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = 'Congratulations!';
    }
  }

  //flip your card
  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
