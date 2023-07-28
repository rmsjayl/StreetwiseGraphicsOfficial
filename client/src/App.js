//CLIENT
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

//WHEN SWITCHING PAGE: SCROLL TO TOP
import ScrollToTop from "./assets/ScrollToTop";

//FUNCTIONALITIES
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forgotpass from "./pages/Forgotpass";

//PAGES
import Maincontent from "./pages/Maincontent";
import Viewdesign from "./pages/Viewdesign";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Termsandcondition from "./pages/Termsandcondition";
import Faqs from "./pages/Faqs";
import Emailverify from "./pages/Emailverify";
import Passwordreset from "./pages/Passwordreset";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          {/* USER REGISTER, LOGIN, FORGOTPASSWORD */}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgotpassword" element={<Forgotpass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/:id/verify/:token" element={<Emailverify />} />
          <Route path="/users" element={<Emailverify />} />
          <Route path="/passwordreset/:id/:token" element={<Passwordreset />} />
          {user && (
            <>
              <Route exact path="/content" element={<Maincontent />} />
              <Route exact path="/designpage" element={<Viewdesign />} />
              <Route exact path="/aboutme" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route
                exact
                path="/termsandconditions"
                element={<Termsandcondition />}
              />
              <Route
                exact
                path="/frequentlyaskedquestions"
                element={<Faqs />}
              />
            </>
          )}
          <Route
            path="*"
            element={<Navigate to={user ? "/content" : "/login"} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
