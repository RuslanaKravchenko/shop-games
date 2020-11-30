import data from './data/index.js';
import { navigation } from './utils/nav.js';
import { refs } from './refs.js';
import { createCards } from './utils/create-cards.js';

// refs.navList.innerHTML = navigation(data.navigationsLink);

navigation(data.navigationsLink);
createCards(data.games.actions);
