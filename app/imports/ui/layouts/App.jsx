import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Club from '../pages/Club';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import Profiles from '../pages/Profiles';
import Projects from '../pages/Projects';
import Interests from '../pages/Interests';
import Home from '../pages/Home';
import Filter from '../pages/Filter';
import AddProject from '../pages/AddProject';
import FeatureRequest from '../pages/FeatureRequest';
import EditClub from '../pages/EditClub';
import Community from '../pages/Community';

/* Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => (
  <Router>
    <div className="d-flex flex-column min-vh-100">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/clublist" element={<Projects />} />
        <Route path="/club" element={<Club />} />
        <Route path="/community" element={<Community />} />
        <Route path="/editclub/:_id" element={<AdminProtectedRoute><EditClub /></AdminProtectedRoute>} />
        <Route path="/featurerequest" element={<ProtectedRoute><FeatureRequest /></ProtectedRoute>} />
        <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/filter" element={<ProtectedRoute><Filter /></ProtectedRoute>} />
        <Route path="/addclub" element={<ProtectedRoute><AddProject /></ProtectedRoute>} />
        <Route path="/notauthorized" element={<NotAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

/*
 * ProtectedRoute checks for Meteor login before routing to the requested page,
 * otherwise redirects to the signin page.
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/*
 * AdminProtectedRoute checks if the logged in user is an admin,
 * if not, redirects to not authorized page.
 */
const AdminProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  const isAdmin = isLogged && Roles.userIsInRole(Meteor.userId(), ['admin']);
  return isAdmin ? children : <Navigate to="/notauthorized" />;
};

// PropTypes for the ProtectedRoute component
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Home />,
};

// PropTypes for the AdminProtectedRoute component
AdminProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  children: <Home />,
};

export default App;
