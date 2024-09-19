import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import { privateRouter, publicRouter } from './routes';
import ProtectedRoute from './components/ProtectedRoute';
import UserProvider from './store/UserContext';
import OverplayProvider from './store/OverplayContext';

/**
 * Main App component that sets up routing for the application
 * @returns {JSX.Element} The rendered application with routing setup
 */
function App() {
  return (
    <Router>
      <div className='App'>
        <UserProvider>
          <OverplayProvider>
            <Routes>
              /**
               * Renders private routes with protected access
               * @param {Array} privateRouter - An array of private route objects
               * @returns {Array} An array of Route components with protected access
               */
              {privateRouter.map((route, index) => {
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <ProtectedRoute>
                        <Page />
                      </ProtectedRoute>
                    }
                  />
                );
              })}
              /**
               * Maps over public routes and renders corresponding Route components
               * @param {Array} publicRouter - An array of route objects containing path and component information
               * @returns {Array} An array of Route components for each public route
               */
              {publicRouter.map((route, index) => {
                const Page = route.component;
                return (
                  <Route key={index} path={route.path} element={<Page />} />
                );
              })}
              <Route path='*' element={<Error />} />
            </Routes>
          </OverplayProvider>
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
