import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <body className="min-h-screen bg-primary">
        {/* Navbar */}
        <Navbar />
        <main>
          <Hero />
          <About />
          <Menu />
          <Footer />
        </main>
      </body>
    </>
  )
}

export default App
