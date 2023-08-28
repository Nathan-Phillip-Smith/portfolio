import './Home.css'
import 'animate.css'

const Home = () => {
  return (
    <>
      <section className="business-card">
        <div>
          <div
            className="hexagon animate__animated animate__fadeIn animate__fadeInRightBig"
            id="hexagon"
          >
            <div>
              <p className="logo-text code-img">&lt;/&gt;</p>
            </div>
            <div>
              <p className="logo-text">Nathan Phillip Smith</p>
            </div>
          </div>
        </div>

        <div className="info">
          <div className="info-title">
            <h1>Nathan Phillip Smith</h1>
            <h4>Software Developer</h4>
          </div>
          <div className="info-items">
            <p className="info-headline">Projects / Certificates</p>
            <a href="https://capstone-86p9.onrender.com">•Full Stack App</a>
            <a href="#">•Other Projects</a>
            <a href="https://www.freecodecamp.org/Nathan_Smith">
              •freeCodeCamp Certificates
            </a>
            <a href="https://www.credly.com/badges/27323c0d-c952-402f-96b0-1d78f8f33ad1/linked_in?t=rxqsyk">
              •Other Certificates
            </a>
          </div>

          <div className="info-items">
            <p className="info-headline">Socials / Source Code</p>
            <a href="https://github.com/Nathan-Phillip-Smith">•GitHub</a>
            <a href="https://www.linkedin.com/in/nathan-phillip-smith-3b5aa457/">
              •LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
