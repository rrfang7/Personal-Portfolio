import React from 'react'
import "./Footer.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'> 
        <FaLinkedin />
        <FaGithub />
        <MdOutlineEmail />
        </div>
        <p> &copy; 2024 rrfang.com </p>
    </div>
  )
}

export default Footer