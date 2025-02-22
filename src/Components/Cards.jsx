import React from 'react'
import Card from './Card'

function Cards() {
    // const data=[
    //     {head:"UP next: News",subhead:"Insites and behind the scene",},
    //     {head:"Let's get into it",subhead:"Let's get into it,Together"}
    // ]
  return (
    <div className='flex gap-3 justify-center max-w-screen-xl mx-auto'>
      <Card width="w-1/3" start={false} para={true}/>
      <Card width="w-2/3" start={true} para={false} hover={'bg-sky-800'}/>
    </div>
  )
}

export default Cards
