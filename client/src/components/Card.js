const Card = (props) => {
  return (
    <li className="card fadein"><textarea readOnly spellCheck='false' value={props.name}></textarea></li>
  )
}

export default Card;
