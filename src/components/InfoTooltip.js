import React from "react";
import okay from "../images/okay.png";
import fault from "../images/fault.png";

function InfoTooltip(props) {
  return (
    <section className={`popup infoTooltip ${props.isOpen && "popup__opened"}`}>
      <div className="popup__container infoTooltip__container">
        <div className="form infoTooltip">
          <img className="infoTooltip__image" src={props.authStatus ? okay : fault} />
          <p className="form__header">
            {props.authStatus
              ? "Вы успешно зарегистрировались!"
              : "Что-то пошло не так! Попробуйте ещё раз."}
          </p>
        </div>
        <button className="form__close-button" type="button" onClick={props.onClose} />
      </div>
    </section>
  );
}

export default InfoTooltip;
