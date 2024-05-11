import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';



import App from './App';
import { HomePage, ContactPage } from './pages';


const router = createBrowserRouter([
    // Todo: Define the accessible routes, and which components respond to which URL
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: '/Contact',
          element: <ContactPage />
        }
      ]
    }
  ]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
