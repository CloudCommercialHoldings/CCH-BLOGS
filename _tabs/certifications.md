---
layout: page
title: Certifications
icon: fas fa-award
order: 6
---

<div class="d-flex flex-column flex-md-row align-items-center gap-5 my-4">
  <!-- Profile Photo -->
  <div class="flex-shrink-0">
    <img class="rounded-3 shadow object-fit-cover" loading="lazy" src="https://images.pexels.com/photos/10816007/pexels-photo-10816007.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=800" alt="Professional portrait photo" style="width: 14rem; height: 14rem;">
  </div>

  <!-- Content & Slider -->
  <div class="flex-grow-1 text-center text-md-start w-100">
    <h1 class="fw-bold mb-1">{{ site.social.name }}</h1>
    <p class="text-muted mb-4 fs-5">Cloud Professional · Microsoft Certified</p>

    <!-- Certification Slide Wrapper -->
    <div class="cert-wrapper position-relative" style="min-height: 180px;">
      
      <!-- Certification 1: AZ-900 -->
      <div class="cert-slide" id="cert-0">
        <div class="rounded-3 p-4 badge-glow d-inline-flex flex-column align-items-center align-items-md-start gap-3" style="background: rgb(30, 58, 95); width: 100%; max-width: 500px;">
          <div class="d-flex align-items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="flex-shrink-0">
              <rect width="40" height="40" rx="8" fill="#0078D4"></rect>
              <path d="M12 20l5 5 11-11" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <div class="text-start">
              <h2 class="h5 fw-bold text-white mb-0">Microsoft AZ-900</h2>
              <p class="text-sky mb-0 small">Azure Fundamentals</p>
            </div>
          </div>
          <p class="text-light-slate mb-0 text-start small">Validated expertise in cloud concepts, Azure services, security, privacy, compliance, and pricing.</p>
        </div>
      </div>

      <!-- Certification 2: AZ-104 -->
      <div class="cert-slide hidden" id="cert-1">
        <div class="rounded-3 p-4 badge-glow d-inline-flex flex-column align-items-center align-items-md-start gap-3" style="background: rgb(30, 58, 95); width: 100%; max-width: 500px;">
          <div class="d-flex align-items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" class="flex-shrink-0">
              <rect width="40" height="40" rx="8" fill="#0078D4"></rect>
              <path d="M12 20l5 5 11-11" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
            <div class="text-start">
              <h2 class="h5 fw-bold text-white mb-0">Microsoft AZ-104</h2>
              <p class="text-sky mb-0 small">Azure Administrator</p>
            </div>
          </div>
          <p class="text-light-slate mb-0 text-start small">Proven skills in managing Azure identities, governance, storage, compute, and virtual networks.</p>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  .badge-glow {
    box-shadow: 0 0 30px rgba(0, 120, 215, 0.35);
    border: 1px solid rgba(0, 120, 215, 0.2);
  }
  .cert-slide {
    /* 0.6 second transition speed as requested */
    transition: opacity 0.6s ease-in-out;
    position: absolute;
    inset: 0;
    width: 100%;
  }
  .cert-slide.hidden {
    opacity: 0;
    pointer-events: none;
  }
  .cert-slide:not(.hidden) {
    opacity: 1;
  }
  .text-sky {
    color: rgb(125, 211, 252);
  }
  .text-light-slate {
    color: rgb(203, 213, 225);
  }
</style>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.cert-slide');
    let current = 0;
    
    // Auto-slide every 4 seconds, with the 0.6s transition duration configured in CSS
    setInterval(() => {
      slides[current].classList.add('hidden');
      current = (current + 1) % slides.length;
      slides[current].classList.remove('hidden');
    }, 4000);
  });
</script>
