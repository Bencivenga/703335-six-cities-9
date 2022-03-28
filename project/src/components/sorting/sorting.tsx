import {useState} from 'react';
import {sortOptions, SortType} from '../../const';
import {Offer} from '../../types/offers';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeSortOption, fillCityOffers} from '../../store/actions';


function Sorting() {
  const {sortType, offers} = useAppSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const sortOffers = (value: string) => {
    const offersToSort = [...offers];

    switch(value) {
      case SortType.Popular:
        return offersToSort;

      case SortType.HighPriceFirst:
        offersToSort.sort((a:Offer, b:Offer) => (a.price > b.price ? -1 : 1));
        break;

      case SortType.LowPriceFirst:
        offersToSort.sort((a:Offer, b:Offer) => (a.price > b.price ? 1 : -1));
        break;

      case SortType.TopRatedFirst:
        offersToSort.sort((a:Offer, b:Offer) => (a.rating > b.rating ? -1 : 1));
        break;

      default:
        return offersToSort;
    }

    dispatch(fillCityOffers(offersToSort));
  };

  const handleOptionClick = (option: SortType) => {
    setIsOpen(!isOpen);
    dispatch(changeSortOption(option));
    sortOffers(option);
  };

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}
      >
        {
          sortOptions.map((option) => (
            <li
              className={`places__option ${option === sortType ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={option}
              onClick = {() => {handleOptionClick(option);}}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default Sorting;
