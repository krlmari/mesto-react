import React from "react";
import editAvatarImg from "../images/edit-avatar.png";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const onEditAvatar = () => {
    props.onEditAvatar(props.onClick);
  };

  const onEditProfile = () => {
    props.onEditProfile(props.onClick);
  };

  const onAddPlace = () => {
    props.onAddPlace(props.onClick);
  };

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <div className="profile__container-avatar">
            <img src={currentUser.avatar} alt="avatar" class="profile__avatar" />
            <button className="profile__edit-avatar" onClick={onEditAvatar}>
              <img src={`${editAvatarImg}`} alt="avatar" className="profile__edit" />
            </button>
          </div>
          <div className="profile__text">
            <p className="profile__name">{currentUser.name}</p>
            <p className="profile__description">{currentUser.about}</p>
          </div>
          <button className="profile__edit-button" onClick={onEditProfile} />
        </div>
        <button className="profile__add-button" onClick={onAddPlace} />
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
