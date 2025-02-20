import { getGifs } from '../helpers/getGifs'
import { useEffect, useState } from 'react'
export const useImages = (category) => {

  
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };
  const deleteCategory = (deleteCat) =>{
    setImages(images.filter(img => img.name === deleteCat))

  };

  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
    deleteCategory
  };
};
