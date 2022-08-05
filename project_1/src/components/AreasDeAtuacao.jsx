import "../styles/components/areasDeAtuacao.sass";
import { FaBalanceScale } from "react-icons/fa";
import { MdFamilyRestroom, MdWork } from "react-icons/md";
import { ImHammer2 } from "react-icons/im";

import ScrollReveal from "scrollreveal"

const AreasDeAtuacao = () => {


  ScrollReveal({reset: true, duration: 2500})

  ScrollReveal().reveal('.testeH2', {delay: 300, origin: "left" })



  return (
    <div>
      <section className="sectionAreasDeAtuacao">
        <div className="cartao card-1">
            <div className="tituloComIcones">
              <FaBalanceScale className="icon" />
              <h2>Direito Trabalhista</h2>
              <MdWork className="icon" />
            </div>
          <p className="descricao">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            officiis, excepturi id vel amet repellendus reiciendis rem dolorum
            minima nemo. Repellendus aut inventore nihil dolore quas
            voluptatibus deleniti doloribus! Esse!
          </p>
        </div>
        <div className="cartao card-2"> <div className="tituloComIcones">
            <FaBalanceScale className="icon" />
            <h2>Direito Tributário</h2>
            <ImHammer2 className="icon" />
          </div>
          <p className="descricao">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            officiis, excepturi id vel amet repellendus reiciendis rem dolorum
            minima nemo. Repellendus aut inventore nihil dolore quas
            voluptatibus deleniti doloribus! Esse!
          </p></div>
        <div className="cartao card-3"> 
        
            <div className="tituloComIcones">
                <FaBalanceScale className="icon" />
                <h2>Direito de Família</h2>
                <MdFamilyRestroom className="icon" />
          </div>
          <p className="descricao">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            officiis, excepturi id vel amet repellendus reiciendis rem dolorum
            minima nemo. Repellendus aut inventore nihil dolore quas
            voluptatibus deleniti doloribus! Esse!
          </p>
        </div>
        <div className="footerAreas">
            <h1 className="testeH2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus . Quia?</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati placeat est facilis consequuntur delectus sit esse laboriosam voluptatum nesciunt velit. Dolore fugiat ullam cum animi, maxime nobis praesentium dolorum numquam.lorm Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit amet labore laudantium, cumque ab quibusdam qui eligendi, sint quod rem laborum consequuntur perspiciatis! Magnam, minima velit nulla voluptatum est ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, voluptates, distinctio repellendus nam dolore</p>
        </div>
      </section>
    </div>
  );
};

export default AreasDeAtuacao;
