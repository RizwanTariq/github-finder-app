import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";
import User from "./components/users/User";
import { GithubProvider } from "./context/github/GithubContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <main className="container mx-auto px-3 pb-12">
        <GithubProvider>
          <Routes>
            <Route path="/user/:login" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </GithubProvider>
      </main>
      <Footer />
    </div>
  );
}

export default App;
