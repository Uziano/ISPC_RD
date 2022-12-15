import './App.css';
import NavBar from './components/Navbar/NavBar'
import Inicio from './components/AboutUs/Inicio';
import Home from './components/User/Home';
//import NotasForm from './components/Notas/NotasForm';
import Login from './components/User/Login';
//import LoginRegistro from './components/User/LoginRegistro';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <NavBar />
      {/*<Inicio />*/}
      <Login />
      {/*<LoginRegistro />*/}
      {/*<NotasForm /> */}
      {/*<Home />*/}
      {/* <AboutUs /> */}
      {/* <Footer /> */}

    </>
  );
}

export default App;