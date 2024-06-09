/* eslint-disable react/prop-types */

import sprite from '../../assets/sprite.svg';
import { Container, Icon } from './Categories.styled';

const Categories = ({ details }) => {
  const renderDetail = (key, value) => {
    const getIcon = (detailKey) => {
      switch (detailKey) {
        case 'airConditioner':
          return '#icon-air-cond';
        case 'bathroom':
          return '#icon-shower';
        case 'kitchen':
          return '#icon-Kitchen';
        case 'TV':
          return '#icon-TV';
        case 'CD':
          return '#icon-CD';
        case 'radio':
          return '#icon-radio';  
        case 'shower':
          return '#icon-shower';
        case 'toilet':
          return '#icon-toilet';
        case 'freezer':
          return '#icon-freezer';
        case 'hob':
          return '#icon-hob';
        case 'microwave':
          return '#icon-microwave';
        case 'beds':
          return '#icon-beds';
        case 'gas':
            return '#icon-gas';
        case 'water':
            return '#icon-water';
        default:
          return null;
      }
    };

    // Якщо кількість ліжок дорівнює 1, то використовуємо інший опис
    const description = key === 'beds' && value === 1 ? 'bed' : `${key}: ${value}`;

    return (
      <div key={key}>
        {getIcon(key) && (
          <Icon>
            <use width={20} height={20} xlinkHref={`${sprite}${getIcon(key)}`} />
          </Icon>
        )}
        <span>{description}</span>
      </div>
    );
  };

  return (
    <Container className="camper-details">
      {Object.entries(details).map(([key, value]) => renderDetail(key, value))}
    </Container>
  );
};

export default Categories;
{/* <Categories  details={camper.details} engine={camper.engine} transmission={camper.transmission} adults={camper.adults}/> */}