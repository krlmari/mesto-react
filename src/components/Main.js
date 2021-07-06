import React from 'react';
import editAvatarImg from '../images/edit-avatar.png';
import api from '../utils/api';
import Card from './Card';

function Main(props) {
	const [ userName, setUserName ] = React.useState({ name: '' });
	const [ userDescription, setUserDescription ] = React.useState({ about: '' });
	const [ userAvatar, setUserAvatar ] = React.useState({ avatar: '' });
	const [ cards, setCards ] = React.useState([]);

	/* Взять из сервера карточки и ифнормацию о пользователе и добавить на страницу: */

	Promise.all([ api.getInitalCards(), api.getInitalInfo() ])
		.then(([ cards, info ]) => {
			setUserAvatar(info.avatar);
			setUserName(info.name);
			setUserDescription(info.about);
			setCards(cards);
		})
		.catch((err) => {
			console.error(err);
		});

	const onEditAvatar = () => {
		props.onEditAvatar(props.onClick);
	};

	const onEditProfile = () => {
		props.onEditProfile(props.onClick);
	};

	const onAddPlace = () => {
		props.onAddPlace(props.onClick);
	};

	return (
		<main className="content">
			<section class="profile">
				<div class="profile__info">
					<div class="profile__container-avatar">
						<img src={`${userAvatar}`} alt="avatar" class="profile__avatar" />
						<button class="profile__edit-avatar" onClick={onEditAvatar}>
							<img src={`${editAvatarImg}`} alt="avatar" class="profile__edit" />
						</button>
					</div>
					<div class="profile__text">
						<div class="profile__name-and-edit">
							<p class="profile__name">{`${userName}`}</p>
							<button class="profile__edit-button" onClick={onEditProfile} />
						</div>
						<p class="profile__description">{`${userDescription}`}</p>
					</div>
				</div>
				<button class="profile__add-button" onClick={onAddPlace} />
			</section>

			<section class="elements">
				{cards.map((card) => (
					<Card key={card._id} card={card} onCardClick={props.onCardClick} />
				))}
			</section>
		</main>
	);
}

export default Main;
