import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <h1 className={css.title}>Login to your account</h1>
        <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
          <input
            className={css.inputLine}
            type="email"
            name="email"
            placeholder="Email"
          />

          <input
            className={css.inputLine}
            type="password"
            name="password"
            placeholder="Password"
          />

          <button className={css.button} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
