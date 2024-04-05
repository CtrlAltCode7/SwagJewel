// import "./styles.css";
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function openModal(i) {
  alert(`Clicked ${i}`);
}

export function ImageSlider() {
  const items = [
    { id: 1, title: 'Title 1', description: 'Description 1' },
    { id: 2, title: 'Title 2', description: 'Description 2' },
    { id: 3, title: 'Title 3', description: 'Description 3' },
    { id: 4, title: 'Title 4', description: 'Description 4' },
    { id: 5, title: 'Title 5', description: 'Description 5' },
    { id: 6, title: 'Title 6', description: 'Description 6' },
    { id: 7, title: 'Title 7', description: 'Description 7' },
    { id: 8, title: 'Title 8', description: 'Description 8' },
  ].map((item) => (
    <Tile key={item.id} item={item} onClick={() => openModal(item.id)} />
  ));

  return (
    <div style={{
        width: `calc(90vw - 200px)`,
        // width: "90%",
        padding: "3rem"
    }}>
      <AliceCarousel
        items={items}
        infinite
        animationDuration={200}
        autoWidth
        mouseTracking items={items}
        touchTracking
        innerWidth={"100vw"}
      />
    </div>
  );
}

const TileStyles = {
  display: 'inline-block',
  width: 200,
  height: 200,
  border: '2px solid red',
  background: 'teal',
};

function Tile({ item, onClick }) {
  return (
    <div
      style={{ ...TileStyles, textAlign: 'center' }}
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <img
        src={`https://via.placeholder.com/150?text=${item.title}`}
        alt={item.title}
      />
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  );
}
