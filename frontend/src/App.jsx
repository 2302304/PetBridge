import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AnimalList from "./pages/AnimalList";
import AnimalDetail from "./pages/AnimalDetail";

function App() {
  return (
    <Router>
      <header style={styles.header}>
        <h1 style={styles.title}>🐾 PetBridge</h1>
        <nav>
          <Link to="/" style={styles.navLink}>Etusivu</Link>
          <Link to="/animals" style={styles.navLink}>Eläimet</Link>
        </nav>
      </header>

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<h2>Tervetuloa PetBridge-palveluun!</h2>} />
          <Route path="/animals" element={<AnimalList />} />
          <Route path="/animals/:id" element={<AnimalDetail />} />
        </Routes>
      </main>

      <footer style={styles.footer}>
        <p>© 2025 PetBridge – Yhteys kodittomiin eläimiin</p>
      </footer>
    </Router>
  );
}

const styles = {
  header: {
    backgroundColor: "#2a9d8f",
    color: "white",
    padding: "15px 30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { margin: 0 },
  navLink: {
    color: "white",
    marginLeft: "20px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  main: { padding: "30px" },
  footer: {
    marginTop: "40px",
    backgroundColor: "#264653",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
  },
};

export default App;
