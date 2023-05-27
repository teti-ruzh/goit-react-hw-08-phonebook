import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';

import css from './Register.module.css';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <div className={css.content}>
        <h1 className={css.title}>Sign up for an account</h1>

        <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
          <input
            type="text"
            name="name"
            className={css.inputLine}
            placeholder="Name"
          />

          <input
            type="email"
            name="email"
            className={css.inputLine}
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            className={css.inputLine}
            placeholder="Password"
          />

          <button className={css.button} type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
