// Функция обработки лайка карточки
function handleLike(cardLikeButton) {
  cardLikeButton.classList.toggle('card__like-button_is-active');
}


// Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// Функция создания карточки
function createCard(data, handleImageClick, handleLike, deleteCard){
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

  // Обработчики событий
  cardImage.addEventListener('click', () => handleImageClick(data));
  likeButton.addEventListener('click', () => handleLike(likeButton));
  deleteButton.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
}

// Экспорт функций
export { createCard, deleteCard, handleLike };
