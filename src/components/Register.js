import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [userData, setUserData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(userData);
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="form__input auth__input"
          id="email-sign-up"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={userData.emali}
          required
        />
        <input
          className="form__input auth__input"
          id="password-sign-up"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={userData.password}
          required
        />
        <button className="form__save-button auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="auth__sign-in">
        <p>Уже зарегистрированы?&nbsp;</p>
        <Link to="/sign-in" className="auth__in">
          Войти
        </Link>
      </div>
    </section>
  );
}

export default Register;
