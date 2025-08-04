import "./App.css";
import EditorPage from "./Pages/EditorPage/EditorPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrintPage from "./Pages/EditorPage/PrintPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<EditorPage />} />
          <Route path="/print" element={<PrintPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
