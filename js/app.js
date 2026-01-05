(function () {
  "use strict";

  const genreSelect = document.getElementById("genre");
  const recBox = document.getElementById("recommendations");
  const form = document.getElementById("signupForm");

  // If this JS loads on other pages, safely exit.
  if (!genreSelect || !recBox || !form) return;

  const recommendationsByGenre = {
    "Fiction": [
      "The Alchemist — Paulo Coelho",
      "1984 — George Orwell",
      "The Kite Runner — Khaled Hosseini"
    ],
    "Fantasy": [
      "The Hobbit — J.R.R. Tolkien",
      "Harry Potter — J.K. Rowling",
      "The Name of the Wind — Patrick Rothfuss"
    ],
    "Mystery": [
      "Gone Girl — Gillian Flynn",
      "Sherlock Holmes — Arthur Conan Doyle",
      "The Girl with the Dragon Tattoo — Stieg Larsson"
    ],
    "Self-Help": [
      "Atomic Habits — James Clear",
      "The 7 Habits of Highly Effective People — Stephen R. Covey",
      "Deep Work — Cal Newport"
    ],
    "Non-Fiction": [
      "Sapiens — Yuval Noah Harari",
      "Educated — Tara Westover",
      "Thinking, Fast and Slow — Daniel Kahneman"
    ]
  };

  function renderRecommendations(genre) {
    const list = recommendationsByGenre[genre] || [];
    if (list.length === 0) {
      recBox.innerHTML = `<p class="muted">Select a genre to see suggestions.</p>`;
      return;
    }

    const items = list.map(item => `<li>${item}</li>`).join("");
    recBox.innerHTML = `
      <p><strong>Recommended for ${genre}:</strong></p>
      <ul class="bullets">${items}</ul>
      <p class="note">These are sample recommendations generated using basic JavaScript.</p>
    `;
  }

  // Update recommendations when genre changes
  genreSelect.addEventListener("change", function () {
    renderRecommendations(genreSelect.value);
  });

  // Prevent actual submission (since no backend)
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully (front-end only). Check recommendations below.");
  });
})();
