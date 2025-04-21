import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto-section">
      <h2>Contactános</h2>
      <div className="contacto-container">
        <div className="contacto-card">
          <h3>Habla con un integrante de nuestro equipo de ventas</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="contacto-btn">Contactar con ventas</button>
        </div>
        <div className="contacto-card">
          <h3>Soporte de la cuenta y de la producción</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
          <button className="contacto-btn">Ir al centro de ayuda</button>
        </div>
      </div>
    </section>
  );
};

export default Contacto;