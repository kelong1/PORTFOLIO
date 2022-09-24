
import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Project } from './components/Project/Project';
import{Skills} from './components/Skills/Skills'


function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        <Skills/>
        <Project/>
        <Footer/>
    </div>
  );
}

export default App;
