import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Chau";
  const isDisplay = false;
  function renderText(){
    const linkClass = "App-link";
    return (
      <a
      // className="App-link"
      className = {linkClass}
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
     {name} Learn Reacttt
    </a>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isDisplay
          ? (
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          )
          : null
        }
       
        {renderText()}
        <h2>Hello</h2>
      </header>
    </div>
  );
}

export default App;
