import Card from './Card';
import Button from './Button';
import TaskForm from './TaskForm';

const CardList = ({tasks, addTask}) => {

  const listTasks = tasks.map((task, i) => {
    return <Card key={i} name={task.name} completed={task.completed}/>
  })

  return (
    <ul>
      {listTasks}
      <TaskForm addTask={addTask} />
    </ul>
  )
}

export default CardList;
