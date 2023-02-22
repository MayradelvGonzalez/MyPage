import pc from './images/pc.png';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pc} className="App-logo" alt="logo" />
        <p className='title'>
          Welcome!
        </p>

        <div className="Links">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/"
            target="_blank"
            rel="noopener noreferrer"
          >
            My linkedin 🧷
          </a>
          <a

            className="App-link"
            href="https://github.com/MayradelvGonzalez"
            target="_blank"
            rel="noopener noreferrer"
          >
            My github 🧷
          </a></div>







      </header>
      <Footer />

      </div>
     
  );
}

export default App;
