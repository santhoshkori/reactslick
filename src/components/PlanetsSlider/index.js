import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots',
  }

  const {planetsList} = props

  return (
    <div className="planetbgcontainer">
      <h1 className="headingsty">PLANETS</h1>
      <Slider {...settings} className="slider">
        {planetsList.map(eachplanet => (
          <PlanetItem eachplanet={eachplanet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider
