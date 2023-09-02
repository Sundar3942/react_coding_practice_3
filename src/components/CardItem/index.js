// Write your code here.
import './index.css'

const CardDetails = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`card ${className}`}>
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imgUrl} className="image" alt={title} />
    </li>
  )
}

export default CardDetails
