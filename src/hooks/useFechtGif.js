/** @format */

import { useState, useEffect } from 'react';
import { getGif } from '../helpers/getGifs';
export const useFetchGifs = categorie => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(categorie).then(imgs => setstate({ data: imgs, loading: false }));
  }, [categorie]);
  return state;
};
