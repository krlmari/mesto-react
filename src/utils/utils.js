export const renderLoading = (isLoading = false) => {
	const buttonSubmit = document.querySelector('.form__save-button');
	if (isLoading) {
		buttonSubmit.textContent = `Сохранение...`;
	} else {
		buttonSubmit.textContent = `Сохранить`;
	}
};
