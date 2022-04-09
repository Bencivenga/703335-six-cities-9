import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCityAction, loadOffersAction} from '../../store/offer-process/offer-process';
import {changeSortOptionAction} from '../../store/change-sort-option-process/change-sort-option-process';
import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {citiesList, SortType} from '../../const';
import {getActiveCity} from '../../store/offer-process/selectors';
import {getOffers} from '../../store/offer-process/selectors';
import {sortOffers} from '../../utils';

function CitiesList() {
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          citiesList.map((city) => (
            <li
              className="locations__item"
              key={city}
            >
              <Link
                className={`locations__item-link tabs__item ${city === activeCity ? 'tabs__item--active' : ''}`}
                onClick={
                  (evt: MouseEvent) => {
                    evt.preventDefault();
                    dispatch(changeCityAction(city));
                    dispatch(changeSortOptionAction(SortType.Popular));
                    dispatch(loadOffersAction(sortOffers(SortType.Popular, offers)));
                  }
                }
                to="#"
              >
                <span>{city}</span>
              </Link>

            </li>
          ))
        }
      </ul>
    </section>
  );
}

export default CitiesList;
