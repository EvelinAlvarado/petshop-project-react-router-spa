import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page404 } from "./pages/Page404.jsx";
import { Header } from "./components/Header.jsx";
import { Post } from "./pages/Post.jsx";
import { Category } from "./pages/Category.jsx";
import "./assets/css/base/base.css";
import "./assets/css/components/card.css";

function App() {
  return (
    <>
      {/* Define routes for different pages */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/category/:id/*" element={<Category />} />
          {/* Default route for 404 page */}
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
