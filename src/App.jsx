import "./App.css";
import Layout from "./Layout";
import Testpage from "./Testpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/test" element={<Testpage />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
