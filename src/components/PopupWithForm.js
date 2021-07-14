import React from 'react';

function PopupWithForm(props) {
	return (
		<div className={`popup popup-${props.name} ${props.isOpen && 'popup__opened'}`}>
			<div className="popup__container">
				<form onSubmit={props.onSubmit} name={props.name} className="form" novalidate>
					<h2 className="form__header">{props.title}</h2>
					<fieldset className="form__feild">
						<div className="form__conteiner">{props.children}</div>
						<button className="form__save-button" type="submit">
							{props.textButton}
						</button>
					</fieldset>
					<button className="form__close-button" type="button" onClick={props.onClose} />
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;
