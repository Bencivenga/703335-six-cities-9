import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCityAction} from '../../store/offer-process/offer-process';
import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {citiesList} from '../../const';

function CitiesList() {
  const selectedCity = useAppSelector(({OFFERS}) => OFFERS.activeCity);
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
                className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
                onClick={
                  (evt: MouseEvent) => {
                    evt.preventDefault();
                    dispatch(changeCityAction(city));
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
