import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const receivedImages = await getGifs(category);
    setImages(receivedImages);
    setIsLoading(false);
  };

  // Execute once at render.
  useEffect(() => {
    getImages();
  }, []);

  return {
    // images: images,
    images,
    // isLoading: isLoading,
    isLoading,
  };
};
