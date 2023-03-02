import pc from './images/pc.png';
import './App.css';
import Footer from './components/Footer';
// import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pc} className="App-logo" alt="logo" />
        <p className='title'>
        {/* <Link to='./components/Info.jsx' target='_blank' > */}
        <h3 className='saludo'> Hola 🖐 </h3>
          Soy Mayra, desarrolladora fullstack MERN 
        </p>
    
        <div className="Links">
          
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mayra-gonz%C3%A1lez-v/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin 🧷
          </a>
          <a

            className="App-link"
            href="https://github.com/MayradelvGonzalez"
            target="_blank"
            rel="noopener noreferrer"
          >
            github 🧷
          </a></div>







      </header>
      <Footer />

      </div>
     
  );
}

export default App;
