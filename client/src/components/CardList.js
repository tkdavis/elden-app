import Card from './Card';

const CardList = () => {
  const tasks = ["It was a dark and stormy night.",
                   "Fight Margit",
                   "Find more spells",
                   "Visit Stoneveil Castle",
                   "Return to the church",
                   "Talk to the chrysalis people and return to red riding hood",
                   "It was a dark and stormy night.",
                   "Fight Margit",
                   "Find more spells",
                   "Visit Stoneveil Castle",
                   "Return to the church"]

  const listTasks = tasks.map((task, i) => {
    return <Card key={i} task={task} />
  })
  return (
    <ul>
      {listTasks}
    </ul>
  )
}

export default CardList;
