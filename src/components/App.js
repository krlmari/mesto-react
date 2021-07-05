import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
	return (
		<div className="App root">
			<div class="page">
				<Header />
				<Main />
				<Footer />

				<div class="popup popup-profile">
					<div class="popup__container">
						<form action="" class="form" novalidate>
							<h2 class="form__header">Редактировать профиль</h2>
							<fieldset class="form__feild">
								<div class="form__conteiner">
									<input
										type="text"
										class="form__input form__input-up"
										id="input-name"
										arial-label="Name"
										placeholder="Имя"
										name="name"
										required
										minlength="2"
										maxlength="40"
									/>
									<span class="input-name-error form__input-error" />

									<input
										type="text"
										class="form__input form__input-down"
										id="input-description"
										arial-label="Description"
										placeholder="Описание"
										name="description"
										required
										minlength="2"
										maxlength="200"
									/>
									<span class="input-description-error form__input-error" />
								</div>
								<button class="form__save-button" type="submit">
									Сохранить
								</button>
							</fieldset>
							<button class="form__close-button" type="button" />
						</form>
					</div>
				</div>

				<div class="popup popup-mesto">
					<div class="popup__container">
						<form action="" class="form" novalidate>
							<h2 class="form__header">Новое место</h2>
							<fieldset class="form__feild">
								<div class="form__conteiner">
									<input
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
										type="url"
										class="form__input form__input-down form__input_src"
										id="input-src"
										arial-label="Src"
										placeholder="Ссылка на картинку"
										name="src"
										required
									/>
									<span class="input-src-error form__input-error" />
								</div>
								<button class="form__save-button" type="submit">
									Сохранить
								</button>
							</fieldset>
							<button class="form__close-button close-button" type="button" />
						</form>
					</div>
				</div>

				<div class="popup popup__card">
					<div class="popup__card_content">
						<img src="" alt="popup__card_image" class="popup__card_image" />
						<p class="popup__card_text" />
						<button class="close-button form__close-button" />
					</div>
				</div>

				<div class="popup popup__delete-card">
					<div class="popup__container popup__delete-container">
						<form action="" class="form" novalidate>
							<p class="popup__delete-text">Вы уверены?</p>
							<button class="popup__delete-button" type="submit">
								Да
							</button>
							<button class="form__close-button" type="button" />
						</form>
					</div>
				</div>

				<div class="popup popup__update-avatar-form">
					<div class="popup__container popup__update-avatar-container">
						<form action="" class="form" novalidate>
							<h2 class="form__header">Обновить аватар</h2>
							<fieldset class="form__feild">
								<div class="form__conteiner">
									<input
										type="url"
										class="form__input form__input-down form__input_src"
										id="input-src"
										arial-label="Src"
										placeholder="Ссылка на картинку"
										name="src"
										required
									/>
									<span class="input-src-error form__input-error" />
								</div>
								<button class="form__save-button" type="submit">
									Сохранить
								</button>
							</fieldset>
							<button class="form__close-button close-button" type="button" />
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
