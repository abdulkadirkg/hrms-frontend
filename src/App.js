import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import './layouts/DashboardLayout/Dashboard.css'
import Dashboard from './layouts/DashboardLayout/Dashboard';
import Footer from './layouts/FooterLayout/Footer';
import Navi from './layouts/NaviLayout/Navi';

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
