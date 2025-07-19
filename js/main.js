/*

এই অংশ সরাসরি index.html এ একটি মাত্র js দিয়ে সব লিংকের কাজ করানোর জন্য। 

import { cards } from './data-cards.js';
import { generateCards } from './generate-cards.js';
import { initSearch } from './search.js';
import { initMenu } from './menu.js';
import { initIntersectionObserver } from './observer.js';

*/


const searchInput = document.getElementById("searchInput");
const cardContainer = document.getElementById("cardContainer");
const menuIcon = document.querySelector('.menu-icon');
const menu = document.getElementById('mainMenu');
const closeBtn = document.getElementById('closeMenuBtn');
const noResultsCard = document.getElementById("noResultsCard");

generateCards(cards, cardContainer);
initIntersectionObserver();
initSearch(searchInput, cardContainer, noResultsCard);
initMenu(menuIcon, menu, closeBtn);