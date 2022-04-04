import {useState} from 'react';
import {sortOptions, SortType} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeSortOptionAction} from '../../store/change-sort-option-process/change-sort-option-process';
import {getCityOffersAction} from '../../store/offer-process/offer-process';
import {sortOffers} from '../../utils';
import {useCallback, memo} from 'react';


function Sorting() {
  const {sortType} = useAppSelector(({SORTING}) => SORTING);
  const {offers} = useAppSelector(({OFFERS}) => OFFERS);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleOptionClick = useCallback(
    (option: SortType) => {
      setIsOpen(!isOpen);
      dispatch(changeSortOptionAction(option));
      dispatch(getCityOffersAction(sortOffers(option, offers)));
    }, [dispatch, isOpen, offers],
  );

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

export default memo(Sorting);
