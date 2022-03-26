import {useState} from 'react';
import {sortOptions} from '../../const';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeSortOption} from '../../store/actions';

function Sorting() {
  const sortType = useAppSelector((state) => state.sortType);
  const [sort, setSort] = useState(sortType);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => setIsOpen(!isOpen)}
      >
        {sort}
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
              className={`places__option ${option === sort ? 'places__option--active' : ''}`}
              tabIndex={0}
              key={option}
              onClick = {
                () => {
                  setSort(option);
                  setIsOpen(!isOpen);
                  dispatch(changeSortOption(option));
                }
              }
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
