function showMessage() {
  alert("Thanks for visiting my landing page! ");
}

fetch("header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const toggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

   
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    function handleResize() {
      if (window.innerWidth > 768) {
  
        navLinks.classList.remove("mobile", "active");
        navLinks.style.display = "flex";
        toggle.style.display = "none";
      } else {
        
        navLinks.classList.add("mobile");
        navLinks.style.display = "none";
        toggle.style.display = "block";
      }
    }
  
    handleResize();

    window.addEventListener("resize", handleResize);

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
    e.preventDefault(); 
    message.style.display = "block"; 
    form.reset(); 
  });


fetch("footer.html") .then(response => response.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
