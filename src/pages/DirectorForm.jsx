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
      <h2>Add New Director</h2>
      <form aria-label="add-director-form">
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
 