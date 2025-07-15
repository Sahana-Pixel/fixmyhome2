import Navbar from './components/Navbar';
import Home from './components/Home';
import BookForm from './components/BookForm';
import EmergencySOS from './components/EmergencySOS';
import TechnicianList from './components/TechnicianList';
import RepairTips from './components/RepairTips';
import ReviewForm from './components/ReviewForm';
import Service from './components/Service'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <div id="services"><Service /></div>
      <div id="book"><BookForm /></div>
      <div id="sos"><EmergencySOS /></div>
      <div id="technicians"><TechnicianList /></div>
      <div id="tips"><RepairTips /></div>
      <div id="review"><ReviewForm /></div>
      <div id="contact"><Contact /></div>

    </div>
  );
}

export default App;
