//База
const config = {
    baseUrl: "https://mesto.nomoreparties.co/v1/wff-cohort-31",
    headers: {
      authorization: "559ad3bd-743e-4dc2-a80f-7d24da7163b9",
      "Content-Type": "application/json",
    },
  };

// Функция для получения данных пользователя
export const getUserInfo = () => {
    return fetch(`${config.baseUrl}/users/me`, {
      headers: config.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };

// Функция для получения карточек
export const getInitialCards = () => {
    return fetch(`${config.baseUrl}/cards`, {
      headers: config.headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  };


