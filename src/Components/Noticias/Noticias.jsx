import './Noticias.css';

const Noticias = () => {
  return (
    <section className="noticias-section">
      <div className="noticias-header">
        <h2>Un buen negocio</h2>
        <p>En el blog square negocios cultivadores</p>
      </div>
      <div className="noticias-container">
        <div className="noticias-card">
          <div className="noticias-image"></div>
          <div className="noticias-content">
            <span className="noticias-author">Ashley • 1 min</span>
            <h3>Las 5 cualidades de todo acuerdo de proyecto exitoso</h3>
            <div className="noticias-icons">
            </div>
          </div>
        </div>
        <div className="noticias-card">
          <div className="noticias-image"></div>
          <div className="noticias-content">
            <span className="noticias-author">Ashley • 1 min</span>
            <h3>Cómo atraer a los inversores que apoyen tu visión</h3>
            <div className="noticias-icons">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Noticias;