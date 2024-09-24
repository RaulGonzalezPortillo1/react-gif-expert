import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ images, isLoading });

  return (
    <>
      <h3>{category}</h3>
      {/* Solamente muestra el mensaje de carga cuando isLoading sea verdadero. */}
      {isLoading && <p>Cargando...</p>}
      <div className="card-grid">
        {/* El paréntesis de esta función flecha es el retorno */}
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
