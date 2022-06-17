import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
//React Router DOM is an npm package that enables you to implement dynamic routing in a web app.
//It allows you to display pages and allow users to navigate them.

// always when it's a component we should call it like <Navbar />
//switch <=> routes
// Switch is used to precise that we only need one router at a time
// pages <=> routes
// in switch we will define each page
// the switch will just change the page below the navbar depending on the route u go to
// the path in the route for the Home page is just "/" to represent that it's basically the page that opens automatically when you open the website
// exact to display the route when u have multiple routes
