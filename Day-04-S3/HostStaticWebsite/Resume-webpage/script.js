/* =========================================================
   ROHIT TAMBADKAR — DEVOPS PORTFOLIO
   All content below is derived directly from the résumé.
   Items marked isPlaceholder are NOT on the résumé — they are
   clearly labelled so Rohit can fill them in later.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  initLoader();
  initTheme();
  initNav();
  initScrollProgress();
  initScrollTop();
  initTypingAnimation();
  initTerminalBoot();
  renderSkills();
  renderProjects();
  initCounters();
  initRevealOnScroll();
  initActiveNavLink();
});

/* ---------------- Loader ---------------- */
function initLoader(){
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader.classList.add('hidden'), 900);
  });
  // Fallback in case 'load' already fired
  setTimeout(() => loader.classList.add('hidden'), 2500);
}

/* ---------------- Theme toggle (persisted) ---------------- */
function initTheme(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');
  const saved = localStorage.getItem('portfolio-theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  const applyTheme = (theme) => {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      root.removeAttribute('data-theme');
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  };

  applyTheme(saved || (prefersLight ? 'light' : 'dark'));

  toggle.addEventListener('click', () => {
    const isLight = root.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('portfolio-theme', next);
  });
}

/* ---------------- Nav: sticky bg + hamburger ---------------- */
function initNav(){
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive: true });

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------- Highlight active nav link on scroll ---------------- */
function initActiveNavLink(){
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* ---------------- Scroll progress bar ---------------- */
function initScrollProgress(){
  const bar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = `${scrolled}%`;
  }, { passive: true });
}

/* ---------------- Scroll to top button ---------------- */
function initScrollTop(){
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---------------- Hero typing animation ---------------- */
function initTypingAnimation(){
  const el = document.getElementById('typedRole');
  const roles = [
    'DevOps Engineer',
    'AWS · Terraform · Kubernetes',
    'Infrastructure as Code Enthusiast',
    'CI/CD Automation Builder'
  ];
  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick(){
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 40 : 65);
  }
  tick();
}

/* ---------------- Hero terminal boot animation ---------------- */
function initTerminalBoot(){
  const body = document.getElementById('terminalBody');
  const lines = [
    { text: '$ terraform init', delay: 300 },
    { text: 'Initializing provider plugins... done', delay: 500, color: 'var(--text-secondary)' },
    { text: '$ terraform apply', delay: 400 },
    { text: 'aws_vpc.main: Creating...', delay: 450, color: 'var(--text-secondary)' },
    { text: 'aws_instance.app: Creating...', delay: 450, color: 'var(--text-secondary)' },
    { text: 'aws_s3_bucket.assets: Creating...', delay: 450, color: 'var(--text-secondary)' },
    { text: 'Apply complete! 5 resources added.', delay: 500, color: 'var(--accent-green)' },
    { text: '$ kubectl rollout status deployment/app', delay: 400 },
    { text: 'deployment "app" successfully rolled out', delay: 500, color: 'var(--accent-green)' },
    { text: 'STATUS: ONLINE ●', delay: 300, color: 'var(--accent-teal)' },
  ];

  let i = 0;
  function typeLine(){
    if (i >= lines.length) {
      setTimeout(() => { body.textContent = ''; i = 0; typeLine(); }, 3000);
      return;
    }
    const line = lines[i];
    const span = document.createElement('div');
    if (line.color) span.style.color = line.color;
    body.appendChild(span);

    let c = 0;
    const interval = setInterval(() => {
      span.textContent = line.text.slice(0, c + 1);
      c++;
      if (c === line.text.length) {
        clearInterval(interval);
        i++;
        setTimeout(typeLine, line.delay);
      }
    }, 18);
  }
  typeLine();
}

/* ---------------- Data: Skills (grouped) ---------------- */
const SKILLS_DATA = [
  {
    category: 'Cloud (AWS)', icon: 'fa-solid fa-cloud', level: 78,
    tags: ['EC2', 'S3', 'IAM', 'VPC', 'Security Groups']
  },
  {
    category: 'Infrastructure as Code', icon: 'fa-solid fa-layer-group', level: 82,
    tags: ['Terraform', 'Ansible']
  },
  {
    category: 'Containers', icon: 'fa-brands fa-docker', level: 80,
    tags: ['Docker', 'Docker Compose']
  },
  {
    category: 'Kubernetes', icon: 'fa-solid fa-dharmachakra', level: 70,
    tags: ['Deployments', 'Services', 'Persistent Volumes']
  },
  {
    category: 'CI/CD', icon: 'fa-solid fa-arrows-spin', level: 75,
    tags: ['Jenkins', 'Maven', 'Bash Scripting']
  },
  {
    category: 'Linux', icon: 'fa-brands fa-linux', level: 80,
    tags: ['Ubuntu', 'CentOS', 'Shell/Cron']
  },
  {
    category: 'Monitoring', icon: 'fa-solid fa-chart-line', level: 60,
    tags: ['Prometheus', 'Grafana']
  },
  {
    category: 'Version Control', icon: 'fa-brands fa-git-alt', level: 82,
    tags: ['Git', 'GitHub']
  },
  {
    category: 'Networking', icon: 'fa-solid fa-network-wired', level: 55,
    tags: ['VPC Routing', 'Security Groups', 'UFW/Firewall'],
    isPlaceholder: true,
    note: 'Networking depth beyond VPC/firewall basics was not detailed on the résumé — add specifics (e.g. subnets, load balancers, DNS) if relevant.'
  },
  {
    category: 'Programming', icon: 'fa-solid fa-code', level: 0,
    tags: ['[Add: Python / Go / etc.]'],
    isPlaceholder: true,
    note: 'No programming language was listed on the résumé. Recruiters expect at least one scripting/programming language for DevOps roles.'
  },
  {
    category: 'Databases', icon: 'fa-solid fa-database', level: 0,
    tags: ['[Add: PostgreSQL / MySQL / DynamoDB]'],
    isPlaceholder: true,
    note: 'No database experience was listed on the résumé.'
  },
  {
    category: 'DevOps Practices', icon: 'fa-solid fa-infinity', level: 76,
    tags: ['IaC Automation', 'Config Management', 'Least-Privilege Access']
  }
];

