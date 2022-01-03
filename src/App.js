import Footer from "./components/layout/Footer";
import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavBar />
      <main className="container mx-auto px-3 pb-12">Content</main>
      <Footer />
    </div>
  );
}

export default App;
