import "./App.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import PrimeReact from "primereact/api";

import Header from "./Components/Header";
import List from "./Components/List";


function App() {
  PrimeReact.ripple = true;

  return (
    <div className="layout">
      <Header />
      <List />
    </div>
  );
}

export default App;
