import Header from './components/header/header'
import Headline from './components/headline/Headline'
import './App.css'
function App() {
  return (
    <div className="App">
        <Header />
        <Headline header={'Hello world'} desc={'God is great, be strong'} />
    </div>
  );
}

export default App;
