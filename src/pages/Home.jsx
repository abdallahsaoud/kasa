import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import data from '../../public/data.json';
import './Home.scss';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    setProperties(data);
  }, []);

  return (
    <div className="home">
      <Banner text="Chez vous, partout et ailleurs" />
      <div className="card-container">
        {properties.map((property) => (
          <Card key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
