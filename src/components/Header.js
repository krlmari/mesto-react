import React from 'react';
import logo from '../logo.svg';

function Header() {
	return (
		<header className="header">
			<a href="#" class="header__href">
				<img src={logo} alt="Логотип проекта mesto" class="header__logo" />
			</a>
		</header>
	);
}

export default Header;
