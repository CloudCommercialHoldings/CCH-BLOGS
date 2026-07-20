---
layout: page
title: Inquiries
icon: fas fa-envelope
order: 5
---

<div class="card border-0 shadow-sm rounded-3 p-4 p-md-5 bg-glass">
  <div class="card-body p-0">
    <h2 class="h4 mb-3 text-primary fw-bold">Send an Inquiry</h2>
    <p class="text-muted mb-4">Have a project in mind, a question, or a business proposal? Fill out the form below, and we will get back to you as soon as possible.</p>

    <!--
      To receive form submissions in your email, sign up for a free account at https://formspree.io/
      Create a form, copy the Form ID, and replace 'YOUR_FORMSPREE_ID' in the action URL below.
    -->
    <form id="inquiryForm" action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" class="needs-validation" novalidate>
      <div class="row g-3">
        <!-- Name -->
        <div class="col-md-6">
          <label for="name" class="form-label text-muted small fw-semibold">Full Name</label>
          <input type="text" class="form-control rounded-2 border-muted" id="name" name="name" placeholder="John Doe" required>
          <div class="invalid-feedback">Please enter your name.</div>
        </div>

        <!-- Email -->
        <div class="col-md-6">
          <label for="email" class="form-label text-muted small fw-semibold">Email Address</label>
          <input type="email" class="form-control rounded-2 border-muted" id="email" name="email" placeholder="john@example.com" required>
          <div class="invalid-feedback">Please enter a valid email address.</div>
        </div>

        <!-- Subject -->
        <div class="col-12">
          <label for="subject" class="form-label text-muted small fw-semibold">Subject</label>
          <input type="text" class="form-control rounded-2 border-muted" id="subject" name="subject" placeholder="Project Inquiry / Business Proposal" required>
          <div class="invalid-feedback">Please specify a subject.</div>
        </div>

        <!-- Message -->
        <div class="col-12">
          <label for="message" class="form-label text-muted small fw-semibold">Message</label>
          <textarea class="form-control rounded-2 border-muted" id="message" name="message" rows="6" placeholder="Tell us about your project or inquiry details..." required></textarea>
          <div class="invalid-feedback">Please write a message.</div>
        </div>

        <!-- Submit Button -->
        <div class="col-12 mt-4">
          <button type="submit" id="submitBtn" class="btn btn-primary px-4 py-2 rounded-2 fw-semibold w-100 w-md-auto transition-all">
            <span id="btnText">Send Message</span>
            <span id="btnSpinner" class="spinner-border spinner-border-sm ms-2 d-none" role="status" aria-hidden="true"></span>
          </button>
        </div>
      </div>
    </form>

    <!-- Success & Error Alert Messages -->
    <div id="statusAlert" class="mt-4 alert d-none fade show rounded-2" role="alert">
      <div class="d-flex align-items-center">
        <span id="alertIcon" class="me-2"></span>
        <span id="alertMessage"></span>
      </div>
    </div>
  </div>
</div>

<style>
  /* Modern CSS enhancements */
  .bg-glass {
    background: var(--card-bg, rgba(255, 255, 255, 0.9));
    border: 1px solid var(--border-color, rgba(0, 0, 0, 0.05));
    transition: box-shadow 0.3s ease;
  }
  .form-control:focus {
    border-color: var(--primary-color, #0d6efd);
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.15);
  }
  .transition-all {
    transition: all 0.2s ease-in-out;
  }
  .transition-all:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

      if (!form.checkValidity()) {
        form.classList.add("needs-validation");
        form.classList.add("was-validated");
        return;
      }

      // If Formspree ID hasn't been set, guide the user
      if (form.getAttribute("action").includes("YOUR_FORMSPREE_ID")) {
        showAlert("danger", "Form submission is in placeholder mode. Please set up your Formspree Form ID in the inquiries.md file to enable email delivery.", "fas fa-exclamation-triangle");
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
  });
</script>
