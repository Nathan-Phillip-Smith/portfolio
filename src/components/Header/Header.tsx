import './Header.css'
import { ChangeEvent } from 'react'

const Header = () => {
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
      <section className="header">
        <div className="header__title">
          <span className="header__title-logo">&lt;/&gt;</span> Nathan Phillip
          Smith
        </div>
      </section>
    </>
  )
}
export default Header
