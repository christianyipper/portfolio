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
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="projects" element={<ProjectsPage />} />

            <Route path="stripes-nation" element={<StripesNation />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div id="main">
            <Nav />
            <RouterProvider router={router} />
            <Cursor />
        </div>
    </React.StrictMode>
);