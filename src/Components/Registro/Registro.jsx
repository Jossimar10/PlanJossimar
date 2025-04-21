import React from 'react';
import './Registro.css';

const Registro = () => {
  return (
    <div className="registro-container">
      <div className="registro-box">
        <h1>REGISTRARSE</h1>
        <p>Crea tu cuenta. Es gratis y solo toma un minuto.</p>
        <div className="input-group">
          <input type="text" placeholder="NOMBRE" className="registro-input" />
          <input type="text" placeholder="APELLIDO" className="registro-input" />
        </div>
        <input type="email" placeholder="CORREO ELECTRÓNICO" className="registro-input" />
        <input type="password" placeholder="CONTRASEÑA" className="registro-input" />
        <input type="password" placeholder="CONFIRMAR CONTRASEÑA" className="registro-input" />
        <label className="terms-checkbox">
          <input type="checkbox" />
          Acepto los <a href="#">Términos de Uso y Política de Privacidad.</a>
        </label>
        <button className="register-button">REGISTRARSE AHORA</button>
      </div>
    </div>
  );
};

export default Registro;