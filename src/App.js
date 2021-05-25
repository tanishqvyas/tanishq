import { Suspense, lazy } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
  // useLocation,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            {/* <Route exact path="/*" component={NotFoundPage} /> */}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
