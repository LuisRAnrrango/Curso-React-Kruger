import PropTypes from "prop-types";

import React from "react";
//Recibe datos enviados como sped operator
export const Footer = ({ name, contact, email }) => {
  //export const Footer = ({footerInfo:{ name, contact, email }}) => {
  // const { name, contact, email } = props.footerInfo; //props con Destructuración
  return (
    <div className="footer-container">
      <h1 className="footer-text">Footer creado por {name}</h1>
      <p className="footer-text"> Mi contacto es:{contact}</p>
      <p className="footer-text"> Mi correo es:{email}</p>
    </div>
  );
};

Footer.propTypes = {
  name: PropTypes.string,
  contact: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  name: "Jeimily",
  contact: 593999999999,
  email: "default@correo.com",
};
