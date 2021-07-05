import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App root">
			<div class="page">
				<header class="header">
					<a href="#" class="header__href">
						<img
							src="<%=require('./images/header__logo.svg')%>"
							alt="Логотип проекта mesto"
							class="header__logo"
						/>
					</a>
				</header>

				<main class="content">
					<section class="profile">
						<div class="profile__info">
							<div class="profile__container-avatar">
								<img
									src="<%=require('./images/profile__avatar.jpg')%>"
									alt="avatar"
									class="profile__avatar"
								/>
								<button class="profile__edit-avatar">
									<img
										src="<%=require('./images/edit-avatar.png')%>"
										alt="avatar"
										class="profile__edit"
									/>
								</button>
							</div>
							<div class="profile__text">
								<div class="profile__name-and-edit">
									<p class="profile__name">Жак-Ив Кусто</p>
									<button class="profile__edit-button" />
								</div>
								<p class="profile__description">Исследователь океана</p>
							</div>
						</div>
						<button class="profile__add-button" />
					</section>

					<section class="elements">
						<template id="elements-template">
							<div class="elements__element">
								<img src="" alt="image" class="elements__image" />
								<button class="elements__delete" />
								<div class="elements__container">
									<p class="elements__name" />
									<div>
										<div class="elements__like" />
										<p class="elements__count-like" />
									</div>
								</div>
							</div>
						</template>
					</section>
				</main>

				<footer class="footer">
					<p class="footer__copyright">&copy; 2020 Mesto Russia</p>
				</footer>

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
