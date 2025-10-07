import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function AnimalDetail() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [form, setForm] = useState({ adopter_name: "", adopter_email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3001/animals/${id}`)
      .then((res) => setAnimal(res.data))
      .catch((err) => console.error("Virhe eläimen haussa:", err));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3001/animals/${id}/adopt`, form);
      setMessage(res.data.message);
      setForm({ adopter_name: "", adopter_email: "" });
    } catch (err) {
      setMessage("Virhe adoptiossa!");
      console.error(err);
    }
  };

  if (!animal) return <p>Ladataan...</p>;

  return (
    <div style={styles.container}>
      <img src={animal.image_url} alt={animal.name} style={styles.image} />
      <h2>{animal.name}</h2>
      <p><strong>Rotu:</strong> {animal.breed}</p>
      <p>{animal.description}</p>
      <p><strong>Status:</strong> {animal.status}</p>

      <hr />

      <h3>Adoptoi tämä eläin</h3>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Nimi"
          value={form.adopter_name}
          onChange={(e) => setForm({ ...form, adopter_name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Sähköposti"
          value={form.adopter_email}
          onChange={(e) => setForm({ ...form, adopter_email: e.target.value })}
          required
        />
        <button type="submit" style={styles.button}>Lähetä adoptiohakemus</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

const styles = {
  container: { maxWidth: "600px", margin: "auto", textAlign: "center" },
  image: { width: "100%", borderRadius: "10px", marginBottom: "15px" },
  form: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "15px" },
  button: {
    backgroundColor: "#2a9d8f",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AnimalDetail;
