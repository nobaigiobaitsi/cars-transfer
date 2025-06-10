import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Fleet from "./pages/Fleet";
import Layout from './components/Layout';
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/fleet" element={<Layout><Fleet /></Layout>} />
        <Route path="/contactPage" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;