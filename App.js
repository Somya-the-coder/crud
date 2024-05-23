import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar.js';
import Home from './components/Home.js';
import Register from './components/Register.js';
import Edit from './components/Edit.js';
import Details from './components/Details.js';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbaar />
      {/* instead of switch now routes is used */}
      <Routes>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} /> in REACT ROUTER V6 component is replaced by ELEMENT*/ }
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/view/:id" element={<Details />} />
      </Routes>
      {/* to redirect register page(open new page) we need to do routing in react */}
    </>
  );
}

export default App;
