import './App.css';
import Info from './containers/Info';
import Intro from './containers/Intro';

const App = () => {
  return (
    <div className="card-container">
      <Info />
      <Intro />
    </div>
  );
};

export default App;
