import CarrouselSVG from '../../assets/svgs/carrousel.svg'
import GridBar from '../../assets/grid/grid-bar-img.png'
import './styles.scss'

export function SectionTwoGrid() {
  return (
    <div className="section-2-grid-container">
      <div className="grid-larger" />
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
  )
}