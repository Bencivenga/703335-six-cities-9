import {LocationTabItemProps} from '../../types/location-tab-item-props';
import {Link} from 'react-router-dom';

function LocationTabItem({city}: LocationTabItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <Link className="locations__item-link tabs__item" to="#">
        <span>{city}</span>
      </Link>
    </li>
  );
}

export default LocationTabItem;
