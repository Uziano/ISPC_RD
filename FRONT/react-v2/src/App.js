import './App.css';
import NavBar from './components/Navbar/NavBar'
import Inicio from './components/AboutUs/Inicio';
import Home from './components/User/Home';
import NotasForm from './components/Notas/NotasForm';
//import AboutUs from './components/AboutUs.js/aboutUs';


function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <NotasForm />
      {/* <Home /> */}
      {/*<AboutUs />*/}
    </>
  );
}

export default App;
