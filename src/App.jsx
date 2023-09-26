
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
          <p className='descript-text'>
            ¡Hola! Espero que pases un rato agradable paseando por mi portfolio, siéntente cómodo y libre de probar mis desarrollos personales, me gustaría que te sirvieran como referencia sobre mi trabajo y, si tienes alguna propuesta, no dudes en contactar conmigo por e-mail, en la sección <a href=''>Contacto</a>. Actualmente estoy en búsqueda activa de empleo como desarrollador web pudiendo llevar a cabo los diferentes roles como front-end, back-end o full-stack. Estaré encantado de tener una charla contigo si así lo deseas.
          </p>
        </div>

        <section>
          <h1>Proyectos</h1>
        </section>
      </main>
    </>
  )
}

export default App
