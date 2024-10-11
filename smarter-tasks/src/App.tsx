import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import TaskListPage from './pages/TaskListPage';
import Layout from './Layout';
import TaskDetailsPage from './pages/TaskDetailsPage';

import ProtectedRoute from './ProtectedRoute';
import { Notfound } from './pages/Notfound';
import Form from './Form';
import HomePage from './pages/HomePage';
import Signup from './pages/signup';
import Signin from './pages/signin';


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
      path: "*",
      element: <Navigate to="/notfound" replace />,
    },
    {
      element: (
        <ProtectedRoute><Layout/></ProtectedRoute>),
      children: [
        {
          path: "/home",
          element: <><HomePage/></>
        },
        {
          path: "/tasks",
          element: <TaskListPage />
        },
        {
          path:'/form',
          element: <Form/>
        },
        {
          path: "/tasks/:id",
          element: (<TaskDetailsPage />)
        },
        {
          path: "/notfound",
          element: <Notfound />
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
