import { StoreContextProvider } from "./Context/StoreContextProvider";
import Home from "./Pages/Home";

function App() {
  return (
    <StoreContextProvider>
      <div className="App">
          <Home/>
      </div>
    </StoreContextProvider>
  );
}

export default App;
