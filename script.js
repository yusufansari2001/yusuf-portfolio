const config = {
  resumeUrl: "https://drive.google.com/file/d/12I6xpV-m4I6fPzPg4tiUD4bpH71EOq_2/view?usp=sharing",
  skills: [
    {
      title: "Backend and Java Ecosystem",
      description:
        "Java, Spring Boot, Spring Cloud, Maven, Gradle, REST APIs, microservices architecture."
    },
    {
      title: "Data and Messaging",
      description:
        "Redis, Apache Kafka, RabbitMQ, event-driven communication, async workflows."
    },
    {
      title: "Cloud and DevOps",
      description:
        "Docker, CI/CD, Jenkins, AWS (S3, EC2, Lambda, RDS, DynamoDB), deployment readiness."
    },
    {
      title: "Agentic AI",
      description:
        "Agent orchestration, tool calling, workflow control using LangChain and LangGraph."
    },
    {
      title: "GenAI Development",
      description:
        "LLM application development, prompt strategy, retrieval patterns, and response evaluation."
    },
    {
      title: "Core Engineering Fundamentals",
      description: "System Design, DSA, LLD, HLD, performance tuning, maintainable design choices."
    }
  ],
  experience: [
    {
      title: "Java Developer | Tata Consultancy Services (TCS)",
      description:
        "Dec 2023 - Present | Hyderabad, Telangana. Build and optimize backend telecom provisioning services using Java and Spring Boot, with focus on scalable APIs, data validation workflows, and reliable system integration across multi-vendor environments.",
      tech: ["Java", "Spring Boot", "Microservices", "Oracle SQL", "Redis", "Kafka", "JUnit", "Jenkins"]
    }
  ],
  achievements: [
    {
      title: "Modernized Legacy Backend Architecture",
      description:
        "Refactored monolithic Java services into modular Spring Boot components, improving maintainability by around 40% and accelerating feature delivery across backend workflows.",
      tech: ["Java", "Spring Boot", "Modular Architecture"]
    },
    {
      title: "Built Reliable Telecom Validation and Reconciliation Engines",
      description:
        "Designed scalable 3-way matching and provisioning validation logic for multi-vendor telecom inventory, reducing configuration risk and improving execution reliability.",
      tech: ["System Integration", "Validation Rules", "Reliability"]
    },
    {
      title: "Improved Release Confidence with Automation",
      description:
        "Implemented API regression checks and Jenkins-based CI/CD automation to detect service behavior changes early and reduce manual deployment and issue triage effort.",
      tech: ["Jenkins", "CI/CD", "Regression Testing"]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Foundational cloud certification validating AWS platform, security, and architecture basics.",
      tech: ["AWS", "Cloud"],
      link: "https://www.credly.com/badges/19750322-f347-42f9-933f-ac544c5d7546"
    },
    {
      title: "AI Practitioner",
      description: "Certification covering core AI concepts and practical AI/ML application fundamentals.",
      tech: ["AI", "ML"],
      link: "https://www.credly.com/badges/2b9765f5-bf00-491f-a390-405a2e8c2f2a"
    }
  ],
  projects: [
    {
      title: "Enterprise Banking Platform",
      description: "High-throughput backend services with secure APIs, transaction workflows, and modular architecture.",
      tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"]
    },
    {
      title: "Agentic Job Search Assistant",
      description: "AI agent that discovers jobs using search tools, reasons over results, and returns structured recommendations.",
      tech: ["LangChain", "LangGraph", "Groq", "Python"]
    },
    {
      title: "GenAI Resume Optimizer",
      description: "LLM-powered utility to tailor resumes against role descriptions and generate improvement suggestions.",
      tech: ["GenAI", "Prompt Engineering", "Backend APIs"]
    }
  ],
  codingProfiles: [
    {
      title: "LeetCode",
      description: "Track my coding practice, problem-solving consistency, and algorithmic growth.",
      link: "https://leetcode.com/u/yousuf89/"
    },
    {
      title: "GeeksforGeeks",
      description: "My profile for DSA practice, coding articles, and technical learning progress.",
      link: "https://www.geeksforgeeks.org/profile/mdyousufasif6"
    }
  ]
};

function renderSkills() {
  const skillGrid = document.getElementById("skill-grid");
  skillGrid.innerHTML = "";

  config.skills.forEach((skill) => {
    const card = document.createElement("article");
    card.className = "skill-card";
    card.innerHTML = `<h3>${skill.title}</h3><p>${skill.description}</p>`;
    skillGrid.appendChild(card);
  });
}

function renderCardSection(gridId, records) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = "";

  records.forEach((record) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const chips = (record.tech || [])
      .map((item) => `<span class="chip">${item}</span>`)
      .join("");

    card.innerHTML = `
      <h3>${record.title}</h3>
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
      <h3>${project.title}</h3>
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
      <h3>${profile.title}</h3>
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
