import '../pages/index.css'; 
import { initialCards } from './cards.js';
import { openPopup, closePopup, closeByOverlayClick } from '../components/modal.js';
import { createCard, deleteCard } from '../components/card.js';

// DOM узлы
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
// Попапы
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const popups = document.querySelectorAll('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');

// DOM узлы для формы редактирования профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const formEditProfile = editPopup.querySelector('.popup__form');
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_description');

// DOM узлы для формы добавления карточки
const newCardForm = newCardPopup.querySelector('.popup__form');
const placeInput = newCardPopup.querySelector('.popup__input_type_card-name');
const linkInput = newCardPopup.querySelector('.popup__input_type_url');

// Функция обработки отправки формы добавления карточки
function handleNewCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardData = {
    name: placeInput.value,
    link: linkInput.value,
  };

  const newCard = createCard(newCardData, deleteCard);
  placesList.prepend(newCard);

  closePopup(newCardPopup);
  newCardForm.reset();
}

// Обработчик события submit
newCardForm.addEventListener('submit', handleNewCardFormSubmit);
formEditProfile.addEventListener('submit', submitEditProfileForm);


// Открытие попапа с подстановкой данных
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(editPopup);
});

// Функция отправки формы
function submitEditProfileForm (evt) {
  evt.preventDefault();
  
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(editPopup); 
}

// Закрытие попапа кликом на оверлей и крестик
popups.forEach((popup) => {
  popup.addEventListener('click', closeByOverlayClick);
});

// Открытие попапов
newCardButton.addEventListener('click', () => openPopup(newCardPopup));

// Вывести карточки на страницу
function renderCards(cards) {
  cards.forEach((cardData) => {
    const card = createCard(cardData, deleteCard);
    placesList.append(card);
  });
}

// Вызов рендера для начального массива карточек
renderCards(initialCards);