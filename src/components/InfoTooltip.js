import React from "react";
import okay from "../images/okay.png";
import fault from "../images/fault.png";

function InfoTooltip(props) {
  const img = props.authStatus ? okay : fault;
  const text = props.authStatus
    ? "Вы успешно зарегистрировались!"
    : "Что-то пошло не так! Попробуйте ещё раз.";

  return (
    <section className={`popup ${props.isOpen && "popup__opened"}`}>
      <div className="popup__container">
        <div className="form">
          <p className="form__header">{text}</p>
          <img src={img} />
        </div>
      </div>
      <button className="form__close-button" type="button" onClick={props.onClose} />
    </section>
  );
}

export default InfoTooltip;
