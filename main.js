(()=>{"use strict";function e(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",r)}function t(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",r)}function n(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close"))&&t(e.target.closest(".popup"))}function r(e){if("Escape"===e.key){var n=document.querySelector(".popup_is-opened");n&&t(n)}}function o(e){e.classList.toggle("card__like-button_is-active")}function c(e){e.remove()}function p(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),c=o.querySelector(".card__image"),p=o.querySelector(".card__title"),u=o.querySelector(".card__delete-button"),a=o.querySelector(".card__like-button");return c.src=e.link,c.alt=e.name,p.textContent=e.name,c.addEventListener("click",(function(){return t(e)})),a.addEventListener("click",(function(){return n(a)})),u.addEventListener("click",(function(){return r(o)})),o}var u=document.querySelector(".places__list"),a=(document.querySelector("#card-template").content,document.querySelector(".popup__image")),d=document.querySelector(".popup__caption"),i=document.querySelector(".popup_type_image"),l=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),_=document.querySelectorAll(".popup"),m=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_new-card"),v=document.querySelector(".profile__title"),f=document.querySelector(".profile__description"),k=m.querySelector(".popup__form"),q=m.querySelector(".popup__input_type_name"),S=m.querySelector(".popup__input_type_description"),g=y.querySelector(".popup__form"),L=y.querySelector(".popup__input_type_card-name"),E=y.querySelector(".popup__input_type_url");function h(t){a.src=t.link,a.alt=t.name,d.textContent=t.name,e(i)}g.addEventListener("submit",(function(e){e.preventDefault();var n=p({name:L.value,link:E.value},h,o,c);u.prepend(n),t(y),g.reset()})),k.addEventListener("submit",(function(e){e.preventDefault(),v.textContent=q.value,f.textContent=S.value,t(m)})),l.addEventListener("click",(function(){q.value=v.textContent,S.value=f.textContent,e(m)})),_.forEach((function(e){e.addEventListener("click",n)})),s.addEventListener("click",(function(){return e(y)})),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){var t=p(e,h,o,c);u.append(t)}))})();