import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Project from '@/pages/Project';
import { AnimatePresence } from 'framer-motion';

import Ventures from '@/pages/Ventures';
import Expertise from '@/pages/Expertise';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="ventures" element={<Ventures />} />
          <Route path="expertise" element={<Expertise />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;