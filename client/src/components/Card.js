const Card = (props) => {
  return (
    <li className="card fadein"><textarea spellcheck='false' value={props.task}></textarea></li>
  )
}

export default Card;
