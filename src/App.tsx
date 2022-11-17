import Home from "./pages/Result";
import Search from "./pages/Search";
import SearchProvider from "./context/searchContext";
function App() {
  return (
    <SearchProvider>
      <div>
        {/* <Home /> */}

        <Search />
      </div>
    </SearchProvider>
  );
}

export default App;
