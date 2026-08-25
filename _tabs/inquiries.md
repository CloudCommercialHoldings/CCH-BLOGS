---
layout: page
title: Inquiries
icon: fas fa-calendar-alt
order: 5
---

<!-- Load canvas-confetti library for celebration animation -->
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>

<div class="card border-0 shadow-lg rounded-4 p-4 p-md-5 bg-glass mx-auto text-center" style="max-width: 750px;">
  
  <div class="mb-4">
    <span class="badge bg-primary-subtle text-primary border border-primary-subtle px-3 py-2 rounded-pill small fw-semibold mb-2">
      <i class="fas fa-calendar-check me-1.5"></i> Schedule via QR Code
    </span>
    <h1 class="h2 fw-bold text-white mb-2">Scan to Schedule a Meeting</h1>
    <p class="text-muted small max-w-600 mx-auto">
      Scan the QR code below with your smartphone camera to a 1-on-1 consultation or project discovery call.
    </p>
  </div>

  <!-- Category Selector Pills -->
  <div class="mb-4">
    <label class="form-label text-muted small fw-semibold d-block mb-2.5">
      Select Meeting Topic (Updates QR Code Live):
    </label>
    <div class="d-flex flex-wrap justify-content-center gap-2" id="topicSelector">
      <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 active" data-topic="Cloud Architecture Consultation" data-slug="cloud-architecture">
        ☁️ Cloud Architecture Assesment
      </button>
      <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-2" data-topic="Cybersecurity Audit Review" data-slug="cybersecurity-audit">
        🛡️ Cybersecurity NIST, FISMA, HIPPA, COBIT
      </button>
      <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-2" data-topic="Course & Resume Coaching" data-slug="resume-coaching">
        🎓 Course & Coaching
      </button>
      <button type="button" class="btn btn-outline-primary btn-sm rounded-pill px-3 py-2" data-topic="Business Proposal & Discovery" data-slug="discovery-call">
        💼 Business Electronic Discovery
      </button>
    </div>
  </div>

  <!-- Main QR Code Display Frame -->
  <div class="qr-container position-relative my-4 p-4 rounded-4 mx-auto d-inline-block bg-dark-subtle border border-secondary border-opacity-25 shadow-lg">
    <!-- Pulse badge -->
    <div class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-success px-3 py-1 text-white shadow-sm small">
      <i class="fas fa-calendar-alt me-1 fa-sm"></i> Calendly Ready
    </div>

    <!-- Frame corner markers for scanner aesthetic -->
    <div class="scanner-corner corner-tl"></div>
    <div class="scanner-corner corner-tr"></div>
    <div class="scanner-corner corner-bl"></div>
    <div class="scanner-corner corner-br"></div>

    <!-- QR Code Image -->
    <div class="qr-image-wrapper p-3 bg-white rounded-3 shadow-inner d-inline-block">
      <img id="qrCodeImg" src="" alt="Scan Calendly QR Code" class="img-fluid rounded-2" style="width: 220px; height: 220px;">
    </div>

    <div class="mt-3">
      <span class="text-sky font-monospace small" id="qrTopicLabel">
        <i class="fas fa-tag me-1"></i>Topic: Cloud Architecture Consultation
      </span>
    </div>
  </div>

  <!-- Mobile & Desktop Fallback Direct Action Buttons -->
  <div class="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-3">
    <a id="directCalendlyBtn" href="https://calendly.com/jeffkessie450/30min/30min" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg rounded-pill px-4 fw-semibold shadow-sm w-100 w-sm-auto">
      <i class="fas fa-external-link-alt me-2"></i>Book Directly on Calendly
    </a>
    
    <button id="copyCalendlyBtn" class="btn btn-outline-light btn-lg rounded-pill px-4 fw-semibold w-100 w-sm-auto">
      <i class="far fa-copy me-2"></i>Copy Scheduling Link
    </button>
  </div>

  <!-- Toast/Status Alert -->
  <div id="statusAlert" class="alert alert-success d-none mt-4 rounded-3 text-start mb-0 fade show" role="alert">
    <i class="fas fa-check-circle me-2"></i><span id="statusMessage">Calendly link copied to clipboard!</span>
  </div>

  <!-- Direct Link Disclosure
  <div class="mt-4 pt-3 border-top border-secondary border-opacity-25 text-center text-muted small">
    Direct Calendly URL: <a id="calendlyTextLink" href="https://calendly.com/jeffkessie450/30min/30min" target="_blank" class="text-sky text-decoration-none font-monospace">https://calendly.com/jeffkessie450/30min/30min</a>
  </div> -->

