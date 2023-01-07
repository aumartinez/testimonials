import logo from './logo.svg';
import './App.css';
import { Testimony } from './components/testimonials/testimonials.js'

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <h1>
          Here is what our alumni say about freeCodeCamp:
        </h1>
        <Testimony />
      </div>      
    </div>
  );
}

export default App;
