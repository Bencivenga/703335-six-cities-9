import Logo from '../../components/logo/logo';
import HeaderAuth from '../../components/header-auth/header-auth';
import {AuthorizationStatus, AppRoute} from '../../const';
import {Offers} from '../../types/offers';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {Link} from 'react-router-dom';

type FavoriteProps = {
  offers: Offers;
}


function Favorites({offers}: FavoriteProps): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <HeaderAuth authorizationStatus={AuthorizationStatus.NoAuth} />
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <FavoritesList offers={offers}/>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
