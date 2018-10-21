import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Mentors from "./pages/Mentors";
import Expert from "./pages/Expert";
import About from "./pages/About";
import Search from "./pages/Search";
import SignIn from "./pages/Sign-In";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import SingleMentorsPage from "./pages/SearchMovisPage";

// import Title from "./components/Title";
// import MentorCard from "./components/MentorCard";

// import Movies from "./pages/Movies";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mentors" component={Mentors} />
        <Route exact path="/search" component={Search} />
        <Route extact path="/signIn" component={SignIn} />
        <Route extact path="/expert/:id" component={Expert} />
        {/* <Route path="/mentors/:id" component={SingleMentorsPage} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>
);

export default App;
