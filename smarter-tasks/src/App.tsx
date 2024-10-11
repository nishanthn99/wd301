import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute';
import { Notfound } from './pages/Notfound';

import Signup from './pages/signup';
import Signin from './pages/signin';
import Dashboard from './pages/Dashboard';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to='/signup' replace />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path:'/signin',
      element:<Signin/>
    },
    {
      path:'/notfound',
      element:<Notfound/>
    },
    {
      path: "*",
      element: <Navigate to="/notfound" replace />,
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
