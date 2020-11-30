import data from './data/index.js';
import { navigation } from './utils/nav.js';
import { refs } from './refs.js';
import { createCards } from './utils/create-cards.js';

navigation(data.navigationsLink);
createCards(data.games.actions);

const createMarkup = event => {
  const name = event.target.dataset.link;
  createCards(data.games[name]);
};

const findGame = event => {
  const game = data.games[event.target.dataset.category].find(
    game => game.id == event.target.dataset.id,
  );

  console.log(game);
};

refs.navList.addEventListener('click', createMarkup);
refs.cardList.addEventListener('click', findGame);
