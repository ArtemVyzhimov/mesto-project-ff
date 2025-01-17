// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
function createCard(data, handleDelete) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardImage.src = data.link;
  cardImage.alt = data.name;
  cardTitle.textContent = data.name;

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