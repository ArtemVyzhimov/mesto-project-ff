//База
const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-31",
    headers: {
      authorization: "559ad3bd-743e-4dc2-a80f-7d24da7163b9",
      "Content-Type": "application/json",
    },
  };

// Функция обработки ответа
const checkResponse = (res) => 
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

// Универсальная функция для запросов
const request = (url, options) => 
  fetch(`${config.baseUrl}${url}`, options).then(checkResponse);

// Получение карточек
export const getCards = () => request('/cards', { headers: config.headers });

// Получение данных пользователя
export const getUserMe = () => request('/users/me', { headers: config.headers });

// Обновление профиля
export const editProfile = (name, about) => 
  request('/users/me', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ name, about })
  });

// Добавление карточки
export const addCard = (name, link) => 
  request('/cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({ name, link })
  });

// Удаление карточки
export const removeCard = (idCard) => 
  request(`/cards/${idCard}`, { method: 'DELETE', headers: config.headers });

// Лайк карточки
export const addLikeCard = (idCard) => 
  request(`/cards/likes/${idCard}`, { method: 'PUT', headers: config.headers });

// Удаление лайка
export const deleteLikeCard = (idCard) => 
  request(`/cards/likes/${idCard}`, { method: 'DELETE', headers: config.headers });

// Обновление аватара
export const editAvatar = (avatar) => 
  request('/users/me/avatar', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({ avatar })
  });
