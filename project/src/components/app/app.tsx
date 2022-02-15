import MainPage from '../main-page/main-page';

const city = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

type AppScreenProps = {
  placeOffersCount: number;
  cities: typeof city;
};

function App({placeOffersCount, cities}: AppScreenProps): JSX.Element {
  return <MainPage placeOffersCount={placeOffersCount} cities={cities} />;
}

export default App;
