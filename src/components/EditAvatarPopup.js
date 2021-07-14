import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
	const avatarRef = React.useRef();

	function handleSubmit(e) {
		e.preventDefault();

		props.onUpdateAvatar({
			avatar: avatarRef.current.value
		});
	}

	return (
		<PopupWithForm
			onClose={props.onClose}
			isOpen={props.isOpen}
			onSubmit={handleSubmit}
			name="update-avatar"
			title="Обновить аватар"
			textButton="Сохранить"
		>
			<input
				ref={avatarRef}
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

export default EditAvatarPopup;
