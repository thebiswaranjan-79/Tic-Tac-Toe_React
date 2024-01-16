import './App.css';
import Icon from './Icon/Icon';
import Grid from './components/grid/Grid.js';


function App() {
  return (
    <div className="App">
      <h1>TIC-TAC-TOE</h1>
        <Grid numberOfCards={9}/>
    </div>
  );
}

export default App;
