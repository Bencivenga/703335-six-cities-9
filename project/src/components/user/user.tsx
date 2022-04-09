import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {getUserData} from '../../store/user-process/selectors';

function User(): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = useAppSelector(getUserData);

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
            {userData && <img src={userData.avatarUrl} alt={userData.name} style={{borderRadius: '50%'}}/>}
          </div>
          <span className="header__user-name user__name">
            {userData ? userData.name : 'Oliver.conner@gmail.com'}
          </span>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link
          className="header__nav-link"
          to={AppRoute.Main}
          onClick={(evt) =>{
            evt.preventDefault();
            dispatch(logoutAction());
          }}
        >
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
}

export default User;
