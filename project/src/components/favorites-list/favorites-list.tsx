import FavoriteCard from '../favorite-card/favorite-card';
import {Offers} from '../../types/offers';

type PlacesFavoritesListProps = {
  favoriteOffers: Offers,
}

function FavoritesList({favoriteOffers}:PlacesFavoritesListProps): JSX.Element {
  return (
    <>
      {favoriteOffers.map((offer) => <FavoriteCard key={offer.id} offer={offer} />)}
    </>
  );
}
export default FavoritesList;
