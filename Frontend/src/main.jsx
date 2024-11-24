import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
<<<<<<< HEAD
import Events from './components/Events'
=======
import { store } from './store/store.js'
>>>>>>> 65c2f4a6e567ba792c5378196dbabcc442ee70ca

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: (
          // <AuthLayout authentication={false}>
              <Login />
          // </AuthLayout>
        )
      },
      {
        path: '/register',
        element: (
          // <AuthLayout authentication={false}>
              <Register />
          // </AuthLayout>
        )
      },
      {
        path: '/events',
        element: (
          // <AuthLayout authentication={false}>
              <Events/>
          // </AuthLayout>
        )
      }
    ]
  }
])

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Provider>
)
