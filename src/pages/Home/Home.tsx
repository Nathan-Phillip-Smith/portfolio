import './Home.css'
import 'animate.css'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <section className="business-card">
        <div>
          <div
            className="hexagon animate__animated animate__zoomIn"
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

        <div className="info animate__animated animate__zoomIn">
          <div className="info-title">
            <h1>Nathan Phillip Smith</h1>
            <h4>Software Developer</h4>
          </div>
          <div className="info-items">
            <p>
              I am a Software Developer passionate about creative solutions,
              cutting-edge implementations, and obtaining knowledge. I
              prioritize making things look and work seamlessly. In my free time
              I love playing the piano and pickleball.
            </p>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
    </>
  )
}
export default Home
