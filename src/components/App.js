import React from 'react';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
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
	const [ cards, setCards ] = React.useState([]);

	React.useEffect(() => {
		Promise.all([ api.getInitalCards(), api.getInitalInfo() ])
			.then(([ cards, info ]) => {
				setCards(cards);
				setCurrentUser(info);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	const handleEditAvatarClick = () => {
		setEditAvatarPopupOpen(true);
	};

	const handleEditProfileClick = () => {
		setEditProfilePopupOpen(true);
	};

	const handleAddPlaceClick = () => {
		setAddPlacePopupOpen(true);
	};

	const handleCardClick = (card) => {
		setSelectedCard(card);
	};

	const closeAllPopups = () => {
		setEditAvatarPopupOpen(false);
		setEditProfilePopupOpen(false);
		setAddPlacePopupOpen(false);
		setSelectedCard({ link: '', name: '' });
	};

	function handleCardLike(card) {
		// Проверяем, есть ли уже лайк на этой карточке
		const isLiked = card.likes.some((item) => item._id === currentUser._id);

		// Отправляем запрос в API и получаем обновлённые данные карточки
		api
			.changeLikeCardStatus(card._id, !isLiked)
			.then((newCard) => {
				setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function handleCardDelete(card) {
		api
			.deleteCard(card._id)
			.then(() => {
				setCards(cards.filter((c) => c._id !== card._id));
			})
			.catch((err) => {
				console.error(err);
			});
	}

	const handleUpdateUser = (data) => {
		api
			.updateUserInfo(data)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const handleUpdateAvatar = (data) => {
		api
			.updateUserAvatar(data)
			.then((res) => {
				setCurrentUser(res);
				closeAllPopups();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	const handleAddPlaceSubmit = (data) => {
		api
			.addNewCards(data)
			.then((newCard) => {
				setCards([ newCard, ...cards ]);
				closeAllPopups();
			})
			.catch((err) => {
				console.error(err);
			});
	};

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<div className="App root">
				<div className="page">
					<Header />
					<Main
						onEditAvatar={handleEditAvatarClick}
						onEditProfile={handleEditProfileClick}
						onAddPlace={handleAddPlaceClick}
						onCardClick={handleCardClick}
						onCardLike={handleCardLike}
						onCardDelete={handleCardDelete}
						cards={cards}
					/>
					<ImagePopup card={selectedCard} onClose={closeAllPopups} />
					<EditProfilePopup
						isOpen={isEditProfilePopupOpen}
						onClose={closeAllPopups}
						onUpdateUser={handleUpdateUser}
					/>
					<EditAvatarPopup
						isOpen={isEditAvatarPopupOpen}
						onClose={closeAllPopups}
						onUpdateAvatar={handleUpdateAvatar}
					/>
					<AddPlacePopup
						isOpen={isAddPlacePopupOpen}
						onClose={closeAllPopups}
						onAddPlace={handleAddPlaceSubmit}
					/>
					<Footer />
				</div>
			</div>
		</CurrentUserContext.Provider>
	);
}

export default App;
