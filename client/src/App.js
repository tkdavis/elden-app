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

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <CardList tasks={!tasks ? ['Loading Tasks...'] : tasks}/>
        </section>
      </main>
    </div>
  );
}

export default App;
