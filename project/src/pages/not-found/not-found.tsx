import Header from '../../components/header/header';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <>
      <Header />
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
