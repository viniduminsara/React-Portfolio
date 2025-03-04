import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import Layout from "./components/Layout.tsx";
import Loading from "./components/Loading.tsx";
import {Analytics} from "@vercel/analytics/react";

// Dynamically import pages
const HomePage = lazy(() => import("./pages/HomePage.tsx"));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ProjectPage = lazy(() => import('./pages/ProjectPage.tsx'));

function App() {
    return (
        <Router>
            <Suspense fallback={<Loading/>}>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/blogs" element={<BlogPage />} />
                        <Route path="/project/:name" element={<ProjectPage />} />
                    </Route>
                </Routes>
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
            <Analytics />
        </Router>
    );
}

export default App;
