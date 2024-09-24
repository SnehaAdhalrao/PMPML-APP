import React from 'react'

export default function Button({text}) {
  return (
    <div className='cursor-pointer inline-block h-auto text-center hover:bg-green-400 p-4 rounded-md bg-[#44e350] whitespace-nowrap'>
      {text}
    </div>
  )
}
