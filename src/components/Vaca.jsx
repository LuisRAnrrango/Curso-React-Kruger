import PropTypes from "prop-types";
import React from "react";

export const Vaca = ({ name, descripcion, tieneHijo, image }) => {
  //Otra forma de enviar los props
  // const { name, descripcion, tieneHijo, image } = props.vacaLola; TUVE PROBLEMAS CON ESTAS OPCIONES
  //{vacaLola:{ name, descripcion, tieneHijo, image }}

  return (
    <div className="tarjeta">
      <div className="titulo">
        <strong>Nombre:</strong> {name}
      </div>
      <div className="cuerpo">
        <img className="imgv" src={image} alt="muestra"></img>
        <p>
          <strong>Descripción:</strong> {descripcion}
        </p>
        <p>
          <strong>Tiene Hijo:</strong>
          {tieneHijo}
        </p>
      </div>
      <div className="pie">
        <p href="#">Más información</p>
      </div>
    </div>
  );
};

Vaca.propTypes = {
  name: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  tieneHijo: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

Vaca.defaultProps = {
  name: "Vaca Lolita",
  descripcion: "Es una Vaca Lechera",
  tieneHijo: "No",
  image: "https://i.ytimg.com/vi/z3Ff7ABA_5Y/maxresdefault.jpg",
};
