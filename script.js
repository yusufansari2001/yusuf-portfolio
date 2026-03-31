const config = {
  resumeUrl: "https://drive.google.com/file/d/12I6xpV-m4I6fPzPg4tiUD4bpH71EOq_2/view?usp=sharing",
  skills: [
    {
      icon: "server",
      title: "Backend and Java Ecosystem",
      description:
        "Java, Spring Boot, Spring Cloud, Maven, Gradle, REST APIs, microservices architecture."
    },
    {
      icon: "stream",
      title: "Data and Messaging",
      description:
        "Redis, Apache Kafka, RabbitMQ, event-driven communication, async workflows."
    },
    {
      icon: "cloud",
      title: "Cloud and DevOps",
      description:
        "Docker, CI/CD, Jenkins, AWS (S3, EC2, Lambda, RDS, DynamoDB), deployment readiness."
    },
    {
      icon: "agent",
      title: "Agentic AI",
      description:
        "Agent orchestration, tool calling, workflow control using LangChain and LangGraph."
    },
    {
      icon: "spark",
      title: "GenAI Development",
      description:
        "LLM application development, prompt strategy, retrieval patterns, and response evaluation."
    },
    {
      icon: "design",
      title: "Core Engineering Fundamentals",
      description: "System Design, DSA, LLD, HLD, performance tuning, maintainable design choices."
    }
  ],
  experience: [
    {
      icon: "briefcase",
      title: "Java Developer | Tata Consultancy Services (TCS)",
      description:
        "Dec 2023 - Present | Hyderabad, Telangana. Build and optimize backend telecom provisioning services using Java and Spring Boot, with focus on scalable APIs, data validation workflows, and reliable system integration across multi-vendor environments.",
      tech: ["Java", "Spring Boot", "Microservices", "Oracle SQL", "Redis", "Kafka", "JUnit", "Jenkins"]
    }
  ],
  achievements: [
    {
      icon: "trophy",
      title: "Modernized Legacy Backend Architecture",
      description:
        "Refactored monolithic Java services into modular Spring Boot components, improving maintainability by around 40% and accelerating feature delivery across backend workflows.",
      tech: ["Java", "Spring Boot", "Modular Architecture"]
    },
    {
      icon: "shield",
      title: "Built Reliable Telecom Validation and Reconciliation Engines",
      description:
        "Designed scalable 3-way matching and provisioning validation logic for multi-vendor telecom inventory, reducing configuration risk and improving execution reliability.",
      tech: ["System Integration", "Validation Rules", "Reliability"]
    },
    {
      icon: "automation",
      title: "Improved Release Confidence with Automation",
      description:
        "Implemented API regression checks and Jenkins-based CI/CD automation to detect service behavior changes early and reduce manual deployment and issue triage effort.",
      tech: ["Jenkins", "CI/CD", "Regression Testing"]
    }
  ],
  certifications: [
    {
      icon: "badge",
      title: "AWS Certified Cloud Practitioner",
      description: "Foundational cloud certification validating AWS platform, security, and architecture basics.",
      tech: ["AWS", "Cloud"],
      link: "https://www.credly.com/badges/19750322-f347-42f9-933f-ac544c5d7546"
    },
    {
      icon: "badge",
      title: "AI Practitioner",
      description: "Certification covering core AI concepts and practical AI/ML application fundamentals.",
      tech: ["AI", "ML"],
      link: "https://www.credly.com/badges/2b9765f5-bf00-491f-a390-405a2e8c2f2a"
    }
  ],
  projects: [
    {
      icon: "bank",
      title: "Enterprise Banking Platform",
      description: "High-throughput backend services with secure APIs, transaction workflows, and modular architecture.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
    },
    {
      icon: "agent",
      title: "Agentic Job Search Assistant",
      description: "AI agent that discovers jobs using search tools, reasons over results, and returns structured recommendations.",
      tech: ["LangChain", "LangGraph", "Groq", "Python"]
    },
    {
      icon: "spark",
      title: "GenAI Resume Optimizer",
      description: "LLM-powered utility to tailor resumes against role descriptions and generate improvement suggestions.",
      tech: ["GenAI", "Prompt Engineering", "Backend APIs"]
    }
  ],
  codingProfiles: [
    {
      icon: "code",
      title: "LeetCode",
      description: "Track my coding practice, problem-solving consistency, and algorithmic growth.",
      link: "https://leetcode.com/u/yousuf89/"
    },
    {
      icon: "code",
      title: "GeeksforGeeks",
      description: "My profile for DSA practice, coding articles, and technical learning progress.",
      link: "https://www.geeksforgeeks.org/profile/mdyousufasif6"
    }
  ]
};

