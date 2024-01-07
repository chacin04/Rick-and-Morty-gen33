import './Styles/LocationCard.css'


export const LocationCard = ({location}) => {
  return (
    <article className="location">
        <h2 className="location__title">{location?.name}</h2>
        <ul className="location__list">
            <li className="location__label"><span>Type:</span><span className="location__value">{location?.type}</span></li>
            <li className="location__label"><span>Dimension:</span><span className="location__value">{location?.dimension}</span></li>
            <li className="location__label"><span>Population</span><span className="location__value">{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}
