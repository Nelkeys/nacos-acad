import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Read from "./pages/Read";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* Ensures full-page reloads work */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/:title" element={<Read />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
