import { createBrowserRouter, RouterProvider } from 'react-router';
import ReactDOM from "react-dom/client";
import Root from './layouts/Root';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import '../src/index.css'
import '../src/App.css'



const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'login',
        Component: Login,
      }
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

