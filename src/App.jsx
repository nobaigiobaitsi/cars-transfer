import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import { Link } from "react-router-dom";
import Layout from './components/Layout';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/fleet" element={<Layout><Fleet /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;