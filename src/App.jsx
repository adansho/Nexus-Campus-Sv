export default function App() {
  return (
    <>
      <nav>
        <b>NEXUS CYBER SV</b>
        <div>
          <a href="#servicios">Servicios</a>
          <a href="#consolas">Consolas</a>
          <a href="#clientes">Estudiantes</a>
          <a href="#visitanos">Visítanos</a>
        </div>
      </nav>

      <header className="hero">
        <h1>
          Estudia. Imprime.
          <br />
          Listo.
        </h1>
        <p>Computadoras, internet de fibra e impresión a precios pensados para estudiantes de San Salvador.</p>
        <div className="btns">
          <a className="btn" href="#servicios">Ver servicios</a>
          <a className="btn ghost" href="#visitanos">Cómo llegar</a>
        </div>
        <svg viewBox="0 0 760 380" role="img" aria-label="Computadora con una tarea abierta">
          <defs>
            <linearGradient id="s" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#2997ff" />
              <stop offset="1" stopColor="#5e5ce6" />
            </linearGradient>
            <linearGradient id="st" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3a3a3c" />
              <stop offset="1" stopColor="#1c1c1e" />
            </linearGradient>
          </defs>
          <rect x="110" y="20" width="540" height="330" rx="26" fill="#1c1c1e" stroke="#3a3a3c" strokeWidth="3" />
          <rect x="128" y="38" width="504" height="294" rx="14" fill="url(#s)" />
          <rect x="170" y="78" width="250" height="230" rx="10" fill="#fff" opacity=".96" />
          <rect x="192" y="104" width="120" height="12" rx="6" fill="#1d1d1f" />
          <rect x="192" y="132" width="206" height="8" rx="4" fill="#d2d2d7" />
          <rect x="192" y="152" width="190" height="8" rx="4" fill="#d2d2d7" />
          <rect x="192" y="172" width="206" height="8" rx="4" fill="#d2d2d7" />
          <rect x="192" y="192" width="150" height="8" rx="4" fill="#d2d2d7" />
          <rect x="192" y="226" width="206" height="60" rx="8" fill="#f5f5f7" />
          <rect x="450" y="78" width="150" height="104" rx="10" fill="#fff" opacity=".22" />
          <rect x="450" y="196" width="150" height="112" rx="10" fill="#fff" opacity=".14" />
          <path d="M300 350h160l30 30H270z" fill="url(#st)" />
        </svg>
      </header>

      <section id="servicios">
        <div className="wrap">
          <h2>Todo lo que necesitas para entregar a tiempo.</h2>
          <p className="lead">Un espacio limpio, fresco y ordenado, con lo justo para estudiar o hacer trámites rápidos.</p>
          <div className="grid">
            <div className="tile">
              <h3>6 a 8 computadoras</h3>
              <p>Con potencia para Word, Excel, navegar, descargar PDF y conectarte a tus clases virtuales.</p>
              <svg viewBox="0 0 340 190" aria-hidden="true">
                <rect x="60" y="20" width="220" height="140" rx="14" fill="#1d1d1f" />
                <rect x="70" y="30" width="200" height="120" rx="6" fill="#0071e3" />
                <rect x="88" y="52" width="90" height="8" rx="4" fill="#fff" />
                <rect x="88" y="72" width="140" height="6" rx="3" fill="#fff" opacity=".6" />
                <rect x="88" y="88" width="120" height="6" rx="3" fill="#fff" opacity=".6" />
                <path d="M140 160h60l14 30H126z" fill="#86868b" />
              </svg>
            </div>

            <div className="tile">
              <h3>Impresión y fotocopias</h3>
              <p>En negro y color, con escáner incluido. Lo más buscado antes de entrar a clase, a precios bajos.</p>
              <svg viewBox="0 0 340 190" aria-hidden="true">
                <rect x="100" y="10" width="140" height="80" rx="6" fill="#fff" stroke="#d2d2d7" strokeWidth="2" />
                <rect x="118" y="30" width="80" height="6" rx="3" fill="#d2d2d7" />
                <rect x="118" y="46" width="100" height="6" rx="3" fill="#d2d2d7" />
                <rect x="40" y="80" width="260" height="110" rx="20" fill="#1d1d1f" />
                <rect x="70" y="112" width="200" height="8" rx="4" fill="#48484a" />
                <circle cx="265" cy="146" r="7" fill="#30d158" />
                <rect x="90" y="150" width="160" height="40" rx="6" fill="#fff" />
              </svg>
            </div>

            <div className="tile">
              <h3>Internet de fibra óptica</h3>
              <p>Conexión estable que no se pone lenta, aunque todas las máquinas estén en uso.</p>
              <svg viewBox="0 0 340 190" aria-hidden="true">
                <g fill="none" stroke="#0071e3" strokeWidth="16" strokeLinecap="round">
                  <path d="M50 90a170 170 0 0 1 240 0" />
                  <path d="M92 128a110 110 0 0 1 156 0" />
                  <path d="M134 164a50 50 0 0 1 72 0" />
                </g>
              </svg>
            </div>

            <div className="tile">
              <h3>Abierto hasta la noche</h3>
              <p>Cuando se juntan las entregas y los parciales, aquí sigues teniendo dónde trabajar.</p>
              <svg viewBox="0 0 340 190" aria-hidden="true">
                <circle cx="170" cy="190" r="140" fill="#1d1d1f" />
                <circle cx="250" cy="70" r="26" fill="#f5f5f7" />
                <circle cx="262" cy="62" r="24" fill="#1d1d1f" />
                <g fill="#f5f5f7">
                  <circle cx="70" cy="60" r="3" />
                  <circle cx="120" cy="30" r="2" />
                  <circle cx="170" cy="70" r="3" />
                  <circle cx="210" cy="28" r="2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section id="consolas" className="loc">
        <div className="wrap">
          <h2>Entrega. Y luego juega.</h2>
          <p>Zona de consolas para desconectarte un rato después de clases, con tus amigos y a precio de estudiante.</p>
          <svg viewBox="0 0 420 240" role="img" aria-label="Control de consola">
            <path d="M110 40h200c50 0 80 40 90 110l8 50c4 24-30 36-46 16l-46-52H124l-46 52c-16 20-50 8-46-16l8-50C30 80 60 40 110 40z" fill="#1d1d1f" stroke="#3a3a3c" strokeWidth="3" />
            <rect x="96" y="80" width="16" height="48" rx="4" fill="#f5f5f7" />
            <rect x="80" y="96" width="48" height="16" rx="4" fill="#f5f5f7" />
            <circle cx="316" cy="78" r="10" fill="#2997ff" />
            <circle cx="346" cy="104" r="10" fill="#ff453a" />
            <circle cx="316" cy="130" r="10" fill="#30d158" />
            <circle cx="286" cy="104" r="10" fill="#ffd60a" />
            <circle cx="168" cy="150" r="18" fill="#2c2c2e" stroke="#48484a" strokeWidth="3" />
            <circle cx="252" cy="150" r="18" fill="#2c2c2e" stroke="#48484a" strokeWidth="3" />
          </svg>
        </div>
      </section>

      <section id="clientes" className="alt">
        <div className="wrap">
          <h2>Hecho para quienes estudian.</h2>
          <p className="lead">Universitarios, bachilleres y vecinos que necesitan resolver algo en línea.</p>
          <div className="chips">
            <span>UES</span>
            <span>UTEC</span>
            <span>UFG</span>
            <span>UNAB</span>
            <span>USAM</span>
            <span>Bachillerato</span>
            <span>Vecindario</span>
          </div>
          <div className="cols">
            <div>
              <h3>Por hora</h3>
              <p>Tarifas accesibles de uso de PC.</p>
            </div>
            <div>
              <h3>Por página</h3>
              <p>Impresiones y fotocopias con precios bajos.</p>
            </div>
            <div>
              <h3>Combos de estudio</h3>
              <p>Más tiempo, más ahorro. Con snacks, bebidas y recargas de celular.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="big">
            Más movimiento en
            <br />
            exámenes y entregas.
          </p>
          <p className="lead">Semanas de parciales, trabajos finales y matrícula: te esperamos por la tarde con tu equipo listo.</p>
        </div>
      </section>

      <section id="visitanos" className="loc">
        <div className="wrap">
          <h2>Visítanos en San Salvador.</h2>
          <p>Cerca de las universidades y de las paradas de bus por las que ya pasas todos los días.</p>
          <div className="btns">
            <a className="btn" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </section>

      <footer>NEXUS CYBER SV · San Salvador, El Salvador · Página de demostración</footer>
    </>
  )
}
