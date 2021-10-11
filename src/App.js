import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUser from './components/users/ViewUser'
import PageNotFound from './components/pages/PageNotFound';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <>
    <Router>
        <Navbar></Navbar>
    <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route exact path='/user/add'>
              <AddUser></AddUser>
          </Route>
          <Route exact path='/user/edit/:id'>
              <EditUser></EditUser>
          </Route>
          <Route exact path='/user/view/:id'>
              <ViewUser></ViewUser>
          </Route>
          <Route>
              <PageNotFound></PageNotFound>
          </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
