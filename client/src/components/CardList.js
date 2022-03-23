import Card from './Card';
import Button from './Button';

const CardList = ({tasks}) => {

  const addTask = () => {
    // add task here
  }

  const listTasks = tasks.map((task) => {
    return <Card key={task._id} name={task.name} />
  })
  return (
    <ul>
      {listTasks}
      <Button text='Add Quest +' onClick={addTask}/>
    </ul>
  )
}

export default CardList;
