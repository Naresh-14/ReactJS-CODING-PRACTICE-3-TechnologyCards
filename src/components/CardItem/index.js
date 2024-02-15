import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <div className="header-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <img src={imgUrl} className="img" alt={title} />
    </li>
  )
}

export default CardItem
