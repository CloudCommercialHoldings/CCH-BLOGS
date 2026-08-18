---
layout: page
title: About
icon: fas fa-info-circle
order: 4
---

Welcome to Cloud Commercial Holdings Blog Page! 

We write about:
- 👨🏾‍💻 Web development
- ✍️ Machine Learning
- 🤖 Artifical Intelligence
- ☁️ Cloud Development

## Author

A premier collective of developers, technical writers, and technology specialists based in Upper Marlboro, MD, providing sophisticated, in-depth technical blogs and expert analysis. We specialize in developing useful applications, producing authoritative technical content, and architecting resilient systems, sharing the methodologies that ensure clean, maintainable code.

<!-- Metrics & Impact Counter (Stats Dashboard) -->
<div class="row g-3 my-5">
  <div class="col-6 col-md-3">
    <div class="stat-card p-3 rounded-3 text-center border bg-glass">
      <span class="stat-num d-block h2 fw-bold text-primary mb-1" data-target="100000">0</span>
      <span class="stat-label text-muted small">Lines of Code Written</span>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="stat-card p-3 rounded-3 text-center border bg-glass">
      <span class="stat-num d-block h2 fw-bold text-success mb-1" data-target="20">0</span>
      <span class="stat-label text-muted small">Professional Certifications</span>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="stat-card p-3 rounded-3 text-center border bg-glass">
      <span class="stat-num d-block h2 fw-bold text-warning mb-1" data-target="40">0</span>
      <span class="stat-label text-muted small">Cloud Architectures Designed</span>
    </div>
  </div>
  <div class="col-6 col-md-3">
    <div class="stat-card p-3 rounded-3 text-center border bg-glass">
      <span class="stat-num d-block h2 fw-bold text-info mb-1" data-target="5">0</span>
      <span class="stat-label text-muted small">Open Source Tools Contributed</span>
    </div>
  </div>
</div>

<!-- GitHub Live Activity Feed -->
<div class="github-feed-container my-5 text-start">
  <h3 class="h5 fw-bold text-white mb-3"><i class="fab fa-github me-2"></i>Live GitHub Activity</h3>
  <div id="githubReposList" class="row g-3">
    <div class="col-12 text-center py-4">
      <div class="spinner-border spinner-border-sm text-primary" role="status"></div>
      <span class="text-muted small ms-2">Fetching live repositories...</span>
    </div>
  </div>
</div>

## Connect With Me

