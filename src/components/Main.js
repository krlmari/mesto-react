import React from 'react';

function Main() {
	const handleEditAvatarClick = () => {
		const popup = document.querySelector('.popup__update-avatar-form');
		popup.classList.add('popup__opened');
		document.body.classList.add('body__overflow');
	};

	const handleEditProfileClick = () => {
		const popup = document.querySelector('.popup-profile');
		popup.classList.add('popup__opened');
		document.body.classList.add('body__overflow');
	};

	const handleAddPlaceClick = () => {
		const popup = document.querySelector('.popup-mesto');
		popup.classList.add('popup__opened');
		document.body.classList.add('body__overflow');
	};

	return (
		<main className="content">
			<section class="profile">
				<div class="profile__info">
					<div class="profile__container-avatar">
						<img
							src="<%=require('./images/profile__avatar.jpg')%>"
							alt="avatar"
							class="profile__avatar"
						/>
						<button class="profile__edit-avatar" onClick={handleEditAvatarClick}>
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
							<button class="profile__edit-button" onClick={handleEditProfileClick} />
						</div>
						<p class="profile__description">Исследователь океана</p>
					</div>
				</div>
				<button class="profile__add-button" onClick={handleAddPlaceClick} />
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
	);
}

export default Main;
