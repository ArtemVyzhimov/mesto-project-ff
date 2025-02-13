(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function n(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t(e.target.closest(".popup"))}function r(e){if("Escape"===e.key){var n=document.querySelector(".popup_is-opened");n&&t(n)}}function o(e){e.classList.toggle("card__like-button_is-active")}function c(e){e.remove()}function u(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=o.querySelector(".card__image"),u=o.querySelector(".card__title"),i=o.querySelector(".card__delete-button"),a=o.querySelector(".card__like-button");return c.src=e.link,c.alt=e.name,u.textContent=e.name,c.addEventListener("click",(function(){return t(e)})),a.addEventListener("click",(function(){return n(a)})),i.addEventListener("click",(function(){return r(o)})),o}var i=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},a=function(e,t){e.classList.add(t.inactiveButtonClass),e.disabled=!0},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.classList.remove(n.inactiveButtonClass),t.disabled=!1):a(t,n)},s=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){i(e,n,t),n.value=""})),a(r,t)},l=document.querySelector(".places__list"),d=(document.querySelector("#card-template").content,document.querySelector(".popup__image")),_=document.querySelector(".popup__caption"),m=document.querySelector(".popup_type_image"),y=document.querySelector(".profile__edit-button"),f=document.querySelector(".profile__add-button"),v=document.querySelectorAll(".popup"),S=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),k=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),E=S.querySelector(".popup__form"),b=S.querySelector(".popup__input_type_name"),C=S.querySelector(".popup__input_type_description"),g=q.querySelector(".popup__form"),h=q.querySelector(".popup__input_type_card-name"),x=q.querySelector(".popup__input_type_url");function A(t){d.src=t.link,d.alt=t.name,_.textContent=t.name,e(m)}g.addEventListener("submit",(function(e){e.preventDefault();var n=u({name:h.value,link:x.value},A,o,c);l.prepend(n),t(q),g.reset()})),E.addEventListener("submit",(function(e){e.preventDefault(),k.textContent=b.value,L.textContent=C.value,t(S)})),y.addEventListener("click",(function(){s(E,j),b.value=k.textContent,C.value=L.textContent,e(S)})),v.forEach((function(e){e.addEventListener("click",n)})),f.addEventListener("click",(function(){s(g,j),g.reset(),e(q)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=u(e,A,o,c);l.append(t)}));var j={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){return e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(j)})();