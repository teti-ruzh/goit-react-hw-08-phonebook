import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

import css from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration Page</h1>

      <form onSubmit={handleSubmit} className={css.form} autoComplete="off">
        <label className={css.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={css.button} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
