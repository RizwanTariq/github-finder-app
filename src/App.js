import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
