
import User from '../user/user';
import Guest from '../guest/guest';
import {AuthorizationStatus} from '../../const';
import {HeaderAuthProps} from '../../types/header-auth-props';


function HeaderAuth({authorizationStatus}: HeaderAuthProps ): JSX.Element {
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <User />;
  } else {
    return <Guest />;
  }
}

export default HeaderAuth;
