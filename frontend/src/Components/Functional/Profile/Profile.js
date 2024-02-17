import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App/App";
import "./Profile.css";

export default function Profile() {
  const { isAccount, toggleAccount, handleRegistration, handleLogin } =
    useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="forms">
      {isAccount ? (
        <form className="profile-register" onSubmit={handleSubmit(handleRegistration)}>
          <h2 className="register-name">Реєстрація</h2>
          <input
            className="reg-name"
            placeholder="Введіть своє ім'я"
            {...register("firstName", { required: true })}
            type="text"
          />
          {errors.firstName && <p>Ім'я обов'язкове</p>}
          <input
            className="reg-number"
            placeholder="Введіть номер телефону"
            {...register("number", { required: true, pattern: /^[0-9\b]+$/ })}
            type="tel"
          />
          {errors.number && <p>Недійсний номер телефону</p>}
          <input
            className="reg-password"
            placeholder="Придумайте пароль"
            {...register("password", { required: true, minLength: 6 })}
            type="password"
          />
          {errors.password && <p>Пароль повинен бути принаймні 6 символів</p>}
          <div className="profile-btn-reg">
            <button className="btn-reg">Реєстрація</button>
          </div>
          <div className="profile-btn-log">
            <button className="btn-log" onClick={toggleAccount}>
              Увійти
            </button>
          </div>
        </form>
      ) : (
        <form className="profile-login" onSubmit={handleSubmit(handleLogin)}>
          <h2 className="login-name">Увійти</h2>
          <input
            className="log-number"
            placeholder="Введіть номер телефону"
            {...register("number", { required: true, pattern: /^[0-9\b]+$/ })}
            type="tel"
          />
          {errors.number && <p>Недійсний номер телефону</p>}
          <input
            className="log-password"
            placeholder="Введіть пароль"
            {...register("password", { required: true })}
            type="password"
          />
          {errors.password && <p>Пароль обов'язковий</p>}
          <div className="profile-btn-log">
            <Link to="/user" className="btn-log log-user" onClick={toggleAccount}>
              Увійти
            </Link>
          </div>
        </form>
      )}
    </div>
  );
}