import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App"> 
      <Navi />
      <Dashboard />
      <Footer/>
    </div>
  );
}

export default App;
