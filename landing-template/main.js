// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector("#nav-menu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu on link click (mobile)
  menu.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.tagName === "A") {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Footer year
const yearEl = document.querySelector("#year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Pricing toggle
let billing = "monthly";
const toggleBtns = document.querySelectorAll("[data-billing]");
const priceEls = document.querySelectorAll(".price-val");

function renderPrices() {
  priceEls.forEach((el) => {
    const monthly = el.getAttribute("data-price-monthly");
    const yearly = el.getAttribute("data-price-yearly");
    const val = billing === "yearly" ? yearly : monthly;
    el.textContent = val === null ? el.textContent : `$${val}`;
  });
}

toggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    billing = btn.getAttribute("data-billing") || "monthly";

    toggleBtns.forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    renderPrices();
  });
});

renderPrices();

// Resend email integration
async function sendEmail(event) {
  event.preventDefault();
  const emailInput = document.getElementById('email');
  const email = emailInput.value;

  if (!email) {
    alert('Please enter your email.');
    return;
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_jCFZAA6k_DK334doUvKhGTmrmha6iSfqm`, // Replace with your actual API key
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'kn1fehands@vetgang.com', // Replace with your verified domain
        to: email,
        subject: 'Thank you for your interest!',
        html: '<p>Hi there,<br><br>Thank you for signing up. We\'ll be in touch soon!<br><br>Best,<br>Christopher Gray</p>'
      })
    });

    if (response.ok) {
      alert('Thank you! Check your email for confirmation.');
      emailInput.value = '';
    } else {
      const error = await response.json();
      alert('Error sending email: ' + error.message);
    }
  } catch (error) {
    alert('Network error. Please try again later.');
  }
}
