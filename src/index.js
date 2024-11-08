import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/stylesheets/style.css';
import { HelmetProvider } from 'react-helmet-async';

import Cursor from './Cursor';
import Nav from './components/Nav';
import Footer from './components/Footer';
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

            <Route path="itsyipper" element={<ItsYipper />} />
            <Route path="stripes-nation" element={<StripesNation />} />
            <Route path="sonic-animation" element={<SonicAnimation />} />
            <Route path="edge-boards" element={<EdgeBoards />} />
        </>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <div id="main">
                <Nav />
                <RouterProvider router={router} />
                <Cursor />
            </div>
        </HelmetProvider>
    </React.StrictMode>
);