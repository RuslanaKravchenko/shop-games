import { refs } from '../refs.js';

export const createCards = cards => {
  const markup = cards.reduce((acc, card) => {
    acc += `
    <li>
    <h2>${card.title}</h2>
    <img src = ${card.img} alt = ${card.title}/>
    <p>${card.description}</p>
    <p>${card.price}</p>
    <button data-id=${card.id} data-category=${card.category} type="button">Add to cart </button>
    </li>`;
    return acc;
  }, '');

  return (refs.cardList.innerHTML = markup);
};
