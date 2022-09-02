import { Routes, Route, Link } from 'react-router-dom';
import { Index } from "./pages/Index";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      
    </div>
  )
}