document.getElementById("menu-toggle").addEventListener("click", function () {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});

// Close menu when clicking on a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", function () {
    const menu = document.getElementById("mobile-menu");
    menu.classList.add("hidden"); // Hide menu
  });
});

// scroll to top
const scrollBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove("hidden");
    scrollBtn.classList.add("opacity-100");
  } else {
    scrollBtn.classList.add("hidden");
    scrollBtn.classList.remove("opacity-100");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//nesletter
document
  .getElementById("newsletterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    let emailInput = document.getElementById("emailInput");
    let successMessage = document.getElementById("successMessage");
    let emailValue = emailInput.value.trim();

    // Basic email validation
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      successMessage.classList.remove("hidden");
      emailInput.value = ""; // Clear input after success
    } else {
      alert("Please enter a valid email address.");
    }
  });
