import MainPage from '../main-page/main-page';

type AppScreenProps = {
  placeOffersCount: number;
};

function App({placeOffersCount}: AppScreenProps): JSX.Element {
  return <MainPage placeOffersCount={placeOffersCount}/>;
}

export default App;
