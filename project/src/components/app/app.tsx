import MainPage from '../main-page/main-page';

type AppScreenProps = {
  placeOffersCount: number;
  cities: string[];
};

function App({placeOffersCount, cities}: AppScreenProps): JSX.Element {
  return <MainPage placeOffersCount={placeOffersCount} cities={cities} />;
}

export default App;
