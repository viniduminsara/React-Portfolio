import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import HomePage from "./pages/HomePage.tsx";
import {Toaster} from "react-hot-toast";
import Layout from "./components/Layout.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/projects" element={<ProjectsPage/>}/>
                    <Route path="/blog" element={<BlogPage/>}/>
                </Route>
            </Routes>
            <Toaster position="top-right" reverseOrder={false} />
        </Router>
    );
}

export default App;
