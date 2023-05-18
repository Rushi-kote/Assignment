import './App.css';
import Footer from './Components/Pages/Footer';
import Info from './Components/Pages/Info';
import Intro from './Components/Pages/Intro';
import WhyUs from './Components/Pages/WhyUs';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Info/>
      <WhyUs/>
      <Footer/>
    </div>
  );
}

export default App;
