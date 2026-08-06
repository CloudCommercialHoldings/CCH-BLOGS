---
layout: page
title: Connect With Us!
icon: fas fa-envelope
order: 5
---

<!-- Load canvas-confetti library for the celebration animation -->
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>

<div class="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-glass mx-auto">

  <div class="card-body p-0">

    <div class="text-center mb-5">
      <h2 class="h3 text-primary fw-bold mb-3">
        Send an Inquiry
      </h2>

      <p class="text-muted mb-0">
        Have a project in mind, a question, or a business proposal?
        Fill out the form below and we will get back to you as soon as possible.
      </p>
    </div>


    <form 
      id="inquiryForm"
      action="https://formspree.io/f/mgvojjoz"
      method="POST"
      class="needs-validation"
      novalidate>


      <!-- Honeypot spam protection -->
      <input type="text" name="_gotcha" style="display:none">


      <div class="d-flex flex-column gap-4">


        <!-- Name -->
        <div>
          <label 
            for="name" 
            class="form-label text-muted small fw-semibold">
            Full Name
          </label>

          <input
            type="text"
            class="form-control form-control-lg rounded-3"
            id="name"
            name="name"
            placeholder="Bobby Kasim"
            required>

          <div class="invalid-feedback">
            Please enter your name.
          </div>
        </div>



        <!-- Email -->
        <div>
          <label 
            for="email" 
            class="form-label text-muted small fw-semibold">
            Email Address
          </label>

          <input
            type="email"
            class="form-control form-control-lg rounded-3"
            id="email"
            name="email"
            placeholder="Bobby.Kasim@example.com"
            required>

          <div class="invalid-feedback">
            Please enter a valid email address.
          </div>
        </div>



        <!-- Subject -->
        <div>
          <label 
            for="subject" 
            class="form-label text-muted small fw-semibold">
            Subject
          </label>

          <input
            type="text"
            class="form-control form-control-lg rounded-3"
            id="subject"
            name="subject"
            placeholder="Technology Advisory Request / Professional Services / Enterprise Technology Consultation "
            required>

          <div class="invalid-feedback">
            Please specify a subject.
          </div>
        </div>



        <!-- Message -->
        <div>
          <label 
            for="message" 
            class="form-label text-muted small fw-semibold">
            Message
          </label>

          <textarea
            class="form-control rounded-3"
            id="message"
            name="message"
            rows="7"
            placeholder="Tell us about your infrastructure, security concerns, or areas where you need assistance..."
            required></textarea>

          <div class="invalid-feedback">
            Please write a message.
          </div>
        </div>



        <!-- Submit Button -->
        <div class="pt-2">

          <button 
            type="submit"
            id="submitBtn"
            class="btn btn-primary btn-lg rounded-3 fw-semibold w-100 transition-all">

            <span id="btnText">
              <i class="fas fa-paper-plane me-2"></i>
              Send Message
            </span>

            <span 
              id="btnSpinner"
              class="spinner-border spinner-border-sm ms-2 d-none"
              role="status"
              aria-hidden="true">
            </span>

          </button>

        </div>


      </div>


    </form>



    <!-- Success & Error Alert Messages -->
    <div 
      id="statusAlert"
      class="mt-4 alert d-none fade show rounded-3"
      role="alert">

      <div class="d-flex align-items-center">

        <span id="alertIcon" class="me-2"></span>

        <span id="alertMessage"></span>

      </div>

    </div>


  </div>

</div>

<style>

.bg-glass {

  max-width: 850px;
  margin: 0 auto;

  background: var(--card-bg, rgba(255,255,255,0.9));

  border:
    1px solid var(--border-color, rgba(0,0,0,0.05));

  backdrop-filter:
    blur(12px);

  transition:
    all .3s ease;

}



.bg-glass:hover {

  transform:
    translateY(-3px);

  box-shadow:
    0 20px 40px rgba(0,0,0,.12);

}



/* Vertical input styling */

.form-control {

  width:100%;

  padding:
    0.95rem 1rem;

  border-radius:
    14px;

  font-size:
    1rem;

}



.form-control:focus {

  border-color:
    var(--primary-color,#0d6efd);

  box-shadow:
    0 0 0 .25rem rgba(13,110,253,.15);

}



/* Button animation */

.transition-all {

  transition:
    all .25s ease-in-out;

}



.transition-all:hover {

  transform:
    translateY(-2px);

  box-shadow:
    0 8px 18px rgba(13,110,253,.25);

}



/* Alert animation */

.alert {

  animation:
    fadeIn .3s ease;

}



@keyframes fadeIn {

  from {

    opacity:0;
    transform:translateY(-10px);

  }

  to {

    opacity:1;
    transform:translateY(0);

  }

}


</style>



<script>
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inquiryForm");
    const submitBtn = document.getElementById("submitBtn");
    const btnText = document.getElementById("btnText");
    const btnSpinner = document.getElementById("btnSpinner");
    const statusAlert = document.getElementById("statusAlert");
    const alertIcon = document.getElementById("alertIcon");
    const alertMessage = document.getElementById("alertMessage");

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      // Clear previous alerts
      statusAlert.classList.add("d-none");
      statusAlert.classList.remove("alert-success", "alert-danger");

      // Form validation
      if (!form.checkValidity()) {
        form.classList.add("needs-validation");
        form.classList.add("was-validated");
        return;
      }

      // If Formspree ID hasn't been set, guide the user
      if (form.getAttribute("action").includes("YOUR_FORMSPREE_ID")) {
        // Trigger temporary debug confetti so you can see it rain even in placeholder mode!
        triggerConfettiRain();
        showAlert("danger", "Form is in demo mode (Confetti works!). Please set up your Formspree Form ID in the inquiries.md file to enable actual email delivery.", "fas fa-info-circle");
        return;
      }

      // Start loading state
      submitBtn.disabled = true;
      btnSpinner.classList.remove("d-none");
      btnText.textContent = "Sending...";

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          // Trigger confetti rain celebration!
          triggerConfettiRain();
          showAlert("success", "Thank you! Your message has been sent successfully. We will get back to you shortly.", "fas fa-check-circle");
          form.reset();
          form.classList.remove("was-validated");
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              showAlert("danger", data["errors"].map(error => error.message).join(", "), "fas fa-times-circle");
            } else {
              showAlert("danger", "Oops! There was a problem submitting your form.", "fas fa-times-circle");
            }
          })
        }
      })
      .catch(error => {
        showAlert("danger", "Oops! There was a network connectivity issue. Please check your internet connection.", "fas fa-wifi");
      })
      .finally(() => {
        // Reset loading state
        submitBtn.disabled = false;
        btnSpinner.classList.add("d-none");
        btnText.textContent = "Send Message";
      });
    });

    function showAlert(type, message, iconClass) {
      statusAlert.classList.remove("d-none");
      statusAlert.classList.add(type === "success" ? "alert-success" : "alert-danger");
      alertIcon.innerHTML = `<i class="${iconClass}"></i>`;
      alertMessage.textContent = message;
      statusAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function triggerConfettiRain() {
      // Multiple bursts of confetti for a raining effect
      const duration = 2 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        // Confetti rains down from the top left and top right
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
      }, 250);
    }
  });
</script>
