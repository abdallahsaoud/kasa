import React from 'react';
import './About.scss';
import BannerImage from '../assets/banner.jpg'; // Assurez-vous que l'image du banner est bien placée dans le dossier assets
import Collapse from '../components/Collapse'; // Assurez-vous que Collapse est dans le bon chemin

const About = () => {
  return (
    <div className="about">
      <div className="banner">
        <img src={BannerImage} alt="Banner" />
      </div>
      <div className="collapses">
        <Collapse label="Fiabilité">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipe.</p>
        </Collapse>
        <Collapse label="Respect">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse label="Service">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse label="Sécurité">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </div>
    </div>
  );
};

export default About;
