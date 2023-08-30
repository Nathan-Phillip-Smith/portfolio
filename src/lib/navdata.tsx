import DataObjectIcon from '@mui/icons-material/DataObject'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import DescriptionIcon from '@mui/icons-material/Description'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import PDF from './RESUME.pdf'
import { ChangeEvent } from 'react'

type NavItem = {
  id: number
  icon: React.ReactNode
  text: string
  html: React.ReactNode
  click: (event: React.MouseEvent<HTMLDivElement>) => void
}
const onCertificatesSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
  const urlMap = {
    fcc: 'https://www.freecodecamp.org/Nathan_Smith',
    other:
      'https://www.credly.com/badges/27323c0d-c952-402f-96b0-1d78f8f33ad1/linked_in?t=rxqsyk',
  }

  const url = urlMap[e.target.value as 'fcc' | 'other']

  if (url) {
    if (/Mobi|Android|Tablet|iPad/i.test(navigator.userAgent)) {
      // Mobile device
      window.location.href = url
    } else {
      // Desktop
      window.open(url, '_blank')
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
    if (/Mobi|Android|Tablet|iPad/i.test(navigator.userAgent)) {
      // Mobile device
      window.location.href = url
    } else {
      // Desktop
      window.open(url, '_blank')
    }
    e.target.value = '0'
  }
}

export const navData: NavItem[] = [
  {
    id: 0,
    icon: <DataObjectIcon />,
    text: 'Projects',
    html: (
      <>
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
      </>
    ),
    click: () => {},
  },
  {
    id: 1,
    icon: <WorkspacePremiumIcon />,
    text: 'Certificates',
    html: (
      <>
        <select onChange={onCertificatesSelectChange}>
          <option value="0">Certificates</option>
          <option value="fcc">freeCodeCamp</option>
          <option value="other">Other</option>
        </select>
      </>
    ),
    click: () => {},
  },
  {
    id: 2,
    icon: <DescriptionIcon />,
    text: 'Resume',
    html: 'Resume',
    click: () => {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Mobile device
        window.location.href = PDF
      } else {
        // Desktop
        window.open(PDF, '_blank')
      }
    },
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
    text: 'LinkedIn',
    html: 'LinkedIn',
    click: () => {
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
    },
  },
  {
    id: 4,
    icon: <GitHubIcon />,
    text: 'GitHub',
    html: 'GitHub',
    click: () => {
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Mobile device
        window.location.href = 'https://github.com/Nathan-Phillip-Smith'
      } else {
        // Desktop
        window.open('https://github.com/Nathan-Phillip-Smith', '_blank')
      }
    },
  },
]
