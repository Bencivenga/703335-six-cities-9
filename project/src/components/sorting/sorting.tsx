import {useState} from 'react';
import {sortOptions, SortType} from '../../const';
import {Offer, Offers} from '../../types/offers';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeSortOption, fillCityOffers} from '../../store/actions';

const sortOffers = (value: SortType, offers: Offers) => {
  const offersToSort = [...offers];

  switch(value) {
    case SortType.HighPriceFirst:
      return offersToSort.sort((a:Offer, b:Offer) => (a.price > b.price ? -1 : 1));

    case SortType.LowPriceFirst:
      return offersToSort.sort((a:Offer, b:Offer) => (a.price > b.price ? 1 : -1));

    case SortType.TopRatedFirst:
      return offersToSort.sort((a:Offer, b:Offer) => (a.rating > b.rating ? -1 : 1));

    default:
      return offersToSort.sort((a:Offer, b:Offer) => (a.id > b.id ? 1 : -1));
  }
};


function Sorting() {
  const {sortType, offers} = useAppSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleOptionClick = (option: SortType) => {
    setIsOpen(!isOpen);
    dispatch(changeSortOption(option));
    dispatch(fillCityOffers(sortOffers(option, offers)));
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