</div>

<style>
  .bg-glass {
    background: var(--card-bg, rgba(30, 41, 59, 0.95));
    border: 1px solid var(--border-color, rgba(0, 120, 215, 0.2));
    backdrop-filter: blur(12px);
  }

  .qr-container {
    background: rgba(15, 23, 42, 0.85) !important;
    max-width: 340px;
    width: 100%;
  }

  .qr-image-wrapper {
    transition: transform 0.3s ease;
  }

  .qr-container:hover .qr-image-wrapper {
    transform: scale(1.03);
  }

  /* Scanner aesthetic corner markers */
  .scanner-corner {
    position: absolute;
    width: 20px;
    height: 20px;
    border-color: #0078D4;
    border-style: solid;
  }
  .corner-tl { top: 10px; left: 10px; border-width: 3px 0 0 3px; border-top-left-radius: 6px; }
  .corner-tr { top: 10px; right: 10px; border-width: 3px 3px 0 0; border-top-right-radius: 6px; }
  .corner-bl { bottom: 10px; left: 10px; border-width: 0 0 3px 3px; border-bottom-left-radius: 6px; }
  .corner-br { bottom: 10px; right: 10px; border-width: 0 3px 3px 0; border-bottom-right-radius: 6px; }

  .text-sky {
    color: rgb(125, 211, 252);
  }

  .max-w-600 {
    max-width: 600px;
  }
</style>

<script>
  (function () {
    const baseCalendlyUrl = "https://calendly.com/jeffkessie450/30min";
    const qrImg = document.getElementById("qrCodeImg");
    const topicLabel = document.getElementById("qrTopicLabel");
    const directCalendlyBtn = document.getElementById("directCalendlyBtn");
    const copyCalendlyBtn = document.getElementById("copyCalendlyBtn");
    const statusAlert = document.getElementById("statusAlert");
    const statusMessage = document.getElementById("statusMessage");
    const topicButtons = document.querySelectorAll("#topicSelector button");
    const calendlyTextLink = document.getElementById("calendlyTextLink");

    if (!qrImg || !directCalendlyBtn) return;

    let activeCalendlyUrl = baseCalendlyUrl;

    function updateQRCode(topic, slug) {
      // Build Calendly URL with topic query or specific event slug
      activeCalendlyUrl = `${baseCalendlyUrl}?topic=${encodeURIComponent(slug)}`;
      
      // Generate clean QR code using QR server API pointing to Calendly URL
      const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&color=0f172a&data=${encodeURIComponent(activeCalendlyUrl)}`;
      
      qrImg.src = qrApiUrl;
      topicLabel.innerHTML = `<i class="fas fa-tag me-1"></i>Topic: ${topic}`;
      directCalendlyBtn.href = activeCalendlyUrl;
      if (calendlyTextLink) {
        calendlyTextLink.href = activeCalendlyUrl;
        calendlyTextLink.textContent = activeCalendlyUrl;
      }
    }

    // Initialize default Calendly QR Code
    updateQRCode("Cloud Architecture Consultation", "cloud-architecture");

    // Topic selector click events
    topicButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        topicButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const topic = btn.getAttribute("data-topic");
        const slug = btn.getAttribute("data-slug");
        updateQRCode(topic, slug);
      });
    });

    // Copy Calendly link button event
    copyCalendlyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(activeCalendlyUrl).then(() => {
        showStatus(`Copied Calendly link to clipboard!`);
        triggerConfetti();
      }).catch(() => {
        showStatus(`Calendly URL: ${activeCalendlyUrl}`);
      });
    });

    // Direct Calendly booking click celebration
    directCalendlyBtn.addEventListener("click", () => {
      triggerConfetti();
    });

    function showStatus(msg) {
      statusMessage.textContent = msg;
      statusAlert.classList.remove("d-none");
      setTimeout(() => {
        statusAlert.classList.add("d-none");
      }, 4000);
    }

    function triggerConfetti() {
      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  })();
</script>
