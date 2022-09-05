import React from 'react';
import './styling/scss/App.scss';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ProjectsPage from './components/ProjectsPage';
import BlogPage from './components/BlogPage';
import NavBar from './components/individual/NavBar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="experience" element={<ResumePage />}/>
            <Route path="projects" element={<ProjectsPage />}/>
            <Route path="miniblog" element={<BlogPage />}/>
          </Routes>
        </div>
        
        <div className="navbar">
          <NavBar/>
        </div>
      </BrowserRouter>
    </div>
  );
}

