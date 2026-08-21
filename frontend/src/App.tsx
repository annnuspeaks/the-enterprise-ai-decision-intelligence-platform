import AppRoutes from "./routes/index";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import BackToTop from "./components/layout/BackToTop/BackToTop";

function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
