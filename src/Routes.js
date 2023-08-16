import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import styles from './Routes.css'
import { Outlet } from "react-router-dom";

function Routes() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
    
  );
}

export default Routes;
