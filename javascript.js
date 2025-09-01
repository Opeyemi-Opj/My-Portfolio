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

    // Toggle dropdown on mobile
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Function to handle responsiveness (no @media)
    function handleResize() {
      if (window.innerWidth > 768) {
        // Desktop view
        navLinks.classList.remove("mobile", "active");
        navLinks.style.display = "flex";
        toggle.style.display = "none";
      } else {
        // Mobile view
        navLinks.classList.add("mobile");
        navLinks.style.display = "none";
        toggle.style.display = "block";
      }
    }

    // Run once on load
    handleResize();

    // Run when window resizes
    window.addEventListener("resize", handleResize);

    // Highlight active link
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      }
    });
  });

const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // stop actual form submission
    message.style.display = "block"; // show success text
    form.reset(); // clear fields
  });


// Load footer
fetch("footer.html") .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
