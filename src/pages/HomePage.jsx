import React from "react";
import { Welcome } from "./Welcome";

export const HomePage = () => {
  const info = {
    nombre: "Luis",
    apellido: "Anrrango",
    edad: 27,
  };
  return (
    <div>
      <div className="container-info">
        <h1>
          Hola mi nombre es: {info.nombre} y mi apellido es: {info["apellido"]}
        </h1>
        <h2>Tengo: {info.edad} años</h2>
      </div>
      <Welcome></Welcome>
    </div>
  );
};
