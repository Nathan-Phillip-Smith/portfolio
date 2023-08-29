import { ChangeEvent } from 'react'
import './Home.css'
import 'animate.css'
import PDF from './RESUME.pdf'

const Home = () => {
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const urlMap = {
      '1': 'https://capstone-86p9.onrender.com',
      '2': 'https://nathan-phillip-smith.github.io/buzzfeed-clone/',
      '3': 'https://nathan-phillip-smith.github.io/imageGallery',
      '4': 'https://nathan-phillip-smith.github.io/monster-egg-game/',
    }

    const url = urlMap[e.target.value as '1' | '2' | '3' | '4']

    if (url) {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Mobile device
        window.location.href = url
      } else {
        // Desktop
        window.open(url, '_blank')
      }
      e.target.value = '0'
    }
  }

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
            <p className="info-headline">Projects / Certificates</p>
            <div>
              •
              <select onChange={onSelectChange}>
                <option value="0">Select a project</option>
                <optgroup label="Full Stack">
                  <option value="1">
                    Student Registration App (Takes time to spin up)
                  </option>
                  <option value="2">BuzzFeed Clone</option>
                </optgroup>
                <optgroup label="Static React">
                  <option value="3">Photo Gallery</option>
                </optgroup>
                <optgroup label="Vanilla JavaScript">
                  <option value="4">Monster Egg Game</option>
                </optgroup>
              </select>
            </div>
            <a target="_blank" href="https://www.freecodecamp.org/Nathan_Smith">
              • freeCodeCamp Certificates
            </a>
            <a
              target="_blank"
              href="https://www.credly.com/badges/27323c0d-c952-402f-96b0-1d78f8f33ad1/linked_in?t=rxqsyk"
            >
              • Other Certificates
            </a>
          </div>

          <div className="info-items">
            <p className="info-headline">Socials / Source Code</p>
            <a target="_blank" href="https://github.com/Nathan-Phillip-Smith">
              • GitHub
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nathan-phillip-smith-3b5aa457/"
            >
              • LinkedIn
            </a>
          </div>
          <div className="info-items">
            <p className="info-headline">Resume</p>
            <a target="_blank" href={PDF}>
              • View
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
