import "../styles/components/footer.sass"

import ScrollReveal from "scrollreveal"

const Footer = () => {

  ScrollReveal({reset: true, duration: 2500,})

  ScrollReveal().reveal(".tituloDofooter, .descricaoDoFooter, .footerDoFooter", { origin: "top"})

  return (
    <div className='footerContainer'>
        <h1 className="tituloDofooter">Título do footer</h1>
        <p className="descricaoDoFooter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quas libero aliquam tenetur illo esse, ab voluptatem, debitis reprehenderit praesentium odit! Numquam voluptatum incidunt iure similique facilis ratione nesciunt doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim illo, vitae quod ipsa similique maxime porro cumque officiis soluta quo in voluptatem impedit magni eaque debitis dicta consectetur inventore! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium corrupti provident rerum eveniet veniam sed? Ipsam odit harum ea iure incidunt ipsa, est distinctio veniam sint in error cupiditate consectetur.lore</p>
        <h3 className="footerDoFooter">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit optio doloremque ipsum quidem eaque hic laboriosam saepe impedit dolorum, reiciendis placeat mollitia enim alias? Sed nobis quod vitae placeat qui.</h3>
    </div>
  )
}

export default Footer