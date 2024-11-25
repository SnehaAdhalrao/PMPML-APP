import React from 'react'
import { IconContext } from 'react-icons'
import { FaArrowLeft } from 'react-icons/fa'
import { HiMenuAlt2 } from 'react-icons/hi'
import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

export default function PageTitle({ text }) {
  const navigate = useNavigate() // Hook for navigation

  const handleBackClick = () => {
    navigate(-1) // Navigate 1 step back
  }

  return (
    <div className="mx-auto w-full bg-green-400 flex items-center justify-between mb-10 p-5 h-[30px]">
      <IconContext.Provider value={{ className: 'global-class-name size-5em' }}>
        <div onClick={handleBackClick} className="cursor-pointer">
          <FaArrowLeft />
        </div>
      </IconContext.Provider>
      <span className="font-bold text-2xl">{text}</span>

      <IconContext.Provider
        value={{ className: 'global-class-name', size: '1.5em' }}
      >
        <div className="flex gap-9 -translate-x-[60px]">
          <HiMenuAlt2 />
          <CgProfile />
        </div>
      </IconContext.Provider>
    </div>
  )
}
