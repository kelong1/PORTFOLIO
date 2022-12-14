
import './App.css';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Project } from './components/Project/Project';



function App() {
  return (
    <div className="App">
        <Header/>
        <Home/>
        
        <Project/>
        <Footer/>
    </div>
  );
}

export default App;
