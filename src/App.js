import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import NavBar from './CarComponents/Navbar';
import Dashboard from './CarComponents/Dashboard';
import FetchAllCars from './CarComponents/FetchAllCars';
import GetCar from './CarComponents/GetCar';
import UpdateCar from './CarComponents/UpdateCar';
import DeleteCar from './CarComponents/DeleteCar';
import AddCar from './CarComponents/AddCar';
import Footer from './CarComponents/Footer';

function App() {
  return (
    <div>
      <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Dashboard/>} exact/>
        <Route path="/car/getAll" element={<FetchAllCars/>}/>
      <Route path="/car/:carId" element={<GetCar/>}/>
      <Route path="/car/update/:carId" element={<UpdateCar/>}/>
       <Route path="/car/delete/:carId" element={<DeleteCar/>}/>
       <Route path="/car/save" element={<AddCar/>}/>
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
