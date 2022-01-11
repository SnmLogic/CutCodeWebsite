import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Download from "./Pages/Download";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="download" element={<Download />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
