const Card = ({name, completed}) => {
  return (
    <li className={`card fadein ${completed ? 'strike' : ''}`}><textarea readOnly spellCheck='false' value={name}></textarea></li>
  )
}

export default Card;
