import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './Container';
import AppBar from './AppBar';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import ContactsView from '../views/ContactsView';
import { authOperations } from '../redux/auth';

// const HomeView = lazy(() => import('../views/HomeView'));
// const RegisterView = lazy(() => import('../views/RegisterView'));
// const LoginView = lazy(() => import('../views/LoginView'));
// const ContactsView = lazy(() => import('../views/ContactsView'));
// const UploadView = lazy(() => import('./views/UploadView'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route exact path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
        {/* <PrivateRoute path="/contacts" redirectTo="/login">
        <ContactsView />
              </PrivateRoute> */}
      </Routes>
    </Container>
  );
}

export default App;
