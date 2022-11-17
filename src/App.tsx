import Home from "./pages/Result";
import Search from "./pages/Search";
import SearchProvider from "./context/searchContext";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
