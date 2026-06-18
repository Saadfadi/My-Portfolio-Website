// Scroll pe Navbar change
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  // user ne scroll kiya — yeh function chale ga
  if (window.scrollY > 50) {
    // scrollY = kitne pixels neeche gaye
    // 50 se zyada gaye toh "scrolled" class add karo
    navbar.classList.add("scrolled"); // CSS mein .nav.scrolled hai — woh styling apply hogi
  } else {
    // wapis upar aaye — class hatao
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scroll + Active Link
const navbtns = document.querySelectorAll(".nav-btn");
const sections = document.querySelectorAll("section");

// Smooth scroll
navbtns.forEach((btn) => {
  // har nav link pe click listener lagao
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // preventDefault = browser ka default kaam rokna
    // default kaam = page jump karna — hum smooth karna chahte hain

    const target = document.querySelector(this.getAttribute("href"));
    // this = jis link pe click kiya
    // getAttribute('href') = "#skills" ya "#home" etc
    // document.querySelector("#skills") = woh section

    target.scrollIntoView({ behavior: "smooth" });
    // smoothly us section pe le jao

    Hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// Active link on scroll
// jab bhi user scroll kare — yeh code chale
window.addEventListener("scroll", () => {
  let current = ""; //Yeh ek "pocket" hai — jis section pe hain uska naam yahan store hoga. Abhi khali hai.
  sections.forEach((sec) => {
    //window.scrollY    = tum page pe kitna neeche ho (pixels mein)
    // jaise: 0 = bilkul upar, 800 = thoda neeche

    // sec.offsetTop     = woh section page ke top se kitna door hai
    //                 jaise: home = 0px, skills = 800px, projects = 1600px

    // - 100             = thodi si margin — section bilkul top pe
    //                 aane se pehle highlight ho jaye

    if (window.scrollY >= sec.offsetTop - 100) {
      current = sec.getAttribute("id");
      // jaise: current = "skills"
    }
  });
  // scroll karte karte current update hota rahega

  navbtns.forEach((btn) => {
    btn.classList.remove("active"); // pehle sab se hatao
    if (btn.getAttribute("href") === "#" + current) {
      btn.classList.add("active"); // sirf current wale pe lagao
    }
  });
});

// Scroll Animation
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 },
);

revealEls.forEach((el) => observer.observe(el));

// Hamburger menu
const Hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

Hamburger.addEventListener("click", () => {
  Hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});
