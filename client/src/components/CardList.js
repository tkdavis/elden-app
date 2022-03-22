import Card from './Card';
import Button from './Button';

const CardList = ({tasks}) => {

  const addTask = () => {
    console.log('task');
  }

  console.log(tasks)

  const listTasks = tasks.map((task, i) => {
    return <Card key={i} task={task} />
  })
  return (
    <ul>
      {listTasks}
      <Button text='Add Task +' onClick={addTask}/>
    </ul>
  )
}

export default CardList;
