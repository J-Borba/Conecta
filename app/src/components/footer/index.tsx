import './styles.scss'
import { MyButton } from "../MyButton";
import { FooterForm } from "../form";
import { FacebookIconLink } from "../socials-link/facebook";
import { InstagramIconLink } from "../socials-link/instagram";
import { MyFooterContainer } from "./MyFooterContainer";
import MarcaFooter from '../../assets/svgs/marca-conecta-footer.svg'

export function MyFooter() {
  return (
    <MyFooterContainer>
    <div className="footer-left-container">
      <h3>Fale Conosco.</h3>
      <div className="footer-socials-wrapper">
        <FacebookIconLink />
        <InstagramIconLink />
        <p>| REDES SOCIAIS</p>
      </div>  
    </div>
    <div className="footer-right-container">
      <FooterForm />
      <MyButton className="primary">Aqui um CTA</MyButton>
    </div>
    <div className="footer-bottom-container">
      <div className="footer-copyright-container">
        <p className="copyright">Todos os direitos reservados © 2020 Conecta</p>
      </div>
      <div className="footer-logo">
        <p>PROJETADO POR</p>
        <img src={MarcaFooter} alt="" />
      </div>
    </div>
  </MyFooterContainer>
  )
}