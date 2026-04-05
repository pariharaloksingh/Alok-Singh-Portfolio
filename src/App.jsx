import React, { useState, useEffect } from "react";
import Navbar from "./common/Navbar";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Layout from "./Layout";
import AboutPage from "./Pages/AboutPage";
import ProjectsPage from "./Pages/ProjectsPage";

import SkillsPage from "./Pages/SkillsPage";
import ContactPage from "./Pages/ContactPage";
import NotFound from "./Pages/NotFound";


const App = () => {


   return (
    <BrowserRouter>
  
      <Routes>
         
     <Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="about" element={<AboutPage />} />
  <Route path="projects" element={<ProjectsPage/>} />
    {/* single project */}
  <Route path="skills" element={<SkillsPage
   />} />
  <Route path="contact" element={<ContactPage/>} />
  
</Route>

 <Route path="*" element={<NotFound />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;