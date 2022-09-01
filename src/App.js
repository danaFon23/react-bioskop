
import './App.css';
import Movies from './components/Movies';
import NavBar from './components/NavBar';

function App() {
  const prom = <h3>Cao svima!</h3>;
  
  return (
    
    <div className="App">
      <NavBar></NavBar>
      {prom}
      <Movies />
      
    </div>
  );
}

export default App;
