import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SurveyForm from './pages/SurveyForm';
import AdminPanel from './pages/AdminPanel';
import Feedback from './pages/Feedback';
import Layout from './layout/Layout';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SurveyForm />} />

        {/* Admin Routes wrapped in Layout */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<AdminPanel />} />
          <Route path="feedback" element={<Feedback />} />
          {/* Add more admin routes below as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
