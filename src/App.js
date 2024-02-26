import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // useHistory,
  useLocation,
} from "react-router-dom";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Hdev from "./components/Hdev";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgot from "./components/Forgot";
import Contact from "./components/Contact";
import Contact2 from "./components/Contact2";
import Contact3 from "./components/Contact3";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Signin from "./components/Signin";
import Signupwe from "./components/Signupwe";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

/////////////////////////////////////////////////// scrool top
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  // const history = useHistory(); // Hook to access history object

  // Define routes where Navbar should not be shown
  // const noNavRoutes = [
  //   "/Login",
  //   "/Signup",
  //   "/Signin",
  //   "/Forgot",
  //   "/Contact",
  //   "/Contact2",
  //   "/Contact3",
  //   "/Signupwe",
  // ];

  // Function to check if Navbar should be hidden
  // const hideNavbar = () => {
  //   return noNavRoutes.includes(history.location.pathname);
  // };

  return (
    <BrowserRouter>
      <Router>
        <ScrollToTop />
        <Switch>
          {/* Render routes without Navbar */}
          {/* <Route path="/Login" render={() => <Login />} /> */}
          {/* <Route path="/Signin" render={() => <Signin />} /> */}
          {/* <Route path="/Signup" render={() => <Signup />} /> */}
          {/* <Route path="/Forgot" render={() => <Forgot />} /> */}
          {/* <Route path="/Contact" render={() => <Contact />} /> */}
          {/* <Route path="/Contact2" render={() => <Contact2 />} /> */}
          {/* <Route path="/Contact3" render={() => <Contact3 />} /> */}
          {/* <Route path="/Signupwe" render={() => <Signupwe />} /> */}

          {/* Render other routes with Navbar */}
          <Route path="/">
            {/* {!hideNavbar() && } */}
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Services" component={Services} />
              <Route path="/Blog" component={Blog} />
              <Route path="/Hdev" component={Hdev} />
              <Route path="/About" component={About} />
              <Route path="/Portfolio" component={Portfolio} />
              <Route path="/Login" component={Login} />
              <Route path="/Signup" component={Signup} />
              <Route path="/Forgot" component={Forgot} />
              <Route path="/Signin " component={Signin} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Contact2" component={Contact2} />
              <Route path="/Contact3" component={Contact3} />
              <Route path="/Signupwe" component={Signupwe} />
            </Switch>
          </Route>
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default App;
