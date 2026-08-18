---
layout: page
title: Professional Training
icon: fas fa-graduation-cap
order: 7
courses:
  - id: 0
    title: "AWS Cloud Practitioner"
    subtitle: "AWS Certified Cloud Practitioner (CLF-C02)"
    image: "/assets/img/favicons/aws.png"
    price: "$399"
    duration: "4 Weeks (Self-Paced / Live Cohort)"
    gumroad_url: "https://cloudcommercialholdings.gumroad.com/l/aws-cloud-practitioner"
    short_desc: "Build foundational cloud skills with Amazon Web Services."
    learn: "This program provides a comprehensive introduction to cloud computing concepts, core Amazon Web Services (AWS) infrastructure, security models, database systems, and pricing strategies. You will master AWS billing practices, identity management, and the architectural principles that govern secure, resilient cloud setups."
    outcomes: "By completing this course, you will be prepared to pass the official AWS Certified Cloud Practitioner exam, navigate the AWS Management Console with confidence, design basic secure cloud infrastructures, and understand cloud economics and shared responsibility frameworks."
  - id: 1
    title: "Microsoft Azure Fundamentals"
    subtitle: "Microsoft Certified: Azure Fundamentals (AZ-900)"
    image: "/assets/img/favicons/azure.png"
    price: "$499"
    duration: "4 Weeks (Self-Paced / Live Cohort)"
    gumroad_url: "https://cloudcommercialholdings.gumroad.com/l/azure-fundamentals"
    short_desc: "Learn Microsoft's cloud platform, networking, identity, and core services."
    learn: "Explore the core components of Microsoft Azure, including virtual networks, virtual machines, cloud storage services, and active directory identity frameworks. This course emphasizes configuring network security groups (NSGs), understanding role-based access controls (RBAC), and monitoring subscription security baselines."
    outcomes: "You will achieve readiness for the AZ-900 exam and learn to audit Azure assets, configure secure network parameters, manage identities using Microsoft Entra ID (formerly Azure Active Directory), and optimize Azure services for compliance and billing efficiency."
  - id: 2
    title: "CompTIA CASP+"
    subtitle: "CompTIA Advanced Security Practitioner (CAS-004)"
    image: "/assets/img/favicons/casp.png"
    price: "$1,499"
    duration: "8 Weeks (Live Instruction & Lab Sandbox)"
    gumroad_url: "https://cloudcommercialholdings.gumroad.com/l/comptia-casp-plus"
    short_desc: "Advanced enterprise cybersecurity, architecture, governance, and operations."
    learn: "Master advanced security engineering, research, development, and risk management techniques for complex enterprise networks. This elite program covers threat modeling, cryptographic protocols, secure integration of SaaS/PaaS/IaaS nodes, secure software development lifecycles, and incident response automation."
    outcomes: "You will gain the skills required to design, secure, and run advanced enterprise network infrastructures, formulate security governance policies, perform threat hunting using SIEM tools, and successfully pass the high-stakes CompTIA CASP+ certification exam."
---

<!-- Gumroad overlay checkout script -->
<script src="https://gumroad.com/js/gumroad.js"></script>

<div class="text-center mb-5">
  <h1 class="fw-bold mb-3">Cloud & Cybersecurity & AI Training</h1>
  <p class="text-muted fs-5">Get hands-on training in AWS, Google Cloud, and Azure while building real-world cloud engineering and cybersecurity skills. We help you curate a career path around your goals, prepare for the demands of enterprise technology careers.</p>
</div>

<div class="row g-4 my-4 max-w-1100">
  {% for course in page.courses %}
  <div class="col-12 col-md-4">
    <div class="course-card rounded-4 border-0 overflow-hidden h-100 bg-glass text-start" data-id="{{ course.id }}">
      <div class="image-wrapper position-relative" style="height:220px; background-size:cover; background-position:center; background-image: url('{{ site.baseurl }}{{ course.image }}');">
        <span class="price-badge badge bg-primary position-absolute top-0 end-0 m-3 px-3 py-2 fs-6 rounded-pill shadow-sm">{{ course.price }}</span>
      </div>
      <div class="p-4 d-flex flex-column justify-content-between" style="min-height: 180px;">
        <div>
          <h2 class="h5 fw-bold text-white mb-2">{{ course.title }}</h2>
          <p class="text-muted small mb-0">{{ course.short_desc }}</p>
        </div>
        <div class="pt-3">
          <button class="btn btn-outline-primary btn-sm rounded-pill px-3 py-1 fw-semibold w-100">View Details</button>
        </div>
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<!-- Custom Glassmorphism Modal for Course Details -->
<div id="courseModal" class="course-modal-backdrop hidden">
  <div class="course-modal-content rounded-3 p-4 p-md-5">
    <button class="course-modal-close" id="modalCloseBtn">&times;</button>
    <div id="modalBody"></div>
  </div>
</div>

