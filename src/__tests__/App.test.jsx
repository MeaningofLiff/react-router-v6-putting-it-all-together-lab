// src/__tests__/App.test.jsx
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

// Small helper so every test renders inside a Router
function renderWithRouter(ui, { route = "/" } = {}) {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>);
}

beforeEach(() => {
  vi.restoreAllMocks();

  // Mock fetch for /directors
  global.fetch = vi.fn((url) => {
    if (url.includes("/directors")) {
      return Promise.resolve({
        ok: true,
        json: async () => [
          {
            id: "1",
            name: "Christopher Nolan",
            bio: "Director of mind-bending films.",
            movies: [
              { id: "m1", title: "Inception", time: 148, genres: ["Sci-Fi", "Thriller"] },
            ],
          },
        ],
      });
    }
    // default fallback so fetch is always a Promise
    return Promise.resolve({
      ok: true,
      json: async () => ({}),
    });
  });
});

describe("🎬 Movie Directory App - Vitest Suite", () => {
  it('renders Home component at root ("/")', async () => {
    renderWithRouter(<App />, { route: "/" });
    // Adjust to match your Home heading text
    expect(await screen.findByRole("heading", { name: /movie directory/i })).toBeInTheDocument();
  });

  // Keep this test ONLY if you actually have an /about route + link labeled "About".
  // Otherwise, comment it out or implement the route.
  it("navigates to About page when clicking About link", async () => {
    renderWithRouter(<App />, { route: "/" });

    const navbars = screen.getAllByRole("navigation");
    const navbar = navbars[0];

    const aboutLink = within(navbar).getByRole("link", { name: /^about$/i });
    fireEvent.click(aboutLink);

    await waitFor(() => {
      expect(screen.getByText(/about the movie directory/i)).toBeInTheDocument();
    });
  });

  it('displays directors list at "/directors"', async () => {
    renderWithRouter(<App />, { route: "/directors" });
    expect(await screen.findByText(/christopher nolan/i)).toBeInTheDocument();
  });

  it('navigates to DirectorForm on "/directors/new"', async () => {
    renderWithRouter(<App />, { route: "/directors/new" });
    expect(await screen.findByText(/add new director/i)).toBeInTheDocument();
  });

  it("navigates to a specific DirectorCard page", async () => {
    renderWithRouter(<App />, { route: "/directors/1" });
    expect(await screen.findByText(/director of mind-bending films/i)).toBeInTheDocument();
    expect(await screen.findByRole("link", { name: /inception/i })).toBeInTheDocument();
  });

  it('navigates to MovieForm at "/directors/1/movies/new"', async () => {
    renderWithRouter(<App />, { route: "/directors/1/movies/new" });
    const matches = await screen.findAllByText(/add new movie/i);
    expect(matches.length).toBeGreaterThan(0); // you may have a heading + button
  });

  it('renders MovieCard details correctly at "/directors/1/movies/m1"', async () => {
    renderWithRouter(<App />, { route: "/directors/1/movies/m1" });

    const movieTitleInstances = await screen.findAllByText(/inception/i);
    expect(movieTitleInstances.length).toBeGreaterThan(0);

    // Allow for an emoji before "Duration:" in your UI, focus on the meaningful text
    expect(await screen.findByText(/duration:\s*148 minutes/i)).toBeInTheDocument();
    expect(await screen.findByText(/sci-fi,\s*thriller/i)).toBeInTheDocument();
  });

  it('handles invalid director ID gracefully at "/directors/999"', async () => {
    renderWithRouter(<App />, { route: "/directors/999" });
    expect(await screen.findByText(/director not found/i)).toBeInTheDocument();
  });

  it('handles invalid movie ID gracefully at "/directors/1/movies/invalid"', async () => {
    renderWithRouter(<App />, { route: "/directors/1/movies/invalid" });
    expect(await screen.findByText(/movie not found/i)).toBeInTheDocument();
  });
});
 