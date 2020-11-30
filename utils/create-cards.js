import { refs } from '../refs.js';

export const createCards = cards => {
  const markup = cards.reduce((acc, card) => {
    acc += `
    <li>
    <h2>${card.title}</h2>
    <img src = ${card.img}/>
    <p>${card.description}</p>
    <p>${card.price}</p>
    </li>`;
    return acc;
  }, '');

  return (refs.cardList.innerHTML = markup);
};
