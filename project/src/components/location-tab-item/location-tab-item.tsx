import {Link} from 'react-router-dom';

type LocationTabItemProps = {
  city: string;
}

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
