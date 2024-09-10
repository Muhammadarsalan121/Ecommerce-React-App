import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Service from './pages/Service.jsx'
import Singlepage from './pages/Singlepage.jsx'

const router = createBrowserRouter([
  {
    pat : '/',
    element : <Layout />,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : 'About',
        element : <About />
      },
      {
        path : 'Contact',
        element : <Contact /> 
      },
      {
        path : 'Service',
        element : <Service/>
      },
      {
        path : 'Singlepage/:id',
        element : <Singlepage />
      },
      {
        path : '*',
        element : <h1>404 Not Found</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
  </RouterProvider>
)