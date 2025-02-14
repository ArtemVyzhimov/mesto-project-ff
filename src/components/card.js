import { removeCard } from "./api.js";

// Функция обработки лайка карточки
function handleLike(cardLikeButton) {
  cardLikeButton.classList.toggle('card__like-button_is-active');
}


// Функция удаления карточки с Api
function deleteCard(cardElement, cardId) {
  removeCard(cardId)
    .then(() => {
      cardElement.remove();
    })
    .catch((err) => console.error("Ошибка удаления карточки:", err));
}

// Функция создания карточки
function createCard(data, handleImageClick, handleLike, deleteCard, currentUserId){
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  if (data.owner._id !== currentUserId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener('click', () => deleteCard(cardElement, data._id));
  } // Добавил id для API и проверку

  // Обработчики событий
  cardImage.addEventListener('click', () => handleImageClick(data));
  likeButton.addEventListener('click', () => handleLike(likeButton));
  

  return cardElement;
}

// Экспорт функций
export { createCard, deleteCard, handleLike };
