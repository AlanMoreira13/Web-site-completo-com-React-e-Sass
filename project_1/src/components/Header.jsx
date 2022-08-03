import "../styles/components/header.sass"

import { FaInstagram, FaLocationArrow, FaPhone, FaTelegram, FaVoicemail } from 'react-icons/fa'
import {MdEmail} from "react-icons/md"

const Header = () => {
  return (
        <div className="headerContainer">
            <div className="contatosHeader">
              <p> <FaLocationArrow /> Bairro Ipanema - Porto Alegre</p>
              <p> <FaPhone /> 519 99887766</p>
            </div>
    
            <div className="midiaIcons">
              <a href="#"><FaInstagram className="svg-instagram" /></a>
              <a href="#"><FaTelegram className="svg-telegram" /></a>
              <a href="#"><MdEmail className="svg-email" /></a>
              
            </div>
        </div>
  )
}

export default Header