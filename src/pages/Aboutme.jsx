import React from 'react'
import hiking from "../assets/hiking.png"
import hiking2 from "../assets/hiking2.png"
import "./Aboutme.css"

function Aboutme() {
  return (
    <div>
      <h2>About Me</h2>
      <p>Hobbies:</p>
      <img className="hiking" src={hiking} alt="hike" />
      <img className="views" src={hiking2} alt="views" />
    </div>
  )
}

export default Aboutme