
import './App.css';

function App() {
  const photo_path = `src/assets/CV_photo.jpg`

  return (
    <>
      <header>
        <h1 className='title'>David Palacín Giménez</h1>
        <p className='subtitle'>Full stack developer</p>
      </header>
      <main>
        <div className="descript">
          <div className="descript-image">
            <img className='profile-photo' src={photo_path} alt="Foto de perfil del programador David Palacín Giménez" />
          </div>
          <div className='descript-info'>
            <p className='descript-text'>
              ¡Hola! Espero que pases un rato agradable paseando por mi portfolio, siéntente cómodo y libre de probar mis desarrollos personales, tómalos como referencia sobre mis habilidades, sin embargo ten en cuenta que me apasiona el desarrollo y estoy en constante crecimiento 💪
            </p>
            <p className='descript-text'>
              Si tienes alguna propuesta, no dudes en contactar conmigo por e-mail, en la sección <a href='#'>Contacto</a>. Actualmente estoy en búsqueda activa de empleo como desarrollador web pudiendo llevar a cabo los diferentes roles como front-end, back-end o full-stack. Estaré encantado de tener una charla contigo si así lo deseas.
            </p>
          </div>
        </div>

        <section>
          <h1 className='projects-title'>Proyectos</h1>
          <div className="projects">
            <div className="bar">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <div className="project-list">
              <div className='project'></div>
              <div className='project'></div>
              <div className='project'></div>
              <div className='project'></div>
              <div className='project'></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
