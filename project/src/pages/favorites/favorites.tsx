import Header from '../../components/header/header';
import FavoritesList from '../../components/favorites-to-places/favorites-to-places';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Spinner from '../../components/spinner/spinner';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function FavoritesPage(): JSX.Element {
  const {favoriteOffers, areFavoriteOffersLoaded} = useAppSelector(({FAVORITE_OFFERS}) => FAVORITE_OFFERS);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  if (!areFavoriteOffersLoaded) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ? <FavoritesList/> : <FavoritesEmpty/>}
        </div>
      </main>
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

export default FavoritesPage;
