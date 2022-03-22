const Card = (props) => {
  return (
    <li className="card fadein"><textarea readOnly spellCheck='false' value={props.task}></textarea></li>
  )
}

export default Card;
