const config = {
  resumeUrl: "https://drive.google.com/file/d/REPLACE_WITH_YOUR_RESUME_ID/view",
  skills: [
    {
      title: "Backend Engineering",
      description: "Java, Spring Boot, REST APIs, layered architecture, clean code practices."
    },
    {
      title: "Distributed Systems",
      description: "Microservices, event-driven patterns, asynchronous workflows, resilience design."
    },
    {
      title: "Data and Persistence",
      description: "PostgreSQL, MySQL, Redis, JPA/Hibernate, schema design and query performance."
    },
    {
      title: "Cloud and DevOps",
      description: "Docker, CI/CD basics, deployment readiness, observability and logging."
    },
    {
      title: "GenAI Development",
      description: "Prompt design, retrieval strategies, tool-calling, response quality evaluation."
    },
    {
      title: "Agentic AI",
      description: "LangChain and LangGraph for multi-step reasoning, orchestration, and tool use."
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

function attachResumeLink() {
  document.querySelectorAll(".resume-link").forEach((link) => {
    link.href = config.resumeUrl;
  });
}

function setYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderSkills();
renderProjects();
attachResumeLink();
setYear();
