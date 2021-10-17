/** @format */

import React from 'react';

function GrifGridItem({ title, id, url }) {
  return (
    <div className='cards animate__animated animate__bounce'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default GrifGridItem;
