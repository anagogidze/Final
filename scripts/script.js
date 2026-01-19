

//Burger bar

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".ul-nav a");

  if (!burger || !nav) {
    console.log("Burger or Nav not found");
    return;
  }

  function openMenu() {
    nav.classList.add("open");
    burger.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    nav.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }

  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
    burger.setAttribute(
      "aria-expanded",
      nav.classList.contains("open") ? "true" : "false"
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  //Fun Facts about Food

  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(response => response.json())
  .then(data => {
    document.getElementById("factText").textContent = data.text;
  })
  .catch(() => {
    document.getElementById("factText").textContent =
      "Could not load food fact ☕";
  });

});


//Cookies and errors


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const error = document.getElementById("error");
    const cookieBox = document.getElementById("cookieBox");
    const cookieBtn = document.getElementById("cookieBtn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const phoneRegex = /^\+9955\d{8}$/;

        if (!name || !email || !phone || !subject || !message) {
        error.textContent = "All fields are required!";
        error.style.color = "red";
        return;
        }

        if (!email.includes("@")) {
        error.textContent = "Email is not valid!";
        error.style.color = "red";
        return;
        }

        if (!phoneRegex.test(phone)) {
        error.textContent = "Phone must be in format +9955XXXXXXXX";
        error.style.color = "red";
        return;
        }

        error.style.color = "green";
        error.textContent = "Booking request sent successfully ☕";
        });

        if (cookieBox && cookieBtn) {
            if (localStorage.getItem("cookieAccepted") === "yes") {
                 cookieBox.style.display = "none";
             }

            cookieBtn.addEventListener("click", () => {
            localStorage.setItem("cookieAccepted", "yes");
            cookieBox.style.display = "none";
        });
    }
         
});

