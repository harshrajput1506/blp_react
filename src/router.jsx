import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Profile from "./components/Profile";
import Faqs from "./components/Faqs";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/profile",
        element:<Profile/>
    },

    {
        path:"/faq",
        element:<Faqs/>
    },

])

export default router