import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import './App.css';

function App() {
  const [tasks, setTasks] = React.useState(null);

  React.useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((tasks) => setTasks(tasks));
  }, []);

  const addTask = (name) => {
    setTasks([...tasks, {name, completed: false}]);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name, completed: false})
    };
    fetch('/tasks/add', requestOptions)
      .then(res => res.json());
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <CardList tasks={!tasks ? ['Loading Tasks...'] : tasks} addTask={addTask}/>
        </section>
      </main>
    </div>
  );
}

export default App;