const ICONS = {
  server: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h16v5H4zM4 14h16v5H4z"/><circle cx="8" cy="7.5" r="1"/><circle cx="8" cy="16.5" r="1"/></svg>`,
  stream: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 7h6M13 7h6M5 12h4M11 12h4M17 12h2M5 17h8M15 17h4" stroke-linecap="round"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 11a3.5 3.5 0 0 0 1 7z"/></svg>`,
  agent: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l2.4 4.8L20 10l-4 3.9.9 5.6-4.9-2.6-4.9 2.6.9-5.6L4 10l5.6-2.2z"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8zM5 14l.9 2.4L8.3 17l-2.4.9L5 20.3l-.9-2.4L1.7 17l2.4-.6z"/></svg>`,
  design: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18l7-12 3 5 2-3 4 10H4z"/></svg>`,
  briefcase: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16v10H4zM9 8V6h6v2"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4h10v4a5 5 0 0 1-10 0zM5 6h2v2a3 3 0 0 1-3 3V8a2 2 0 0 0 1-2zm14 0h-2v2a3 3 0 0 0 3 3V8a2 2 0 0 1-1-2zM10 17h4v3h-4z"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-2.7 8-7 10-4.3-2-7-5.5-7-10V6z"/></svg>`,
  automation: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v4l3-3M12 19v-4l-3 3M19 12h-4l3-3M5 12h4l-3 3" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5"/></svg>`,
  badge: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l3 2.2 3.7.3 1 3.6 2.3 3-2.3 3-1 3.6-3.7.3L12 21l-3-2.2-3.7-.3-1-3.6-2.3-3 2.3-3 1-3.6 3.7-.3zM9.5 12.5l1.7 1.7 3.3-3.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  bank: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9l9-5 9 5H3zM5 10v7M9 10v7M15 10v7M19 10v7M3 19h18"/></svg>`,
  code: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" stroke-linecap="round" stroke-linejoin="round"/></svg>`
};

function renderSkills() {
  const skillGrid = document.getElementById("skill-grid");
  skillGrid.innerHTML = "";

  config.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="icon-badge">${ICONS[skill.icon] || ICONS.code}</span>
        <h3>${skill.title}</h3>
      </div>
      <p>${skill.description}</p>
    `;
    skillGrid.appendChild(card);
  });
}

function renderCardSection(gridId, records) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";

  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = `project-card ${gridId === "experience-grid" ? "experience-card" : ""}`;

    const chips = (record.tech || [])
      .map((item) => `<span class="chip">${item}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-top">
        <span class="icon-badge">${ICONS[record.icon] || ICONS.code}</span>
        <h3>${record.title}</h3>
      </div>
      <p>${record.description}</p>
      <div class="project-tech">${chips}</div>
      ${record.link ? `<div class="project-tech"><a class="btn btn-outline" href="${record.link}" target="_blank" rel="noopener">View Credential</a></div>` : ""}
    `;

    grid.appendChild(card);
  });
}

function renderProjects() {
  const projectGrid = document.getElementById("project-grid");
  projectGrid.innerHTML = "";

  config.projects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const chips = project.tech
      .map((item) => `<span class="chip">${item}</span>`)
      .join("");

    card.innerHTML = `
      <div class="card-top">
        <span class="icon-badge">${ICONS[project.icon] || ICONS.code}</span>
        <h3>${project.title}</h3>
      </div>
      <p>${project.description}</p>
      <div class="project-tech">${chips}</div>
    `;

    projectGrid.appendChild(card);
  });
}

function renderCodingProfiles() {
  const grid = document.getElementById("coding-grid");
  grid.innerHTML = "";

  config.codingProfiles.forEach((profile) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML = `
      <div class="card-top">
        <span class="icon-badge">${ICONS[profile.icon] || ICONS.code}</span>
        <h3>${profile.title}</h3>
      </div>
      <p>${profile.description}</p>
      <div class="project-tech">
        <a class="btn btn-outline" href="${profile.link}" target="_blank" rel="noopener">Open Profile</a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function attachResumeLink() {
  document.querySelectorAll(".resume-link").forEach((link) => {
    link.href = config.resumeUrl;
  });
}

function handleProfilePhotoFallback() {
  const image = document.getElementById("profile-photo");
  const fallback = document.getElementById("profile-fallback");

  image.addEventListener("error", () => {
    image.style.display = "none";
    fallback.style.display = "grid";
  });
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderSkills();
renderProjects();
renderCardSection("experience-grid", config.experience);
renderCardSection("achievement-grid", config.achievements);
renderCardSection("certification-grid", config.certifications);
renderCodingProfiles();
attachResumeLink();
handleProfilePhotoFallback();
setYear();
