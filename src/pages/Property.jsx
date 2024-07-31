import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Collapse from '../components/Collapse';
import data from '../../public/data.json';
import filledStar from '../assets/filled-star.svg';
import emptyStar from '../assets/empty-star.svg';
import './Property.scss';
import NotFound from './NotFound';

const Property = () => {
  const { id } = useParams();
  const property = data.find((item) => item.id === id);

  if (!property) {
    return <NotFound />;
  }

  return (
    <div className="property">
      <Gallery pictures={property.pictures} />
      <div className="property-info">
        <div className="info-left">
          <h1>{property.title}</h1>
          <p className="location">{property.location}</p>
          <div className="tags">
            {property.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="info-right">
          <div className="host">
            <p className="host-name">{property.host.name}</p>
            <img src={property.host.picture} alt={property.host.name} className="host-picture" />
          </div>
          <div className="rating">
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={index < property.rating ? filledStar : emptyStar}
                alt="star"
                className="star"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="property-details">
        <Collapse label="Description">
          <p>{property.description}</p>
        </Collapse>
        <Collapse label="Équipements">
          <ul>
            {property.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default Property;
