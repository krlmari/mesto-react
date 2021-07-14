class Api {
	constructor(options) {
		this._url = options.url;
		this._headers = options.headers;
	}

	_sendFetch(path, parameters) {
		return fetch(`${this._url}/${path}`, parameters).then((res) => {
			if (res.ok) {
				return res.json();
			}

			return Promise.reject(`Ошибка: ${res.status}`);
		});
	}

	getInitalCards() {
		return this._sendFetch(`cards`, { headers: this._headers });
	}

	getInitalInfo() {
		return this._sendFetch(`users/me`, { headers: this._headers });
	}

	addNewCards(newPost) {
		return this._sendFetch(`cards`, {
			method: 'POST',
			body: JSON.stringify({
				name: newPost.name,
				link: newPost.link
			}),
			headers: this._headers
		});
	}

	updateUserInfo(newUserInfo) {
		return this._sendFetch(`users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: newUserInfo.name,
				about: newUserInfo.about
			})
		});
	}

	deleteCard(id) {
		return this._sendFetch(`cards/${id}`, {
			method: 'DELETE',
			headers: this._headers
		});
	}

	updateUserAvatar(newUserAvatar) {
		return this._sendFetch(`users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: newUserAvatar.avatar
			})
		});
	}

	putLike(id) {
		return this._sendFetch(`cards/likes/${id}`, {
			method: 'PUT',
			headers: this._headers
		});
	}

	deleteLike(id) {
		return this._sendFetch(`cards/likes/${id}`, {
			method: 'DELETE',
			headers: this._headers
		});
	}

	changeLikeCardStatus(id, isLiked) {
		return this._sendFetch(`cards/likes/${id}`, {
			method: isLiked ? 'PUT' : 'DELETE',
			headers: this._headers
		});
	}
}

const api = new Api({
	url: 'https://mesto.nomoreparties.co/v1/cohort-24',
	headers: {
		authorization: 'c558bd5f-4e93-49b8-aac0-8d2bbc7fb72d',
		'Content-Type': 'application/json'
	}
});

export default api;
