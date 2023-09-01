import { Header } from "../../components/Header";
import ConectaLogo from '../../assets/svgs/marca-conecta-header.svg'
import FacebookIcon from '../../assets/svgs/facebook.svg'
import InstagramIcon from '../../assets/svgs/instagram.svg'
import CarrouselSVG from '../../assets/svgs/carrousel.svg'
import MarcaFooter from '../../assets/svgs/marca-conecta-footer.svg'
import Lata1 from '../../assets/latas/lata-1.png'
import Lata2 from '../../assets/latas/lata-2.png'
import Lata3 from '../../assets/latas/lata-3.png'
import Lata4 from '../../assets/latas/lata-4.png'
import Lata5 from '../../assets/latas/lata-5.png'
import Lata4Section3 from '../../assets/latas/lata-4-section-3.png'
import Garrafa1 from '../../assets/garrafas/garrafa-1.png'
import GridBar from '../../assets/grid/grid-bar-img.png'
import './styles.scss'
import { MyButton } from "../../components/MyButton";
import { Card } from "../../components/Card";
import { MyFooter } from "../../components/MyFooter";

function Home() {

  return (
    <>
      <section className="section-1">
        <Header>
          <div>
            <img src={ConectaLogo} alt="Logo Conecta" />
          </div>
          <div className="socials-wrapper">
            <a href="https://www.facebook.com" target='_blank'>
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="https://www.instagram.com" target='_blank'>
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
          </div>
        </Header>
        <div className="section-1-wrapper">
          <div className="section-1-cta-wrapper">
            <h1>Aqui um título de duas linhas</h1>
            <MyButton className="primary">
              Aqui um CTA
            </MyButton>
          </div>
          <div>
            <img src={Lata1} alt="lata-1" className="Lata1" />
          </div>
        </div>
      </section>

      <section className="section-2">
          <div className="section-2-title-container">
            <h4>
              Produtos
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.
            </p>
          </div>

          <div className="section-2-cards-container">
            <Card>
              <div className="cards-img-container">
                <img src={Garrafa1} alt="Garrafa1" className="Garrafa1"/>
          </div>
              <h4>Garrafa 350ml</h4>
              <p>Lorem ipsum dolor sit amet</p>
              <MyButton className="primary">Aqui um CTA</MyButton>
            </Card>
            <Card>
              <div className="cards-img-container">
                <img src={Lata2} alt="Lata2" className="Lata2"/>
              </div>
              <h4>Garrafa 100ml</h4>
              <p>Lorem ipsum dolor sit amet</p>
              <MyButton className="primary">Aqui um CTA</MyButton>
            </Card>
          </div>

          <div className="section-2-grid-container">
            <div className="grid-larger"></div>
            <div className="grid-bar">
              <div className="grid-opacity-cover"></div>
              <p>Peça para seu bar</p>
              <img src={GridBar} alt="" />
            </div>
            <div className="grid-carrousel">
              <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.”</p>
              <p>@danielmaciel</p>
              <div className="grid-svg-container">
                <img src={CarrouselSVG} alt="" />
              </div>
            </div>
          </div>

      </section>

      <section className="section-3">
        <div className="Lata4Mobile">
          <img src={Lata4Section3} alt="" />
        </div>
        <div className="mobile-wrapper">
          <h4>Quer experimentar?</h4>
          <MyButton className="secondary">Aqui um CTA</MyButton>
        </div>
        <div className="Lata3">
          <img src={Lata3} alt="" />
        </div>
        <div className="Lata4">
          <img src={Lata4} alt="" />
        </div>
        <div className="Lata5">
          <img src={Lata5} alt="" />
        </div>
      </section>

      <MyFooter>
        <div className="footer-left-container">
          <h3>Fale Conosco.</h3>
          <div className="footer-socials-wrapper">
            <a href="https:www.facebook.com">
              <img src={FacebookIcon} alt="Facebook Icon" />
            </a>
            <a href="https:www.instagram.com">
              <img src={InstagramIcon} alt="Instagram Icon" />
            </a>
            <p>|</p>
            <p>REDES SOCIAIS</p>
          </div>  
        </div>
        <div className="footer-right-container">
          <form>
            <div className="name-container flex-column">
              <label htmlFor="">NOME</label>
              <input type="text" placeholder="Digite seu Nome" />
            </div>
            <div className="phone-container flex-column">
              <label htmlFor="">TELEFONE</label>
              <input type="text" placeholder="(21) 00000-0000" />
            </div>
            <div className="email-container flex-column">
              <label htmlFor="">E-MAIL</label>
              <input type="email" placeholder="email@email.com.br" />
            </div>
            <div className="subject-container flex-column">
              <label htmlFor="">ASSUNTO</label>
              <select id="assunto" name="assunto">
                <option value="unmarked">Selecione um Assunto</option>
                <option value="option1">Opção 1</option>
                <option value="option2">Opção 2</option>
                <option value="option3">Opção 3</option>
                <option value="option4">Opção 4</option>
              </select>
            </div>
            <div className="message-container flex-column">
              <label htmlFor="">MENSAGEM</label>
              <textarea name="mensagem" id="mensagem" placeholder="Escreva aqui sua mensagem"></textarea>
            </div>
          </form>
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
      </MyFooter>
    </>
  )
}

export default Home
