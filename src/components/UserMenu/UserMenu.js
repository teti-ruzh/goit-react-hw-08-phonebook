import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { selectUsername } from '../../redux/auth/authSelectors';
// import defaultAvatar from './default-avatar.png';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  //   const avatar = defaultAvatar;

  return (
    <div className={css.wrapper}>
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} /> */}
      <p className={css.username}>Wellcome, {name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
