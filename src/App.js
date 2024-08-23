// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Navbar.css";
import "./Footer.css";
import React from "react";
import MyNavbar from "../src/components/MyNavbar";
import MyFooter from "../src/components/MyFooter";
import Homepage from "../src/components/Homepage";
import Gallery from "../src/components/Gallery";


function App() {
  return (
    <div className="App">
      <header>
        <MyNavbar />
      </header>
      <main>
      <Homepage/>

      <Gallery title="Spider-Man" />
      <Gallery title="Lord of the Rings" />
      <Gallery title="Star Wars" />
      </main>

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
