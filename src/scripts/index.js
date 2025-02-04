import '../pages/index.css'; 
import { initialCards } from './cards.js';

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;







// Попапы
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const popups = document.querySelectorAll('.popup');
const editPopup = document.querySelector('.popup_type_edit');
const newCardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');



// @todo: DOM узлы для формы редактирования профиля
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const editForm = editPopup.querySelector('.popup__form');
const nameInput = editPopup.querySelector('.popup__input_type_name');
const jobInput = editPopup.querySelector('.popup__input_type_description');






// @todo: Открытие попапа с подстановкой данных
profileEditButton.addEventListener('click', () => {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(editPopup);
});

// @todo: Функция обработки отправки формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;

  closePopup(editPopup); // Закрываем попап после сохранения
}

// @todo: Прикрепляем обработчик события submit
editForm.addEventListener('submit', handleFormSubmit);











// @todo: Функция открытия попапа
function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}

// @todo: Функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
}

// @todo: Закрытие по клавише Esc
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

// @todo: Закрытие попапа кликом на оверлей и крестик
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});

// @todo: Открытие попапов
profileEditButton.addEventListener('click', () => openPopup(editPopup));
newCardButton.addEventListener('click', () => openPopup(newCardPopup));














// @todo: Функция создания карточки
function createCard(data, handleDelete) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  // @todo: Открытие попапа с изображением
  cardImage.addEventListener('click', () => {
    popupImage.src = data.link;
    popupImage.alt = data.name;
    popupCaption.textContent = data.name;
    openPopup(imagePopup);
  });

  // Обработчик удаления карточки
  deleteButton.addEventListener('click', () => handleDelete(cardElement));

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
function renderCards(cards) {
  cards.forEach((cardData) => {
    const card = createCard(cardData, deleteCard);
    placesList.append(card);
  });
}

// Вызов рендера для начального массива карточек
renderCards(initialCards);