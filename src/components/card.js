import { removeCard, addLikeCard, deleteLikeCard  } from "./api.js";

// Функция обработки лайка карточки c API
function handleLike(cardLikeButton, cardId, likeCounter) {
  const isLiked = cardLikeButton.classList.contains('card__like-button_is-active');
  
  const likeAction = isLiked ? deleteLikeCard : addLikeCard;

  likeAction(cardId)
    .then(updatedCard => {
      likeCounter.textContent = updatedCard.likes.length; // Обновляем счётчик
      cardLikeButton.classList.toggle('card__like-button_is-active');
    })
    .catch(err => console.error('Ошибка лайка:', err));
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
  const likeCounter = cardElement.querySelector('.card__like-counter');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;
  likeCounter.textContent = data.likes.length;

  // Проверяем, лайкнул ли пользователь карточку
  if (data.likes.some(user => user._id === currentUserId)) {
    likeButton.classList.add('card__like-button_is-active');
  }
  
  if (data.owner._id !== currentUserId) {
    deleteButton.remove();
  } else {
    deleteButton.addEventListener('click', () => deleteCard(cardElement, data._id));
  } // Добавил id для API и проверку

  // Обработчики событий
  cardImage.addEventListener('click', () => handleImageClick(data));
  likeButton.addEventListener('click', () => handleLike(likeButton, data._id, likeCounter));
  

  return cardElement;
}

// Экспорт функций
export { createCard, deleteCard, handleLike };
