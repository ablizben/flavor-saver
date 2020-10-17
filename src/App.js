import React from 'react';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';
import ForgotPassword from './pages/ForgotPassword.js';
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
// import Header from "./components/Header";
// import Menu from "./components/Menu";
// import Footer from "./components/Footer";

//Pages
// import AddPost from "./pages/AddPost";
// import Board from "./pages/Board";
// import Boards from "./pages/Boards";
// import Feed from "./pages/Feed";
// import Hashtag from "./pages/Hashtag";
// import Location from "./pages/Location";
// import Map from "./pages/Map";
// import Post from "./pages/Post";
// import Profile from "./pages/Profile";
// import Search from "./pages/Search";




function App() {
  return (
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div 
        className="w-100" 
        style={{ maxWidth: "400px" }}
      >
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>  
        </Router>
      </div>
    </Container>  
    
    
  );
}

export default App;
