import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetch = ({ category,cant }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category,cant);
    setImages(newImages);
    setIsLoading(false);
  };
  useEffect(() => {
    getImages(category);
  }, []);

  return {
    images,
    isLoading,
  };
};
