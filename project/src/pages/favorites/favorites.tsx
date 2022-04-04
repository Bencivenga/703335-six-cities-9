import Header from '../../components/header/header';
import {AppRoute} from '../../const';
import {Offers} from '../../types/offers';
import FavoritesList from '../../components/favorites-list/favorites-list';
import {Link} from 'react-router-dom';

type FavoriteProps = {
  offers: Offers;
}


function Favorites({offers}: FavoriteProps): JSX.Element {
  return (
    <div className="page">
      <Header />
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
