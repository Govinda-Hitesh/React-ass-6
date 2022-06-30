import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Student from "./Component/Student";
import NavBar from "./Component/navBar";
import Addstudent from "./Component/addStudent";
import Memory from "./Component/memory";
import "./Component/style.css";
import Edit from "./Component/Edit";
function App() {
  return (
    <Memory>
      <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student" element={<Student />} />
          <Route path="/addstudent" element={<Addstudent />} />
          <Route path="/Edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Memory>
  );
}
export default App;