<style>
  .bg-glass {
    background: var(--card-bg, rgba(30, 41, 59, 0.95));
    border: 1px solid var(--border-color, rgba(0, 120, 215, 0.15));
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.35s ease;
    cursor: pointer;
  }
  
  .bg-glass:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 120, 215, 0.25);
    border-color: rgba(0, 120, 215, 0.4);
  }
  
  .max-w-1100 {
    max-width: 1100px;
    margin: 0 auto;
  }
  
  .course-modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(8px);
    z-index: 2000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  
  .course-modal-backdrop:not(.hidden) {
    opacity: 1;
    pointer-events: auto;
  }
  
  .course-modal-content {
    background: rgba(30, 41, 59, 0.95);
    border: 1px solid rgba(0, 120, 215, 0.3);
    box-shadow: 0 10px 40px rgba(0, 120, 215, 0.25);
    max-width: 650px;
    width: 100%;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
    transform: translateY(20px) scale(0.95);
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    color: #f8fafc;
  }
  
  .course-modal-backdrop:not(.hidden) .course-modal-content {
    transform: translateY(0) scale(1);
  }
  
  .course-modal-close {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 2rem;
    cursor: pointer;
    line-height: 1;
    transition: color 0.2s;
  }
  
  .course-modal-close:hover {
    color: #f8fafc;
  }
  
  .text-sky {
    color: rgb(125, 211, 252);
  }
  
  .text-light-slate {
    color: rgb(203, 213, 225);
  }

  .btn-enroll {
    background: linear-gradient(135deg, #FF90E8 0%, #FF5E5E 100%);
    color: #1a1a2e;
    border: none;
    font-weight: 700;
    letter-spacing: 0.3px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 4px 15px rgba(255, 94, 94, 0.35);
  }

  .btn-enroll:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 94, 94, 0.5);
    color: #1a1a2e;
  }

  .btn-enroll:active {
    transform: translateY(0);
  }
</style>

<script>
  (function () {
    const cards = document.querySelectorAll(".course-card");
    const modal = document.getElementById("courseModal");
    const modalBody = document.getElementById("modalBody");
    const closeBtn = document.getElementById("modalCloseBtn");
    
    if (!modal || !modalBody || !closeBtn) return;

    // Load serialized course JSON data
    const coursesData = {{ page.courses | jsonify }};

    cards.forEach(card => {
      card.addEventListener("click", () => {
        const id = parseInt(card.getAttribute("data-id"), 10);
        const course = coursesData.find(c => c.id === id);
        if (course) {
          openCourseDetails(course);
        }
      });
    });

    function openCourseDetails(course) {
      modalBody.innerHTML = `
        <div class="mb-4 text-start">
          <span class="badge bg-primary px-3 py-1.5 fs-6 rounded-pill mb-2 shadow-sm">${course.price}</span>
          <h2 class="h4 fw-bold text-white mb-1">${course.title}</h2>
          <p class="text-sky mb-0 small fw-semibold">${course.subtitle}</p>
        </div>

        <div class="text-start">
          <div class="mb-4">
            <h3 class="h6 fw-bold text-sky mb-2"><i class="fas fa-graduation-cap me-2"></i>What You'll Learn</h3>
            <p class="text-light-slate small lh-lg mb-0">${course.learn}</p>
          </div>
          
          <div class="mb-4">
            <h3 class="h6 fw-bold text-success mb-2"><i class="fas fa-check-circle me-2"></i>Expected Outcomes</h3>
            <p class="text-light-slate small lh-lg mb-0">${course.outcomes}</p>
          </div>
          
          <div class="pt-2 d-flex align-items-center justify-content-between bg-dark p-3 rounded-3 border border-secondary border-opacity-25">
            <div>
              <span class="text-muted small d-block">Duration</span>
              <span class="text-white fw-semibold small"><i class="far fa-clock me-1 text-sky"></i>${course.duration}</span>
            </div>
            <div>
              <span class="text-muted small d-block">Price</span>
              <span class="text-sky fw-bold fs-5">${course.price}</span>
            </div>
          </div>
        </div>

        <div class="d-flex align-items-center justify-content-between gap-2 mt-4 pt-3 border-top border-secondary border-opacity-25">
          <button class="btn btn-outline-secondary btn-sm px-4 rounded-2" id="modalCloseActionBtn">← Back</button>
          <a
            href="${course.gumroad_url}"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-enroll btn-lg px-5 rounded-pill"
            data-gumroad-single-product="true"
          >
            <i class="fas fa-shopping-cart me-2"></i>Enroll Now — ${course.price}
          </a>
        </div>
      `;

      modal.classList.remove("hidden");
      document.getElementById("modalCloseActionBtn").addEventListener("click", closeCourseDetails);
    }

    function closeCourseDetails() {
      modal.classList.add("hidden");
    }

    // Modal close events
    closeBtn.addEventListener("click", closeCourseDetails);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeCourseDetails();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeCourseDetails();
      }
    });
  })();
</script>
