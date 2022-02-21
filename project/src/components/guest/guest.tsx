import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function Guest(): JSX.Element {
  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to="#">
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        </Link>
      </li>
      <li className="header__nav-item">
        <Link className="header__nav-link" to={AppRoute.Login}>
          <span className="header__signout">Sign in</span>
        </Link>
      </li>
    </>
  );
}

export default Guest;
