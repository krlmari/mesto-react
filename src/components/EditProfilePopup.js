import React, { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  // После загрузки текущего пользователя из API
  // его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  function handleChangeUserName(e) {
    setName(e.target.value);
  }

  function handleChangeUserDescription(e) {
    setDescription(e.target.value);
  }

  return (
    <PopupWithForm
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      name="profile"
      title="Редактировать профиль"
      textButton="Сохранить"
    >
      <input
        type="text"
        className="form__input form__input-up"
        id="input-name"
        arial-label="Name"
        placeholder="Имя"
        name="name"
        required
        minlength="2"
        maxlength="40"
        value={name || ""}
        onChange={handleChangeUserName}
      />

      <input
        type="text"
        className="form__input form__input-down"
        id="input-description"
        arial-label="Description"
        placeholder="Описание"
        name="description"
        required
        minlength="2"
        maxlength="200"
        value={description || ""}
        onChange={handleChangeUserDescription}
      />
    </PopupWithForm>
  );
}

export default EditProfilePopup;
