import "../styles/components/mainContent.sass";
import logo from "../img/bs-logo2.jpg";
import bgImage from "../img/adv.jpg";

import Navbar from "./Navbar";
import {
  FaInstagram,
  FaLocationArrow,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";





const MainContent = () => {

  const handleScroll = () => {
    let head = document.querySelector(".headerContainer2")
    
    let atualPosicao = window.scrollY
    
    if(atualPosicao > 80) {
      head.classList.add("sobeHeader")
    } else {
      head.classList.remove("sobeHeader")

    }
    
  }
  window.addEventListener("wheel", handleScroll)


  return (
    <div className="mainContentContainer">
      {/* Background pagina inicial */}
      <div className="bg-imageContainer">
        <img id="bg-image" src={bgImage} alt="Imagem de fundo" />
      </div>

      {/* Header 1 */}
      <header>
        <div className="headerContainer">
          <div className="contatosHeader">
            <p>
              {" "}
              <FaLocationArrow /> Bairro Ipanema - Porto Alegre
            </p>
            <p>
              {" "}
              <FaPhone /> 519 99887766
            </p>
          </div>

          <div className="midiaIcons">
            <a href="#">
              <FaInstagram className="svg-instagram" />
            </a>
            <a href="#">
              <FaTelegram className="svg-telegram" />
            </a>
            <a href="#">
              <MdEmail className="svg-email" />
            </a>
          </div>
        </div>

        {/* Header 2 */}
        <div onWheel={handleScroll} className="headerContainer2">
          <img id="logo" src={logo} alt="Logomarca" />
          <Navbar />
        </div>
      </header>

      <section className="containerMain">
        <h1 className="tituloMain">BS ADVOCACIA</h1>
        <p className="descricaoMain">
          Somos um escritório de advocacia na busca dos direitos que interessam
          a coletividade, respeitando as particularidades de cada um dos nossos
          clientes. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta accusamus dignissimos eveniet cumque praesentium voluptatibus quos recusandae laudantium saepe ea assumenda, esse vero minima ut deleniti nam dolor hic. Lorem ipsum dolor sit amet consectetur, adipitione in deserunt. Dolores, beatae? Id eveniet aliquid totam aspernatur.
        </p>
      </section>
      
    </div>
  );
};

export default MainContent;