function renderSkills(){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS_DATA.map(skill => `
    <div class="skill-card reveal ${skill.isPlaceholder ? 'placeholder-card' : ''}">
      <div class="skill-card-head">
        <i class="${skill.icon}"></i>
        <h3>${skill.category}</h3>
      </div>
      <div class="skill-tags">
        ${skill.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
      <div class="meter"><div class="meter-fill" data-level="${skill.level}"></div></div>
      <div class="meter-label"><span>Proficiency</span><span>${skill.level > 0 ? skill.level + '%' : 'Not listed'}</span></div>
      ${skill.isPlaceholder ? `<p class="placeholder-note" style="margin-top:10px;"><i class="fa-solid fa-pen"></i> ${skill.note}</p>` : ''}
    </div>
  `).join('');

  // Animate meters when visible
  const meters = grid.querySelectorAll('.meter-fill');
  const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = `${entry.target.dataset.level}%`;
        meterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  meters.forEach(m => meterObserver.observe(m));
}

/* ---------------- Data: Projects ---------------- */
const PROJECTS_DATA = [
  {
    title: 'Secure AWS Infrastructure with Terraform',
    icon: 'fa-brands fa-aws',
    impact: 'Automated 5+ AWS resources via Terraform — ~80% less provisioning time',
    description: 'End-to-end secure AWS infrastructure using Terraform following IaC best practices: least-privilege IAM roles, fine-grained Security Groups, and a locked-down S3 bucket.',
    tech: ['Terraform', 'AWS EC2', 'IAM', 'VPC', 'S3'],
    github: 'https://github.com/rohityt0dev/TerraformProject',
    demo: null
  },
  {
    title: 'Containerized Microservices with Kubernetes',
    icon: 'fa-solid fa-dharmachakra',
    impact: '3-pod multi-service deployment with zero-downtime rolling updates',
    description: 'Containerized a multi-service to-do application with Docker and deployed it on Kubernetes, defining Deployments, Services, and Persistent Volumes.',
    tech: ['Docker', 'Kubernetes', 'YAML Manifests'],
    github: null,
    demo: null
  },
  {
    title: 'AWS Infrastructure Setup',
    icon: 'fa-solid fa-server',
    impact: 'Production-style custom VPC with subnets, routing, and 3 IAM roles',
    description: 'Hands-on end-to-end AWS account setup from scratch: EC2 instances, S3 buckets, IAM roles, and a custom VPC via Console and CLI, with ongoing monitoring for uptime.',
    tech: ['AWS Console', 'AWS CLI', 'VPC', 'IAM'],
    github: null,
    demo: null
  },
  {
    title: 'Linux Server Automation',
    icon: 'fa-brands fa-linux',
    impact: '5+ daily sysadmin tasks automated — zero manual maintenance',
    description: 'Bash scripts to automate system updates, service monitoring, and log management, with cron jobs and UFW firewall rules on Ubuntu-based servers.',
    tech: ['Bash', 'Cron', 'UFW', 'Ubuntu'],
    github: null,
    demo: null
  },
  {
    title: 'Maven CI/CD Pipeline',
    icon: 'fa-solid fa-code-branch',
    impact: '~70% faster manual build-to-deploy time',
    description: 'Fully automated Jenkins + Maven CI/CD pipeline featuring real-time email notifications on build status, documented as a technical walkthrough.',
    tech: ['Jenkins', 'Maven', 'CI/CD'],
    github: null,
    demo: 'https://my-devops-automation-project.hashnode.dev/mavenflow-cicd'
  }
];

function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS_DATA.map(p => `
    <div class="project-card reveal">
      <div class="project-image">
        <i class="${p.icon}"></i>
        <span class="impact-badge">${p.impact}</span>
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tech-tags">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
        <div class="project-links">
          <a href="${p.github || '#'}" target="_blank" rel="noopener" class="${p.github ? '' : 'disabled'}">
            <i class="fa-brands fa-github"></i> ${p.github ? 'Code' : 'Repo not listed'}
          </a>
          <a href="${p.demo || '#'}" target="_blank" rel="noopener" class="${p.demo ? '' : 'disabled'}">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> ${p.demo ? 'Live Demo' : 'No demo link'}
          </a>
        </div>
      </div>
    </div>
  `).join('');
}

/* ---------------- Animated counters ---------------- */
function initCounters(){
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function animateCounter(el){
  const target = parseInt(el.dataset.target, 10);
  const duration = 1400;
  const start = performance.now();
  function step(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

/* ---------------- Fade-in reveal on scroll ---------------- */
function initRevealOnScroll(){
  // Re-query after dynamic content (skills/projects) has been injected
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(item => observer.observe(item));
}
