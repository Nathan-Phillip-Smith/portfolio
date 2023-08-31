import DataObjectIcon from '@mui/icons-material/DataObject'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import DescriptionIcon from '@mui/icons-material/Description'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PDF from './RESUME.pdf'
import { ChangeEvent, useRef } from 'react'
import { useState } from 'react'
import './Sidebar.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

export default function Sidebar() {
  const [open, setopen] = useState(false)
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const toggleOpen = () => {
    setopen(!open)
  }
  const onCertificatesSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const urlMap = {
      fcc: 'https://www.freecodecamp.org/Nathan_Smith',
      other:
        'https://www.credly.com/badges/27323c0d-c952-402f-96b0-1d78f8f33ad1/linked_in?t=rxqsyk',
    }

    const url = urlMap[e.target.value as 'fcc' | 'other']

    if (url) {
      if (linkRef.current) {
        linkRef.current.href = url
        linkRef.current.click()
      }
      e.target.value = '0'
    }
  }
  const onProjectsSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const urlMap = {
      student: 'https://capstone-86p9.onrender.com',
      buzzfeed: 'https://nathan-phillip-smith.github.io/buzzfeed-clone/',
      gallery: 'https://nathan-phillip-smith.github.io/imageGallery',
      monster: 'https://nathan-phillip-smith.github.io/monster-egg-game/',
    }

    const url =
      urlMap[e.target.value as 'student' | 'buzzfeed' | 'gallery' | 'monster']

    if (url) {
      if (linkRef.current) {
        linkRef.current.href = url
        linkRef.current.click()
      }
      e.target.value = '0'
    }
  }

  return (
    <div className={open ? 'sidenav' : 'sidenavClosed'}>
      <button className="menuBtn" onClick={toggleOpen}>
        {open ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </button>

      <div key={0} className="sideitem">
        <DataObjectIcon />
        <span className={open ? 'linkText' : 'linkTextClosed'}>
          <select onChange={onProjectsSelectChange}>
            <option value="0">Projects</option>
            <optgroup label="Full Stack">
              <option value="student">College App</option>
              <option value="buzzfeed">BuzzFeed Clone</option>
            </optgroup>
            <optgroup label="Static React">
              <option value="gallery">Photo Gallery</option>
            </optgroup>
            <optgroup label="Vanilla JavaScript">
              <option value="monster">Monster Egg Game</option>
            </optgroup>
          </select>
        </span>
      </div>

      <div key={1} className="sideitem">
        <WorkspacePremiumIcon />
        <span className={open ? 'linkText' : 'linkTextClosed'}>
          <select onChange={onCertificatesSelectChange}>
            <option value="0">Certificates</option>
            <option value="fcc">freeCodeCamp</option>
            <option value="other">Other</option>
          </select>
        </span>
      </div>

      <div
        key={2}
        onClick={() => {
          if (/Mobi|Android/i.test(navigator.userAgent)) {
            // Mobile device
            window.location.href = PDF
          } else {
            // Desktop
            window.open(PDF, '_blank')
          }
        }}
        className="sideitem"
      >
        <DescriptionIcon />
        <span className={open ? 'linkText' : 'linkTextClosed'}>Resume</span>
      </div>

      <div
        key={3}
        onClick={() => {
          if (/Mobi|Android/i.test(navigator.userAgent)) {
            // Mobile device
            window.location.href =
              'https://www.linkedin.com/in/nathan-phillip-smith-3b5aa457/'
          } else {
            // Desktop
            window.open(
              'https://www.linkedin.com/in/nathan-phillip-smith-3b5aa457/',
              '_blank'
            )
          }
        }}
        className="sideitem"
      >
        <LinkedInIcon />
        <span className={open ? 'linkText' : 'linkTextClosed'}>LinkedIn</span>
      </div>

      <div
        key={4}
        onClick={() => {
          if (/Mobi|Android/i.test(navigator.userAgent)) {
            // Mobile device
            window.location.href = 'https://github.com/Nathan-Phillip-Smith'
          } else {
            // Desktop
            window.open('https://github.com/Nathan-Phillip-Smith', '_blank')
          }
        }}
        className="sideitem"
      >
        <GitHubIcon />
        <span className={open ? 'linkText' : 'linkTextClosed'}>GitHub</span>
      </div>
      <a ref={linkRef} style={{ display: 'none' }} />
    </div>
  )
}
