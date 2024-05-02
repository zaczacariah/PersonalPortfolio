import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://www.linkedin.com/in/ben-taylor-722398102" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
        <div>
          <a href="https://www.github.com/zaczacariah" target="_blank" rel="noopener noreferrer">
            <BsGithub  />
            </a>
        </div>
        {/* <div>
            <BsInstagram />
        </div> */}
    </div>
  )
}

export default SocialMedia