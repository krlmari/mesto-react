import React from 'react';

function Card(props) {
	function handleClick() {
		props.onCardClick(props.card);
	}

	return (
		<div className="elements__element" key={props.card._id}>
			<img
				src={`${props.card.link}`}
				alt="image"
				className="elements__image"
				onClick={handleClick}
			/>
			<button className="elements__delete" />
			<div className="elements__container">
				<p className="elements__name">{`${props.card.name}`}</p>
				<div>
					<div className="elements__like" />
					<p className="elements__count-like">{`${props.card.likes.length}`}</p>
				</div>
			</div>
		</div>
	);
}

export default Card;
