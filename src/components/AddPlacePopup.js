import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
	const [ name, setName ] = React.useState('');
	const [ link, setLink ] = React.useState('');

	React.useEffect(
		() => {
			setName('');
			setLink('');
		},
		[ props.isOpen ]
	);

	function handleSubmit(e) {
		e.preventDefault();

		props.onAddPlace({
			name,
			link
		});
	}

	function handleChangeCardName(e) {
		setName(e.target.value);
	}

	function handleChangeCardLink(e) {
		setLink(e.target.value);
	}

	return (
		<PopupWithForm
			onClose={props.onClose}
			isOpen={props.isOpen}
			onSubmit={handleSubmit}
			name="mesto"
			title="Новое место"
			textButton="Сохранить"
		>
			<input
				onChange={handleChangeCardName}
				value={name}
				type="text"
				class="form__input form__input-up form__input_title"
				id="input-title"
				arial-label="Title"
				placeholder="Название"
				name="title"
				required
				minlength="2"
				maxlength="30"
			/>
			<span class="input-title-error form__input-error" />

			<input
				onChange={handleChangeCardLink}
				value={link}
				type="url"
				class="form__input form__input-down form__input_src"
				id="input-src"
				arial-label="Src"
				placeholder="Ссылка на картинку"
				name="src"
				required
			/>
			<span class="input-src-error form__input-error" />
		</PopupWithForm>
	);
}

export default AddPlacePopup;
