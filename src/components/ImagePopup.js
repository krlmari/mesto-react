import React from "react";

function ImagePopup(props) {
  return (
    <div className={`popup popup__card ${props.card.name && "popup__opened"}`}>
      <div className="popup__card_content">
        <img src={props.card.link} alt={props.card.name} className="popup__card_image" />
        <p className="popup__card_text">{props.card.name}</p>
        <button className="close-button form__close-button" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default ImagePopup;
