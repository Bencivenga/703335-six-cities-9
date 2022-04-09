import {useAppSelector, useAppDispatch} from '../../hooks';
import {sendFavoriteOfferChangeAction} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../const';
import {useNavigate} from 'react-router-dom';
import {Offer} from '../../types/offers';
import {AddToFavoritesBtnOptions} from '../../types/add-to-favorite-btn';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

type AddToFavoritesBtnProps = {
  offer: Offer;
  options: AddToFavoritesBtnOptions;
};

function AddToFavoritesBtn({offer, options}: AddToFavoritesBtnProps): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();

  const handleAddToFavoritesBtnClick = () => {
    if (authorizationStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login, {replace: true});
    }

    dispatch(sendFavoriteOfferChangeAction({hotelId: offer.id, status: Number(!offer.isFavorite)}));
  };

  return (
    <button
      className={`${options.btnClass}__bookmark-button ${offer.isFavorite ? `${options.btnClass}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={handleAddToFavoritesBtnClick}
    >
      <svg
        className={`${options.btnClass}__bookmark-icon`}
        width={`${options.btnSize.width}`}
        height={`${options.btnSize.height}`}
      >
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default AddToFavoritesBtn;
