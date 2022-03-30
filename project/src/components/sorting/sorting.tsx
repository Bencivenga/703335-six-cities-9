import {useState} from 'react';
import {sortOptions, SortType} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeSortOptionAction, getCityOffersAction} from '../../store/actions';
import {sortOffers} from '../../utils';


function Sorting() {
  const {sortType, offers} = useAppSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleOptionClick = (option: SortType) => {
    setIsOpen(!isOpen);
    dispatch(changeSortOptionAction(option));
    dispatch(getCityOffersAction(sortOffers(option, offers)));
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
