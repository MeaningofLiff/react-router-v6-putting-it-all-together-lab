// src/pages/MovieForm.jsx
export default function MovieForm() {
  return (
    <form style={{ display: "grid", gap: 8, maxWidth: 420 }}>
      <h2>Add New Movie</h2>

      <label>
        Title
        <input required value="" readOnly />
      </label>

      <label>
        Duration (minutes)
        <input type="number" min="1" value="0" readOnly />
      </label>

      <label>
        Genres (comma separated)
        <input value="" readOnly />
      </label>

      <button type="submit">Add Movie</button>
    </form>
  );
}
 