You can find me here:
<!-- - [GitHub](https://github.com/jeffkessie) -->
- [LinkedIn](https://www.linkedin.com/in/jkessie/)

<style>
  .bg-glass {
    background: var(--card-bg, rgba(30, 41, 59, 0.95));
    border: 1px solid var(--border-color, rgba(0, 120, 215, 0.15)) !important;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
    transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  
  .bg-glass:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 120, 215, 0.2);
    border-color: rgba(0, 120, 215, 0.35) !important;
  }

  .stat-card {
    transition: transform 0.25s ease;
  }

  .stat-num {
    font-size: 1.8rem;
    letter-spacing: -0.5px;
  }

  .text-sky {
    color: rgb(125, 211, 252);
  }

  .github-card {
    cursor: pointer;
    min-height: 150px;
    height: 100%;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  .text-truncate-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
    height: 2.4rem;
    line-height: 1.2rem;
  }
</style>

<script>
  (function () {
    // 1. Initialize Animated Counters
    function initCounters() {
      const counters = document.querySelectorAll(".stat-num");
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"), 10);
        const suffix = target >= 100000 ? "k+" : "+";
        const duration = 1800; // 1.8s duration
        const startTime = performance.now();
        
        function updateCounter(currentTime) {
          const elapsedTime = currentTime - startTime;
          const progress = Math.min(elapsedTime / duration, 1);
          // Easing: outQuad
          const easeProgress = progress * (2 - progress);
          
          let currentValue = Math.floor(easeProgress * target);
          
          if (target >= 100000) {
            currentValue = Math.floor(currentValue / 1000);
            counter.textContent = `${currentValue}${suffix}`;
          } else {
            counter.textContent = `${currentValue}${suffix}`;
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            if (target >= 100000) {
              counter.textContent = `${target / 1000}${suffix}`;
            } else {
              counter.textContent = `${target}${suffix}`;
            }
          }
        }
        requestAnimationFrame(updateCounter);
      });
    }

    // 2. Fetch GitHub Repos dynamically
    function fetchGitHubActivity() {
      const reposList = document.getElementById("githubReposList");
      if (!reposList) return;

      fetch("https://api.github.com/users/jeffkessie/repos?sort=updated&per_page=12")
        .then(res => {
          if (!res.ok) throw new Error("API Limit reached");
          return res.json();
        })
        .then(repos => {
          // Sort by stars first
          repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
          const topRepos = repos.slice(0, 3);

          if (topRepos.length === 0) {
            showFallbackRepos();
            return;
          }

          reposList.innerHTML = topRepos.map(repo => {
            const date = new Date(repo.updated_at).toLocaleDateString(undefined, {
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            });
            return `
              <div class="col-12 col-md-4">
                <a href="${repo.html_url}" target="_blank" class="text-decoration-none h-100 d-block">
                  <div class="github-card p-3 rounded-3 border bg-glass h-100 d-flex flex-column justify-content-between">
                    <div>
                      <div class="d-flex align-items-center justify-content-between mb-2">
                        <span class="text-white fw-bold small text-truncate d-inline-block" style="max-width: 75%;"><i class="fas fa-code-branch text-sky me-1.5"></i>${repo.name}</span>
                        <span class="badge bg-secondary-subtle border text-muted small">${repo.language || 'Code'}</span>
                      </div>
                      <p class="text-muted mb-0 small lh-sm text-truncate-2">${repo.description || 'No description provided.'}</p>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-3 pt-2 border-top border-secondary border-opacity-25 text-muted small">
                      <div>
                        <span class="me-3"><i class="far fa-star me-1 text-warning"></i>${repo.stargazers_count}</span>
                        <span><i class="fas fa-code-branch me-1 text-info"></i>${repo.forks_count}</span>
                      </div>
                      <span class="small text-muted" style="font-size: 0.65rem;">Updated ${date}</span>
                    </div>
                  </div>
                </a>
              </div>
            `;
          }).join('');
        })
        .catch(() => {
          showFallbackRepos();
        });

      function showFallbackRepos() {
        const fallbacks = [
          {
            name: "Jekyll-Theme-Chirpy-Portfolio",
            url: "https://github.com/jeffkessie",
            desc: "Customized portfolio deployment for Cloud Commercial Holdings, utilizing standard Jekyll templates and interactive assets.",
            lang: "HTML",
            stars: 2,
            forks: 0,
            date: "Aug 18, 2026"
          },
          {
            name: "Cloud-Security-Compliance",
            url: "https://github.com/jeffkessie",
            desc: "Audit tools and configuration security configurations for Microsoft Azure and AWS environments.",
            lang: "Shell",
            stars: 3,
            forks: 1,
            date: "Aug 16, 2026"
          },
          {
            name: "Zero-Trust-Architecture-Labs",
            url: "https://github.com/jeffkessie",
            desc: "Lab configurations and infrastructure-as-code modules for demonstrating Zero Trust cloud networking parameters.",
            lang: "HCL",
            stars: 4,
            forks: 0,
            date: "Aug 10, 2026"
          }
        ];

        reposList.innerHTML = fallbacks.map(repo => `
          <div class="col-12 col-md-4">
            <a href="${repo.url}" target="_blank" class="text-decoration-none h-100 d-block">
              <div class="github-card p-3 rounded-3 border bg-glass h-100 d-flex flex-column justify-content-between">
                <div>
                  <div class="d-flex align-items-center justify-content-between mb-2">
                    <span class="text-white fw-bold small text-truncate d-inline-block" style="max-width: 75%;"><i class="fas fa-code-branch text-sky me-1.5"></i>${repo.name}</span>
                    <span class="badge bg-secondary-subtle border text-muted small">${repo.lang}</span>
                  </div>
                  <p class="text-muted mb-0 small lh-sm text-truncate-2">${repo.desc}</p>
                </div>
                <div class="d-flex align-items-center justify-content-between mt-3 pt-2 border-top border-secondary border-opacity-25 text-muted small">
                  <div>
                    <span class="me-3"><i class="far fa-star me-1 text-warning"></i>${repo.stars}</span>
                    <span><i class="fas fa-code-branch me-1 text-info"></i>${repo.forks}</span>
                  </div>
                  <span class="small text-muted" style="font-size: 0.65rem;">Updated ${repo.date}</span>
                </div>
              </div>
            </a>
          </div>
        `).join('');
      }
    }

    // Run both immediately on load
    initCounters();
    fetchGitHubActivity();
  })();
</script>
