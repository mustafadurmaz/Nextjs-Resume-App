import React from 'react'

import {Envelope, Twitter, Linkedin} from "./icons"

const Sidebar = ({data}) => {

  const {name,role,education, contactLinks}=data;
  return (
    <div className='bg-red'>
      <div>
        {/* <Image/> */}
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>{education[0]}</p>
        <p>{education[1]}</p>
        <div>
          <h3>Contact me</h3>
          <a href={contactLinks?.[0]} aria-label={"twitter"}><Envelope /></a>
          <a href={contactLinks?.[0]} aria-label={"twitter"}><Twitter /></a>
          <a href={contactLinks?.[0]} aria-label={"twitter"}><Linkedin /></a>

        </div>
      </div>
    </div>
  )
}

export default Sidebar