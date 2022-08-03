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
  return (
    <div className="mainContentContainer">
      {/* Background pagina inicial */}
      <div className="bg-imageContainer">
        <img id="bg-image" src={bgImage} alt="Imagem de fundo" />
      </div>

      {/* Header 2 */}

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

        <div className="headerContainer2">
          <img id="logo" src={logo} alt="Logomarca" />
          <Navbar />
        </div>
      </header>

      <section className="containerMain">
        <h1 className="tituloMain">BS ADVOCACIA</h1>
        <p className="descricaoMain">
          Somos um escritório de advocacia na busca dos direitos que interessam
          a coletividade, respeitando as particularidades de cada um dos nossos
          clientes.
        </p>
      </section>
    </div>
  );
};

export default MainContent;
