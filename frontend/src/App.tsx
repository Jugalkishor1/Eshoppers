import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { Notifications } from "./lib/notifications";

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Notifications />
    </BrowserRouter>
  );
}

export default App;
