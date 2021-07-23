import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
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
    let { email, password } = userData;
    e.preventDefault();
    props.onRegister({ email, password }).catch((err) => console.log(err));
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Регистрация</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="auth__input"
          id="email-sign-up"
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleChange}
          value={userData.emali}
          required
        />
        <input
          className="auth__input"
          id="password-sign-up"
          name="password"
          type="email"
          placeholder="Password"
          onChange={handleChange}
          value={userData.password}
          required
        />
        <button className="auth__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="auth__sign-in">
        <p>Уже зарегистрированы? </p>
        <Link to="/sign-in">Войти</Link>
      </div>
    </section>
  );
}

export default Register;
