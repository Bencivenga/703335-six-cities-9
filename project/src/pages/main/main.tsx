import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Cities from '../../components/cities/cities';
import CitiesEmpty from '../../components/cities-empty/cities-empty';
import {useAppSelector} from '../../hooks';
import {getCityOffers} from '../../store/offer-process/selectors';


function Main(): JSX.Element {
  const cityOffers = useAppSelector(getCityOffers);

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${!cityOffers.length && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        {cityOffers.length > 0 ? <Cities /> : <CitiesEmpty />}
      </main>
    </div>
  );
}

export default Main;
