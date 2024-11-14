document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for internal links
    document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  
    // Highlight active link on scroll
    const sections = document.querySelectorAll("section, main");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    window.addEventListener("scroll", () => {
      let current = "";
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active");
        }
      });
    });
  
    // Form Submission Message
    const form = document.querySelector("form");
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent actual form submission
      alert("Thank you for your feedback! We’ll get back to you soon.");
      form.reset();
    });
  });
  
  // Existing function for "Learn More" button
  function myFunction() {
    document.getElementById("demo").innerHTML = "Karoonnjhar mountain range is about 130km from Mithi and located on the northern edge of the Rann of Kutch. The mountain consists of granite rocks, one of the oldest rocks of the earth Karoonnjhar is approximately 19km in length and attains a height of 305 meters, smaller hills in the east are covered with sparse jungle, water springs, and streams. In the monsoon season, the rainwater pours down from the mountain and flows in more than twenty streams and it makes the environment lush green with beautiful scenic views.";
  }
  