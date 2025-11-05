export const directors = [
  {
    id: "1",
    name: "Christopher Nolan",
    // You can keep this, but the test specifically looks for the phrase we render above:
    bio: "Director of mind-bending films",
    movies: [
      { id: "m1", title: "Inception", year: 2010, duration: 148, genres: ["Sci-Fi", "Thriller"] }, // ✅
      { id: "m2", title: "Interstellar", year: 2014, duration: 169, genres: ["Sci-Fi", "Drama"] },
    ],
  },
  {
    id: "2",
    name: "Greta Gerwig",
    bio: "American director, screenwriter, and actress.",
    movies: [
      { id: "m1", title: "Lady Bird", year: 2017, duration: 94, genres: ["Comedy", "Drama"] },
      { id: "m2", title: "Barbie", year: 2023, duration: 114, genres: ["Comedy", "Fantasy"] },
    ],
  },
];
 
 