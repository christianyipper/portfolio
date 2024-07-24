import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/style.css';

import Cursor from './Cursor';
import Nav from './Nav';
import Footer from './Footer';
import HomePage from './HomePage';
import AboutPage from './about/AboutPage';
import ProjectsPage from './projects/ProjectsPage';
import ItsYipper from './itsyipper/ItsYipper';
import StripesNation from './stripes-nation/StripesNation';
import SonicAnimation from './sonic-animation/SonicAnimation';
import EdgeBoards from './edge-boards/EdgeBoards';
// import { useEffect } from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter( [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/about',
        element: <AboutPage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },

    {
        path: '/itsyipper',
        element: <ItsYipper />,
    },
    {
        path: '/stripes-nation',
        element: <StripesNation />,
    },
    {
        path: '/sonic-animation',
        element: <SonicAnimation />,
    },
    {
        path: '/edge-boards',
        element: <EdgeBoards />,
    },
] );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div id="main">
            <Nav />
            <RouterProvider router={router} />
            <Footer />
            <Cursor />
        </div>
    </React.StrictMode>
);
