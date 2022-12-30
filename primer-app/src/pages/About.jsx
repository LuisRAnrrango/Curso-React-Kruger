import React from "react";
import { Vaca } from "../components/Vaca";

export const About = () => {
  const vacaLola = {
    name: "vacaLola",
    descripcion: "Tiene Cabezas y tiene Cola",
    tieneHijo: "si",
    image: "https://i.ytimg.com/vi/0dkHZYeIGIk/maxresdefault.jpg",
  };
  return (
    <div>
      <Vaca {...vacaLola}></Vaca>
    
    </div>
  );
};
