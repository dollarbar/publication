
import { Navbar } from "./components/Navbar2";
import { Routes, Route } from 'react-router-dom';

import Home from "@/pages/Home";
import Articles from "@/pages/Articles";
import About from "@/pages/About";


export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] flex flex-col">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>

      
  );
}