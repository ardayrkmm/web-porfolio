import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Layout yang sudah kita buat
import Home from "./pages/Home";

import Project from "./pages/Project";
import Details from "./pages/DetailProject";
import "./assets/css/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project" element={<Project />} />

          <Route path="/project/:id" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
