import { navData } from '../../lib/navdata'
import { useState } from 'react'
import './Sidebar.css'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'

export default function Sidebar() {
  const [open, setopen] = useState(false)
  const toggleOpen = () => {
    setopen(!open)
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
      {navData.map((item) => {
        return (
          <div key={item.id} onClick={item.click} className="sideitem">
            {item.icon}
            <span className={open ? 'linkText' : 'linkTextClosed'}>
              {item.html}
            </span>
          </div>
        )
      })}
    </div>
  )
}
