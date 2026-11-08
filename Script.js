
const thoughts = [
  {
    category: "Life",
    text: "Every sunrise brings a new opportunity to begin again.",
    author: "Daily Thoughts"
  },
  {
    category: "Motivation",
    text: "Dream big, work hard, and let your actions speak.",
    author: "Daily Thoughts"
  },
  {
    category: "Anime",
    text: "Your limits are only the beginning of your next adventure.",
    author: "Anime Inspiration"
  },
  {
    category: "Friendship",
    text: "True friendship turns ordinary moments into memories.",
    author: "Daily Thoughts"
  },
  {
    category: "Inspiration",
    text: "Be the reason someone believes in possibilities.",
    author: "Daily Thoughts"
  },
  {
    category: "Anime",
    text: "Even the longest journey begins with one brave step.",
    author: "Anime Inspiration"
  },
  {
    category: "Motivation",
    text: "Success begins when you refuse to give up.",
    author: "Daily Thoughts"
  }
];

let currentCategory = "All";
let lastIndex = -1;

const thoughtElement = document.getElementById("thought");
const categoryElement = document.getElementById("category");
const authorElement = document.getElementById("author");

function newThought() {
  const available = thoughts
    .map((thought, index) => ({ thought, index }))
    .filter(item =>
      currentCategory === "All" ||
      item.thought.category === currentCategory
    );

  if (available.length === 0) return;

  let choice;

  if (available.length === 1) {
    choice = available[0];
  } else {
    const options = available.filter(item => item.index !== lastIndex);
    choice = options[Math.floor(Math.random() * options.length)];
  }

  lastIndex = choice.index;

  categoryElement.textContent =
    choice.thought.category.toUpperCase();

  thoughtElement.textContent = choice.thought.text;
  authorElement.textContent = "— " + choice.thought.author;
}

document.getElementById("newThought")
  .addEventListener("click", newThought);

document.querySelectorAll("[data-category]")
  .forEach(button => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category;
      newThought();
    });
  });

newThought();

