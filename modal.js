'use strict';

let modalOpenButton = document.querySelector('.search-link'),
modal = document.querySelector('.modal-container'),
modalCloseButton = modal.querySelector('.modal-close-button');

modalOpenButton.addEventListener('click', evt => {
  evt.preventDefault();
  modal.classList.remove('modal-container-close');
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('modal-container-close');
});
