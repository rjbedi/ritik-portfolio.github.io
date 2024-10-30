import {
    createBrowserRouter
} from "react-router-dom";
import React, { lazy } from "react";

const Home = lazy(() => import("../ui/Home1"));
const About = lazy(() => import("../ui/About"));
const Contact = lazy(() => import("../ui/Contact"));
const Work = lazy(() => import("../ui/Work"))


const allRoutes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/work',
                element: <Work />
            }
        ]
    }
];

const router = createBrowserRouter(allRoutes);
export default router;
