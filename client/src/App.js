import React from 'react';
import Header from './components/Header';
import CardList from './components/CardList';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/tasks")
      .then((res) => res.json())
      .then((data) => setData(data.tasks));
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <CardList tasks={!data ? ['Loading Tasks...'] : data}/>
        </section>
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header> */}
    </div>
  );
}

export default App;
