import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoryGrid from "./components/storyGrid";
import Success from "./components/success";
import AdminDashboard from "./pages/adminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StoryGrid />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
