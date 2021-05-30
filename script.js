'use strict';

const showModalBtns = document.querySelector('.show-modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const openModalfunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModalfunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closeModalBtn.addEventListener('click', closeModalfunc);

showModalBtns.addEventListener('click', openModalfunc);
