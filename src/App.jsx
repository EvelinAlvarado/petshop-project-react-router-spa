import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page404 } from "./pages/Page404.jsx";
import { Header } from "./components/Header.jsx";
import "./assets/css/base/base.css";
import "./assets/css/components/card.css";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Route default page 404*/}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
