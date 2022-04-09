import Header from '../../components/header/header';
import FavoritesToPlaces from '../../components/favorites-to-places/favorites-to-places';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import Spinner from '../../components/spinner/spinner';
import {fetchFavoriteOffersAction} from '../../store/api-actions';
import {getFavoriteOffers, getDataLoaded} from '../../store/favorite-offers-process/selectors';
import {changeDataLoaded} from '../../store/favorite-offers-process/favorite-offers-process';
import {AppRoute} from '../../const';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {Link} from 'react-router-dom';
import {useEffect} from 'react';

function FavoritesPage(): JSX.Element {
  const favoriteOffers= useAppSelector(getFavoriteOffers);
  const isDataLoaded = useAppSelector(getDataLoaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeDataLoaded(false));
    dispatch(fetchFavoriteOffersAction());
  }, [dispatch]);

  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteOffers.length > 0 ? <FavoritesToPlaces/> : <FavoritesEmpty/>}
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
