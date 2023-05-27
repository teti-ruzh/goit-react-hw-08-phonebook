import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
// import AppBar from './AppBar/AppBar';
// import Home from '../pages/Home';
// import Login from '../pages/Login';
// import Register from '../pages/Register';
// import Contacts from '../pages/Contacts';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from '../redux/auth/authOperations';
import { selectIsRefreshing } from '../redux/auth/authSelectors';

// const HomeView = lazy(() => import('../views/HomeView'));
// const RegisterView = lazy(() => import('../views/RegisterView'));
// const LoginView = lazy(() => import('../views/LoginView'));
// const ContactsView = lazy(() => import('../views/ContactsView'));
// const UploadView = lazy(() => import('./views/UploadView'));

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const TasksPage = lazy(() => import('../pages/Contacts'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );

  // <Container>
  //   <AppBar />

  //   <Routes>
  //     <Route exact path="/" element={<Home />} />
  //     <Route path="/register" element={<Register />} />
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/contacts" element={<Contacts />} />
  //     {/* <PrivateRoute path="/contacts" redirectTo="/login">
  //     <ContactsView />
  //           </PrivateRoute> */}
  //   </Routes>
  // </Container>
}

export default App;
