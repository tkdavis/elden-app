const Button = ({ text, onClick }) => {

  return (
    <li id="new-task" className="card">
      <button onClick={onClick}>{text}</button>
    </li>
  )
}

export default Button;
