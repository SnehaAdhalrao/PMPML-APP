import React from 'react'
import Routing from '../Utils/Routing'
import { Link } from 'react-router-dom'

export default function List() {
  return (
    <div>
      <div>
      
      <Link to="/home">HOME</Link>
      <Link to="/Complaint">Complaints</Link>
      <Link to="/Share">Share Me</Link>
      <Link to="/Pass">Pass_forming</Link>
      <Routing/>
      
  </div>
    </div>
  )
}
