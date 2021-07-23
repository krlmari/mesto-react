import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="#" className="header__href">
        <img src={logo} alt="Логотип проекта mesto" className="header__logo" />
      </a>
      <BrowserRouter>
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
          <Link to="/sign-in" className="header__sign-in">
            Выйти
          </Link>
        </Route>
      </BrowserRouter>
    </header>
  );
}

export default Header;
