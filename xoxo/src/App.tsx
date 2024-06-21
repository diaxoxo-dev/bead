import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;