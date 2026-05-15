import { createBrowserRouter } from "react-router";
import Contact from "../pages/Contact";
import Pricing from "../pages/Pricing";
import Home from "../pages/Home";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
              {
              path: '/contact',
              element: <Contact/>
          },
            {
                path: '/pricing',
                element: <Pricing />
            }
        ]
    }

])