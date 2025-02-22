import React from 'react'
import Button from './Button'

function Product({data,mover,pos}) {
  return (
    <div onMouseEnter={()=>{mover(pos)}} className={`max-w-screen-xl mx-auto flex items-center h-[200px] justify-between p-4 hover:bg-${data.color}-300`}>
     <h1 className='text-[60px]'>{data.title}</h1>
     <div className="content">
        <p className='text-[20px] text-wrap w-[300px]'>{data.description}</p>
       <div className="btndiv flex">
       <Button text="Live Projects"/>
       {data.case===true ? (<Button text="Case study"/>) :null}
       </div>
        
     </div>
    </div>
  )
}

export default Product
