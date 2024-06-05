import NavBar from "./composant/Navbar";
import Footer from "./composant/Footer";
import Accueil from "./pages/Accueil";

export default function App() {
  return (
    <div className="homepage">
      <NavBar />
      <Accueil />
      <Footer />
    </div>
  );
}
