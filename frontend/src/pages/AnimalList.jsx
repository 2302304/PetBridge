import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AnimalList() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((res) => setAnimals(res.data))
      .catch((err) => console.error("Virhe eläinten haussa:", err));
  }, []);

  return (
    <div>
      <h2>Adoptoitavat eläimet</h2>
      <div style={styles.grid}>
        {animals.map((a) => (
          <div key={a.id} style={styles.card}>
            <Link to={`/animals/${a.id}`} style={styles.link}>
              <img src={a.image_url} alt={a.name} style={styles.image} />
              <h3>{a.name}</h3>
              <p>{a.breed}</p>
              <p style={styles.desc}>{a.description}</p>
              <p>
                <strong>Status:</strong> {a.status}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
    transition: "transform 0.2s ease",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  desc: { color: "#555", fontSize: "0.9rem" },
};

export default AnimalList;
