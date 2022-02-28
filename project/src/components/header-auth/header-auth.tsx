
import User from '../user/user';
import Guest from '../guest/guest';
import {AuthorizationStatus} from '../../const';

type HeaderAuthProps = {
  authorizationStatus: AuthorizationStatus;
};

function HeaderAuth({authorizationStatus}: HeaderAuthProps ): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <User />;
  }

  return <Guest />;
}

export default HeaderAuth;
