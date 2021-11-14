import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import Create from './Create';
import EventsListPage from './EventsListPage';
import SignUp from './SignUp';
import Login from './Login';
import { AuthProvider } from './customHooks/AuthContext';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import EventsDetails from './EventsDetails';
import UpdateEvent from './UpdateEvent';
import MyEvents from './MyEvents';
import SearchEvents from './SearchEvents';
import VerifyEmail from './VerifyEmail';
import EmailNotVerified from './EmailNotVerified';
import ChangePassword from './ChangePassword';
import UpdateEmail from './UpdateEmail';
import UserPreview from './UserPreview';
import NearYou from './NearYou';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Navbar />
          {/* <SearchEvents /> */}
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/events/:id">
                <EventsDetails />
              </Route>
              <Route path="/events">
                <EventsListPage />
              </Route>
              <ProtectedRoute path="/myevents">
                <MyEvents />
              </ProtectedRoute>
              <ProtectedRoute path="/updateevent/:id">
                <UpdateEvent />
              </ProtectedRoute>
              <ProtectedRoute path="/create">
                <Create />
              </ProtectedRoute>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <ProtectedRoute path="/forgotpassword">
                <ForgotPassword />
              </ProtectedRoute>
              <ProtectedRoute path="/updateprofile">
                <UpdateProfile />
              </ProtectedRoute>
              <ProtectedRoute path="/updateemail">
                <UpdateEmail />
              </ProtectedRoute>
              <ProtectedRoute path="/changepassword">
                <ChangePassword />
              </ProtectedRoute>
              <ProtectedRoute path="/verifyemail">
                <VerifyEmail />
              </ProtectedRoute>
              <Route path="/notverified">
                <EmailNotVerified />
              </Route>
              <ProtectedRoute path="/user/:id">
                <UserPreview />
              </ProtectedRoute>
              <Route path="/nearyou">
                <NearYou />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
