import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDirectorsContext } from "./DirectorContainer";

/** Programmatic navigation: redirect to the new director's page after submit */
// src/pages/DirectorForm.jsx
// src/pages/DirectorShow.jsx
import { useParams, Link } from "react-router-dom";
import { directors } from "../data";

export default function DirectorForm() {
  return (
    <div>
      <h1>Add New Director</h1> {/* ✅ exact text */}
      <form>
        <input aria-label="name" placeholder="Name" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
} 

 