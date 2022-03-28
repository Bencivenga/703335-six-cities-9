import {useAppDispatch, useAppSelector} from '../../hooks';
import {changeCity} from '../../store/actions';
import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import {citiesList} from '../../const';

type CityProps = {
  cities: typeof citiesList;
};

function CitiesList({cities}: CityProps) {
  const selectedCity = useAppSelector((state) => state.activeCity);
  const dispatch = useAppDispatch();

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          cities.map((city) => (
            <li
              className="locations__item"
              key={city}
            >
              <Link
                className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
                onClick={
                  (evt: MouseEvent) => {
                    evt.preventDefault();
                    dispatch(changeCity(city));
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
