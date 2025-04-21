import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Bienvenido</h1>
        <input type="text" placeholder="Usuario" className="login-input" />
        <input type="password" placeholder="Contraseña" className="login-input" />
        <button className="login-button">Login</button>
        <p className="forgot-password">
          ¿Perdiste tu contraseña? <a href="#">No tienes cuenta? Regístrate</a>
        </p>
      </div>
      <button className="back-button">Volver</button>
    </div>
  );
};

export default Login;