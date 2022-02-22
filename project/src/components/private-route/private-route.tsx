import {Navigate} from 'react-router-dom';
import {PrivateRouteProps} from '../../types/private-route-props';
import {AppRoute, AuthorizationStatus} from '../../const';

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children, authorizationStatus} = props;

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
