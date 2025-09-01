function showMessage() {
  alert("Thanks for visiting my landing page! ");
}

// Load header
fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



    // Highlight active link
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  });

// Load footer
fetch("footer.html") .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
