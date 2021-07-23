import React from "react";

function Login(props) {
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
    props.onLogin({ email, password }).catch((err) => console.log(err));
  };

  return (
    <section className="auth">
      <h2 className="auth__title">Войти</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <input
          className="form__input auth__input"
          id="email-sign-in"
          name="email"
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          required
        />
        <input
          className="form__input auth__input"
          id="password-sign-in"
          name="password"
          type="text"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          required
        />
        <button className="form__save-button auth__button" type="submit">
          Войти
        </button>
      </form>
    </section>
  );
}

export default Login;
