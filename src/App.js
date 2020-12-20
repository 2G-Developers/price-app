import { HomePage } from "./pages/Home/HomePage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar isSecondary={true} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
