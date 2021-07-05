import React from 'react';

function PopupWithForm(props) {
	return (
		<div className={`popup popup${props.name}`}>
			<div className="popup__container">
				<form name={props.name} className="form" novalidate>
					<h2 className="form__header">`${props.title}`</h2>
					<fieldset className="form__feild">
						<div className="form__conteiner">{props.children}</div>
						<button className="form__save-button" type="submit">
							Сохранить
						</button>
					</fieldset>
					<button class="form__close-button" type="button" />
				</form>
			</div>
		</div>
	);
}

export default PopupWithForm;
