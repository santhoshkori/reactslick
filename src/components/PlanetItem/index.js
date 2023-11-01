import './index.css'

const PlanetItem = props => {
  const {eachplanet} = props
  const {id, name, imageUrl, description} = eachplanet
  return (
    <div className="slidecontainer">
      <img src={imageUrl} alt={name} className="planetimgpx" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
