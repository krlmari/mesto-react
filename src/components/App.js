import React from 'react';
import Header from './Header';
import Main from './Main';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';

function App() {
	const [ isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = React.useState(false);
	const [ isEditProfilePopupOpen, setEditProfilePopupOpen ] = React.useState(false);
	const [ isAddPlacePopupOpen, setAddPlacePopupOpen ] = React.useState(false);
	const [ selectedCard, setSelectedCard ] = React.useState({ link: '', name: '' });

	const [ currentUser, setCurrentUser ] = React.useState({});

	React.useEffect(() => {
		api
			.getInitalInfo()
			.then((res) => {
				setCurrentUser(res);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleEditAvatarClick = () => {
		setEditAvatarPopupOpen(true);

		const popup = document.querySelector('.popup__update-avatar-form');
		popup.classList.add('popup__opened');
		document.body.classList.add('body__overflow');
	};

	const handleEditProfileClick = () => {
		setEditProfilePopupOpen(true);

		const popup = document.querySelector('.popup-profile');
		popup.classList.add('popup__opened');
		document.body.classList.add('body__overflow');
	};

	const handleAddPlaceClick = () => {
		setAddPlacePopupOpen(true);

		const popup = document.querySelector('.popup-mesto');
		popup.classList.add('popup__opened');
		document.body.classList.add('body__overflow');
	};

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	const closeAllPopups = () => {
		setEditAvatarPopupOpen(false);
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setSelectedCard({ link: '', name: '' });

		const popups = document.querySelectorAll('.popup');
		popups.forEach((popup) => {
			popup.classList.remove('popup__opened');
		});
		document.body.classList.remove('body__overflow');
	};

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="App root">
				<div class="page">
					<Header />
					<Main
						onEditAvatar={handleEditAvatarClick}
						onEditProfile={handleEditProfileClick}
						onAddPlace={handleAddPlaceClick}
						onCardClick={handleCardClick}
					/>
					<ImagePopup card={selectedCard} onClose={closeAllPopups} />
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
								<button
									class="form__close-button"
									type="button"
									onClick={closeAllPopups}
								/>
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
								<button
									class="form__close-button close-button"
									type="button"
									onClick={closeAllPopups}
								/>
							</form>
						</div>
					</div>

					<div class="popup popup__delete-card">
						<div class="popup__container popup__delete-container">
							<form action="" class="form" novalidate>
								<p class="popup__delete-text">Вы уверены?</p>
								<button class="popup__delete-button" type="submit">
									Да
								</button>
								<button
									class="form__close-button"
									type="button"
									onClick={closeAllPopups}
								/>
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
								<button
									class="form__close-button close-button"
									type="button"
									onClick={closeAllPopups}
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
