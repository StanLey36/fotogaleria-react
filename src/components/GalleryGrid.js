import React, { useState } from 'react';
import Card from './Card';
import './GalleryGrid.css';
import CreateItemCard from './CreateItemCard';

function GalleryGrid() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categories, setCategories] = useState([
    {
      id: 1,
      image: '/img/pexels-pixabay-221502.jpg',
      title: 'Príroda',
    },
    {
      id: 2,
      image: '/img/pexels-gdtography-911738.jpg',
      title: 'Architektúra',
    },
    {
      id: 3,
      image: '/img/pexels-mehmet-turgut-kirkgoz-18748814.jpg',
      title: 'Ľudia',
    },
    {
      id: 4,
      image: '/img/pexels-foodie-factor-566566.jpg',
      title: 'Jedlo',
    },
    {
      id: 5,
      image: '/img/pexels-anni-roenkae-3109807.jpg',
      title: 'Abstraktné',
    },
  ]);

  const handleOverlayDisplay = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  const handleSubmit = () => {
    if (categoryName !== '') {
      setShowOverlay(false);
      const newCategory = {
        id: categories.length + 1,
        image: '/img/pexels-city.jpg',
        title: categoryName,
      };
      setCategories([...categories, newCategory]);
      setCategoryName('');
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="create-info">
          <h1>Fotogaléria</h1>
          <p id="link-or-title">Kategórie</p>
        </div>
        <div className="grid-container">
          {categories.map((category) => (
            <Card myimage={category.image} mytitle={category.title} key={category.id} />
          ))}
          <CreateItemCard onClick={handleOverlayDisplay} />
        </div>
      </div>
      <div id="overlay" style={{ display: showOverlay ? 'block' : 'none' }}>
        <div className="card-l-design-width">
          <div className="form">
            <div className="title">
              <h3>Pridať kategóriu</h3>
              <p className="closeOverlay" style={{cursor:"pointer"}} onClick={handleCloseOverlay}>
                X
              </p>
            </div>
            <label className="input">
              <input
                className="input__field"
                id="categoryName"
                type="text"
                placeholder=" "
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
              <span className="input__label">Názov kategórie</span>
            </label>
            <button id="submitButton" type="submit" onClick={handleSubmit}>
              Pridať
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryGrid;