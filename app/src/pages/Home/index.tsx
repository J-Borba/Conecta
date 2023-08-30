import { Header } from "../../components/Header";
import ConectaLogo from '../../assets/marca-conecta-header.svg'
import FacebookIcon from '../../assets/facebook.svg'
import InstagramIcon from '../../assets/instagram.svg'
import Lata1 from '../../assets/lata-1.png'
import './styles.scss'

function Home() {

  return (
    <section className="section-1">
      <Header>
        <div>
          <img src={ConectaLogo} alt="Logo Conecta" />
        </div>
        <div className="socials-wrapper">
          <img src={FacebookIcon} alt="Facebook Icon" />
          <img src={InstagramIcon} alt="Instagram Icon" />
        </div>
      </Header>
      <div className="section-1-wrapper">
        <div className="section-1-cta-wrapper">
          <h1>Aqui um título de duas linhas</h1>
          <button>Aqui um CTA</button>
        </div>
        <div>
          <img src={Lata1} alt="lata-1" className="Lata1" />
        </div>
      </div>
    </section>
  )
}

export default Home
