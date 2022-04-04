import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Cities from '../../components/cities/cities';
import CitiesEmpty from '../../components/cities-empty/cities-empty';
import {citiesList} from '../../const';
import {useAppSelector} from '../../hooks';


function Main(): JSX.Element {
  const {cityOffers} = useAppSelector((state) => state);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!cityOffers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={citiesList} />
        </div>
        {cityOffers.length > 0 ? <Cities /> : <CitiesEmpty />}
      </main>
    </div>
  );
}

export default Main;
