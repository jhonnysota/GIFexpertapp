/** @format */

import React from 'react';
import { useFetchGifs } from '../hooks/useFechtGif';
import GrifGridItem from '../components/GrifGridItem';
const GifGrid = ({ categorie }) => {
  const { data: images, loading } = useFetchGifs(categorie);
  return (
    <>
      <h3 className='animate__animated animate__fadeInUp'>
        {categorie.toUpperCase()}
      </h3>
      {loading && (
        <div
          style={{
            textAlign: 'center',
            width: '100%',
          }}
        >
          <img
            style={{ width: '20%', height: '10%' }}
            src='https://media0.giphy.com/media/Q0MrhO9BUSxKR8RdZC/giphy.gif?cid=790b7611328848210ac55432016aa39ceb6464f3ac897345&rid=giphy.gif&ct=g'
            alt='Carga'
          />
          <p className='animate__animated animate__flash'>Cargando...</p>
        </div>
      )}
      {images.length === 0 ? (
        <h1 style={{ textAlign: 'center' }}>No hay Datos</h1>
      ) : (
        <div className='card-grid'>
          {images.map((item) => {
            return <GrifGridItem key={item.id} {...item} />;
          })}
        </div>
      )}
    </>
  );
};

export default GifGrid;
