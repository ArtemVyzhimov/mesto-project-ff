import '../pages/index.css'; 
import { initialCards } from './cards.js';
import { openPopup, closePopup, closeByOverlayClick } from '../components/modal.js';
import { createCard, deleteCard, handleLike } from '../components/card.js';
import { enableValidation, clearValidation } from '../components/validation.js';

// DOM узлы
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

const popupImage = document.querySelector('.popup__image'); 
const popupCaption = document.querySelector('.popup__caption'); 
const imagePopup = document.querySelector('.popup_type_image'); 

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

// Функция обработки клика по изображению 
export function handleImageClick(data) { 
  popupImage.src = data.link; 
  popupImage.alt = data.name; 
  popupCaption.textContent = data.name; 
  openPopup(imagePopup); 
}  

// Функция обработки отправки формы добавления карточки
function handleNewCardFormSubmit(evt) {
  evt.preventDefault();

  const newCardData = {
    name: placeInput.value,
    link: linkInput.value,
  };

  const newCard = createCard(newCardData, handleImageClick, handleLike, deleteCard);
  placesList.prepend(newCard);

  closePopup(newCardPopup);
  newCardForm.reset();
}

// Обработчик события submit
newCardForm.addEventListener('submit', handleNewCardFormSubmit);
formEditProfile.addEventListener('submit', submitEditProfileForm);


// Открытие попапа с подстановкой данных
profileEditButton.addEventListener('click', () => {
  clearValidation(formEditProfile, validationSettings);
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

// Открытие попапа добавления карточки с очисткой валидации
newCardButton.addEventListener('click', () => {
  clearValidation(newCardForm, validationSettings); // Очистка ошибок валидации
  newCardForm.reset();
  openPopup(newCardPopup);
});

// Вывести карточки на страницу
function renderCards(cards) {
  cards.forEach((cardData) => {
    const card = createCard(cardData, handleImageClick, handleLike, deleteCard);
    placesList.append(card);
  });
}

// Вызов рендера для начального массива карточек
renderCards(initialCards);

export const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}; 

enableValidation(validationSettings);
