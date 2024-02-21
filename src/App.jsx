import './App.css';
import Info from './containers/Info';
import Intro from './containers/Intro';
import Footer from './containers/Footer';

const App = () => {
  return (
    <div className="card-container">
      <Info />
      <Intro />
      <Footer />
    </div>
  );
};

export default App;
