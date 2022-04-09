import HeaderAuth from '../header-auth/header-auth';
import Logo from '../logo/logo';
import {useAppSelector} from '../../hooks';
import {useLocation} from 'react-router-dom';
import {AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../store/user-process/selectors';


function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {location.pathname !== AppRoute.Login && <HeaderAuth authorizationStatus={authorizationStatus} />}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
