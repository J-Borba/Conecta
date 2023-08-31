import { Header } from "../../components/Header";
import ConectaLogo from '../../assets/svgs/marca-conecta-header.svg'
import FacebookIcon from '../../assets/svgs/facebook.svg'
import InstagramIcon from '../../assets/svgs/instagram.svg'
import CarrouselSVG from '../../assets/svgs/carrousel.svg'
import Lata1 from '../../assets/latas/lata-1.png'
import Lata2 from '../../assets/latas/lata-2.png'
import Garrafa1 from '../../assets/garrafas/garrafa-1.png'
import GridBar from '../../assets/grid/grid-bar-img.png'
import './styles.css'
import { MyButton } from "../../components/MyButton";
import { Card } from "../../components/Card";

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
    </>
  )
}

export default Home
