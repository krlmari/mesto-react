import React from "react";
import { Route, Link } from "react-router-dom";
import logo from "../logo.svg";

function Header({ getUserEmail, onSignOut }) {
  return (
    <header className="header">
      <a href="#" className="header__href">
        <img src={logo} alt="Логотип проекта mesto" className="header__logo" />
      </a>

      <Route path="/sign-up">
        <Link to="/sign-in" className="header__sign-in">
          Войти
        </Link>
      </Route>
      <Route path="/sign-in">
        <Link to="/sign-up" className="header__sign-in">
          Регистрация
        </Link>
      </Route>
      <Route exact path="/">
        <div className="header__email-sign">
          <p className="header__email">{getUserEmail}</p>
          <Link to="/sign-in" className="header__sign-in" onClick={onSignOut}>
            Выйти
          </Link>
        </div>
      </Route>
    </header>
  );
}

export default Header;
