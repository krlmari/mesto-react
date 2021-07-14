import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
	const currentUser = React.useContext(CurrentUserContext);

	function handleClick() {
		props.onCardClick(props.card);
	}

	function handleLikeClick() {
		props.onCardLike(props.card);
	}

	function handleDeleteClick() {
		props.onCardDelete(props.card);
	}

	// Определяем, являемся ли мы владельцем текущей карточки
	const isOwn = props.card.owner._id === currentUser._id;

	const cardDeleteButtonClassName = `elements__delete ${isOwn ? '.elements__delete_active' : ''}`;

	// Определяем, есть ли у карточки лайк, поставленный текущим пользователем
	const isLiked = props.card.likes.some((item) => item._id === currentUser._id);

	const cardLikeButtonClassName = `elements__like ${isLiked ? 'elements__like_active' : ''}`;

	return (
		<div className="elements__element" key={props.card._id}>
			<img
				src={`${props.card.link}`}
				alt="image"
				className="elements__image"
				onClick={handleClick}
			/>
			<button className={cardDeleteButtonClassName} onClick={handleDeleteClick} />
			<div className="elements__container">
				<p className="elements__name">{`${props.card.name}`}</p>
				<div>
					<div className={cardLikeButtonClassName} onClick={handleLikeClick} />
					<p className="elements__count-like">{`${props.card.likes.length}`}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
