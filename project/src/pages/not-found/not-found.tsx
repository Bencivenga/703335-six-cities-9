import Logo from '../../components/logo/logo';
import HeaderAuth from '../../components/header-auth/header-auth';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
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

      <main className="page page--gray">
        <div className="container">
          <h1>404. Page not found</h1>
          <Link to={AppRoute.Main}>to main page</Link>
        </div>
      </main>
    </>
  );
}

export default NotFound;
