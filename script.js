const config = {
  resumeUrl: "https://drive.google.com/file/d/REPLACE_WITH_YOUR_RESUME_ID/view",
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
      title: "Backend Developer",
      description:
        "Add your company, timeline, and top impact points here. Example: built resilient APIs, reduced latency, improved service reliability.",
      tech: ["Java", "Spring Boot", "Microservices"]
    }
  ],
  achievements: [
    {
      title: "High-Impact Delivery",
      description:
        "Add your strongest measurable wins here (performance gains, cost reduction, delivery speed, scale milestones).",
      tech: ["Performance", "Scalability", "Ownership"]
    },
    {
      title: "Engineering Leadership",
      description:
        "Add achievements such as mentoring, architecture ownership, process improvement, and cross-team collaboration.",
      tech: ["Mentoring", "Design Reviews", "Delivery Excellence"]
    }
  ],
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      description: "Foundational cloud certification validating AWS platform, security, and architecture basics.",
      tech: ["AWS", "Cloud"]
    },
    {
      title: "AI Practitioner",
      description: "Certification covering core AI concepts and practical AI/ML application fundamentals.",
      tech: ["AI", "ML"]
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
      link: "https://leetcode.com/"
    },
    {
      title: "GeeksforGeeks",
      description: "My profile for DSA practice, coding articles, and technical learning progress.",
      link: "https://www.geeksforgeeks.org/"
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
