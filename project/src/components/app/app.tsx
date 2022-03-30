import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import Spinner from '../spinner/spinner';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Reviews} from '../../types/reviews';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import {store} from '../../store';
import {fetchOffersAction} from '../../store/api-actions';


type AppScreenProps = {
  reviews: Reviews;
};

store.dispatch(fetchOffersAction());

function App({reviews}: AppScreenProps): JSX.Element {

  const {isDataLoaded, offers} = useAppSelector((state) => state);

  if (!isDataLoaded) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<Main />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Room reviews={reviews} offers={offers} />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
