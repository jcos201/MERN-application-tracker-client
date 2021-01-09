import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

import { Route, Switch} from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div className="App">
      <Header/>
      <main><Switch>
          <Route exact path="/" render={props =>
            <HomePage/>
          } />
          <Route exact path="/dashboard" render={props =>
            <DashboardPage />
          } />
          <Route exact path="/signup" render={props =>
            <SignupPage/>
          } />
          <Route exact path="/login" render={props =>
            <LoginPage/>
          } />
        </Switch></main>
      <Footer/>
    </div>
  );
}

export default App;
