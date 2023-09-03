import './styles.scss'
import { MyButton } from "../../components/MyButton";
import { Card } from "../../components/Card";
import { MyFooter } from "../../components/footer/index";
import { SectionOne } from "../../components/sections/SectionOne";
import { SectionTwo } from "../../components/sections/SectionTwo";
import { SectionThree } from "../../components/sections/SectionThree";
import { LataUm } from "../../components/latas e garrafas/Lata1";
import { GarrafaUm } from "../../components/latas e garrafas/Garrafa1";
import { LataDois } from "../../components/latas e garrafas/Lata2";
import { LataQuatroMobile } from "../../components/latas e garrafas/Lata4Mobile";
import { LataTres } from "../../components/latas e garrafas/Lata3";
import { LataQuatro } from "../../components/latas e garrafas/Lata4";
import { LataCinco } from "../../components/latas e garrafas/Lata5";
import { MyHeader } from '../../components/header';
import { SectionTwoGrid } from '../../components/grid';

function Home() {

  return (
    <>
      <SectionOne>
        <MyHeader />
        <div className="section-1-wrapper">
          <div className="section-1-cta-wrapper">
            <h1>Aqui um título de duas linhas</h1>
            <MyButton className="primary">
              Aqui um CTA
            </MyButton>
          </div>
          <LataUm />
        </div>
      </SectionOne>

      <SectionTwo>
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
            <GarrafaUm />
            <h4>Garrafa 350ml</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <MyButton className="primary">Aqui um CTA</MyButton>
          </Card>
          <Card>
            <LataDois />
            <h4>Garrafa 100ml</h4>
            <p>Lorem ipsum dolor sit amet</p>
            <MyButton className="primary">Aqui um CTA</MyButton>
          </Card>
        </div>

        <SectionTwoGrid />

      </SectionTwo>

      <SectionThree>
        <LataQuatroMobile />
        <div className="mobile-wrapper">
          <h4>Quer experimentar?</h4>
          <MyButton className="secondary">Aqui um CTA</MyButton>
        </div>
        <LataTres />
        <LataQuatro />
        <LataCinco />
      </SectionThree>

      <MyFooter />
    </>
  )
}

export default Home
