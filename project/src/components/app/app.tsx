import {Route, Routes} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import Spinner from '../spinner/spinner';
import {AppRoute} from '../../const';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Main from '../../pages/main/main';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import {isCheckedAuth} from '../../utils';

function App(): JSX.Element {

  const {authorizationStatus} = useAppSelector(({USER}) => USER);
  const {isDataLoaded} = useAppSelector(({OFFERS}) => OFFERS);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <Spinner />;
  }

  return (
    <HistoryRouter history={browserHistory}>
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
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Room />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
