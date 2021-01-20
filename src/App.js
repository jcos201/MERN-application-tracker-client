import { useState } from 'react';
import { getUser, logout } from './services/userService';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

import ApplicationsPage from './pages/DashboardPage/Applications';
import AddApplication from './pages/DashboardPage/Applications/AddApplication';
import EditApplication from './pages/DashboardPage/Applications/EditApplication';
import DeleteApplication from './pages/DashboardPage/Applications/DeleteApplication'

import JobSearchPage from './pages/DashboardPage/JobSearch';
import SavedSearch from './pages/DashboardPage/JobSearch/SavedSearch'

import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';



function App(props) {

  const [userState, setUserState] = useState({
    user: getUser(),
  });

  function handleSignupOrLogin() {
    setUserState({
      user: getUser(),
    })
  };

  function handleLogout() {
    logout();

    setUserState( { user: null });
    
    props.history.push('/');
  }


  return (
    <div className="App">
      <Header handleLogout={handleLogout} user={userState.user} />
      <main><Switch>
          <Route exact path="/" render={props =>
            <HomePage/>
          } />
          <Route exact path="/dashboard" render={props =>
            userState.user ? 
            <DashboardPage user={userState.user} />
            :
            <Redirect to ="/login" />
          } />
          <Route exact path="/signup" render={props =>
            <SignupPage 
            {...props} 
            handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
          <Route exact path="/login" render={props =>
            <LoginPage 
            {...props} 
            handleSignupOrLogin={handleSignupOrLogin}
            />
          } />
          <Route exact path="/applications" render={props =>
            <ApplicationsPage 
            {...props}
            user={userState.user}  /> 
          } />
          <Route exact path="/addapplication" render={props =>
            <AddApplication
            {...props}
            user={userState.user}  /> 
          } />
          <Route exact path="/edit/:id" render={props =>
            <EditApplication
            {...props}
            user={userState.user}
              /> 
          } />
          <Route exact path="/delete/:id" render={props =>
            <DeleteApplication
            {...props}
            user={userState.user}
              />
          } />
          <Route exact path="/jobsearch" render={props =>
            <JobSearchPage
            {...props}
            user={userState.user}  /> 
          } />
          <Route exact path="/search/:id" render={props =>
            <SavedSearch
            {...props}
            user={userState.user}  /> 
          } />
        </Switch></main>
      <Footer/>
    </div>
  );
}

export default withRouter(App);
