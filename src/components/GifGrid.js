import React, { useState, useEffect } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifs(category).then(setImages);
  // }, [category]);

  const { data, loading } = useFetchGifs(category);

  console.log(data);
  console.log(loading);

  return (
    <>
      <h3>{category}</h3>

      {loading ? "Cargando..." : "Carga Finalizada"}

      <div className="card-grid">
        {data.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
