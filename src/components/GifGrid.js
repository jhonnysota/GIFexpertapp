/** @format */

import React from 'react';
import { useFetchGifs } from '../hooks/useFechtGif';
import GrifGridItem from '../components/GrifGridItem';
const GifGrid = ({ categorie }) => {
  const { data: images, loading } = useFetchGifs(categorie);
  return (
    <>
      <h3>{categorie}</h3>
      {loading && (
        <p className='animate__animated animate__flash'>Cargando...</p>
      )}
      <div className='card-grid'>
        {images.map(item => {
          return <GrifGridItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
