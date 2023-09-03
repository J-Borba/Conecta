import { FacebookIconLink } from "../socials-link/facebook";
import { InstagramIconLink } from "../socials-link/instagram";
import { HeaderContainer } from "./MyHeaderContainer";
import ConectaLogo from '../../assets/svgs/marca-conecta-header.svg';
import './styles.scss'
export function MyHeader() {
  return (
    <HeaderContainer>
      <div>
        <img src={ConectaLogo} alt="Logo Conecta" />
      </div>
      <div className="socials-wrapper">
        <FacebookIconLink />
        <InstagramIconLink />
      </div>
    </HeaderContainer>
  )
}