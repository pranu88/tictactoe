import Header from './components/Header';
import Player from './components/Player';
import Board from './components/Board'

//Import Css
import './styles.css'

function App() {
  return (
    <div>
      <Header />
      <Player whichPlayer="X" />
      <Player whichPlayer="O"/>
      <Board />
    </div>
  );
}


export default App;
