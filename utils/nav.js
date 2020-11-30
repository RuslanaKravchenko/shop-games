import { refs } from '../refs.js';
export const navigation = links => {
  const markup = links.reduce((acc, link) => {
    acc += `<li>${link}</li>`;
    return acc;
  }, '');

  refs.navList.innerHTML = markup;
};
