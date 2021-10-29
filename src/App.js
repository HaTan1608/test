import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <Router>
      
        <Header/>
        <Switch>
        <Route path='/' exact component={HomePage} />
        </Switch>
        <Footer/>
    </Router>
  );
}

export default App;
