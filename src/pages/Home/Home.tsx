import './Home.css'
import 'animate.css'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <Header></Header>

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
              I have found fulfillment and engagement in the software
              development industry. I enjoy learning competitive strategies to
              constantly improve myself, and I am committed to growth and
              finding new ways to be creative in my solutions to the problems I
              face.
            </p>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
    </>
  )
}
export default Home
