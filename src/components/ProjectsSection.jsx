import React, { useState } from 'react';
import './ProjectsSection.css';

const baseUrl = import.meta.env.BASE_URL;

const projectData = [
  {
    id: 'ai-assistant',
    title: 'AI Assistant — Enterprise Recon & Hardening Engine',
    category: 'Cybersecurity & AI',
    filterKey: 'cybersecurity',
    status: 'Flagship Platform',
    statusClass: 'status-featured',
    image: `${baseUrl}projects/ai-assistant.png`,
    summary: 'A dual-interface (Cyber Dashboard & Rich CLI) intelligence engine designed to automate enterprise target recon, SSL audits, SPF/DMARC anti-spoofing rating, and firewall hardening.',
    highlights: [
      'Multi-profile Nmap scanner: Fast Recon (-F), Deep Service/OS (-sV -O), Web Audits, and 65,535-port sweep.',
      'Automated SPF & DMARC analyzer parsing policy strictness and grading domain spoofing vulnerability.',
      'Deep SSL/TLS inspector with SNI verification, cipher suite audit, and certificate expiry countdown.',
      'Automated Hardening Script Generator: Instantly emits custom Bash (UFW/sysctl) or PowerShell firewall rules.',
      'Dual interface: Real-time glassmorphism web dashboard + interactive Python CLI + Android companion app.'
    ],
    tech: ['Python', 'Flask', 'Nmap', 'SQLite', 'DNS/Crypto', 'Kotlin (Android)', 'PowerShell', 'Bash'],
    githubUrl: 'https://github.com/Lawrence-Flash/AI_Assistant',
    badge: 'Enterprise SecOps'
  },
  {
    id: 'dealhunter-smart',
    title: 'DealHunterSmart — Multi-Retailer Price Platform',
    category: 'Full-Stack Web',
    filterKey: 'fullstack',
    status: 'Production Full-Stack',
    statusClass: 'status-production',
    image: `${baseUrl}projects/dealhunter.png`,
    summary: "South Africa's smart grocery and price comparison platform engineered to beat inflation by aggregating real-time prices across 8+ major national retailers.",
    highlights: [
      'Multi-store price aggregator across Checkers Sixty60, Pick n Pay, Takealot, Amazon.co.za, Woolworths, Clicks, and Makro.',
      'Cardholder & Loyalty dual-pricing factoring in Xtra Savings, Smart Shopper, WRewards, and ClubCard discounts.',
      'Smart Multi-Store Basket Optimizer: Dynamically splits shopping lists across stores to maximize savings (up to 35%).',
      'Delivery logistics awareness: Compares 60-minute on-demand delivery fees against standard parcel shipping.',
      'Full-stack architecture: React 18, TanStack Query, Express.js API, PostgreSQL with Drizzle ORM, and shadcn/ui.'
    ],
    tech: ['React 18', 'TypeScript', 'Vite', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Tailwind CSS', 'Radix UI'],
    githubUrl: 'https://github.com/Lawrence-Flash/DealHunterSmart',
    badge: 'Full-Stack FinTech'
  },
  {
    id: 'spacecraft-security',
    title: 'Spacecraft & Satellite Cybersecurity Labs',
    category: 'Aerospace & Research',
    filterKey: 'research',
    status: 'Security Research',
    statusClass: 'status-research',
    image: `${baseUrl}projects/spacecrafthacking.svg`,
    summary: 'Applied aerospace and satellite communications cybersecurity research covering ground segment protocol exploitation, Mission Control Systems (MCS), and SATCOM terminal attack vectors.',
    highlights: [
      'Ground Segment Protocol Security: Vulnerability modeling of CCSDS telemetry and telecommand transmission frames.',
      'Mission Control Systems (MCS): Architectural threat analysis of space-ground communications and orbital commands.',
      'SATCOM Terminal Security: Penetration testing methodology and embedded firmware vulnerability assessments.',
      'GNSS Jamming & Spoofing: Simulated GPS/Galileo navigation signal spoofing attacks and defense countermeasure design.'
    ],
    tech: ['SATCOM', 'CCSDS Protocols', 'SDR', 'Linux Security', 'Protocol Analysis', 'Cryptography'],
    githubUrl: 'https://github.com/spacecrafthacking/spacecrafthacking',
    badge: 'Aerospace Sec'
  },
  {
    id: 'ai-cyber-defense',
    title: 'AI Threat Detection & Log Anomaly Engine',
    category: 'Cybersecurity & AI',
    filterKey: 'cybersecurity',
    status: 'AI Security Tool',
    statusClass: 'status-featured',
    image: `${baseUrl}projects/threatdetection.svg`,
    summary: 'Automated threat detection and network intrusion monitoring suite leveraging machine learning models to classify malicious traffic patterns and anomalous activity.',
    highlights: [
      'Network Log Ingestion: Ingests multi-source network telemetry and normalizes firewall/router events in real time.',
      'Machine Learning Classifier: Trained models distinguish between normal network behavior and malicious payload attempts.',
      'Automated Incident Contextualization: Generates severity rankings, threat indicators, and rapid triage advisories.'
    ],
    tech: ['Python', 'Scikit-Learn', 'TensorFlow', 'Network Analytics', 'Pandas', 'Security ML'],
    githubUrl: 'https://github.com/Lawrence-Flash/AI-Cybersecurity-Assistant',
    badge: 'ML Defense'
  },
  {
    id: 'lowlevel-c',
    title: 'Unix Architecture & Custom POSIX Shell',
    category: 'Systems & DevOps',
    filterKey: 'systems',
    status: 'Systems Architecture',
    statusClass: 'status-systems',
    image: `${baseUrl}projects/lowlevel.svg`,
    summary: 'Foundational systems engineering in C demonstrating low-level Unix memory management, system calls, custom data structures, and POSIX command parsing.',
    highlights: [
      'Custom POSIX Shell: Implemented complete command interpreter with process control (fork, execve), signal handling, and PATH resolution.',
      'Leak-Free Memory Safety: Rigorous dynamic memory allocation verified using Valgrind with zero memory leaks.',
      'Custom printf Library: Re-engineered libc formatted output engine from scratch handling conversion specifiers.'
    ],
    tech: ['C (C99)', 'POSIX API', 'Linux Syscalls', 'Valgrind', 'GDB', 'Data Structures'],
    githubUrl: 'https://github.com/Lawrence-Flash/alx-low_level_programming',
    badge: 'C / Memory Architecture'
  },
  {
    id: 'devops-automation',
    title: 'Linux Infrastructure & DevOps Automation',
    category: 'Systems & DevOps',
    filterKey: 'systems',
    status: 'Infrastructure',
    statusClass: 'status-systems',
    image: `${baseUrl}projects/devops.svg`,
    summary: 'Production server orchestration, high-availability reverse proxy deployment, automated Bash provisioning, and security hardening.',
    highlights: [
      'Idempotent Shell Provisioning: Automated scripts for zero-downtime server setups, user privilege lockdown, and SSH key hardening.',
      'High-Availability Web Architecture: Configured Nginx web servers and HAProxy load balancers with SSL/TLS termination.',
      'Network Diagnostics & Monitoring: Automated health check pipelines using Linux networking tools (ss, iptables, curl, crontab).'
    ],
    tech: ['Bash', 'Linux (Ubuntu/RHEL)', 'Nginx', 'HAProxy', 'SSH Hardening', 'DevOps'],
    githubUrl: 'https://github.com/Lawrence-Flash/learning-linux-command-line',
    badge: 'DevOps & SysAdmin'
  }
];

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'Cybersecurity & AI', value: 'cybersecurity' },
  { label: 'Full-Stack Web', value: 'fullstack' },
  { label: 'Systems & DevOps', value: 'systems' },
  { label: 'Aerospace & Research', value: 'research' }
];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filteredProjects = activeFilter === 'all'
    ? projectData
    : projectData.filter(p => p.filterKey === activeFilter);

  const toggleExpand = (id) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Enterprise &amp; Open-Source Portfolio</div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-subtitle">
            A curated showcase of production full-stack systems, automated cybersecurity engines, 
            aerospace security research, and low-level Unix architecture.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
              {cat.value === 'all' ? (
                <span className="filter-count">{projectData.length}</span>
              ) : (
                <span className="filter-count">
                  {projectData.filter(p => p.filterKey === cat.value).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div className="project-card glass" key={project.id}>
              {/* Card Image / Header Visual */}
              <div className="project-media-wrap">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-badge-overlay">
                  <span className={`status-tag ${project.statusClass}`}>
                    {project.status}
                  </span>
                  <span className="specialty-badge">
                    {project.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="project-body">
                <div className="project-meta-top">
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.summary}</p>

                {/* Key Technical Highlights */}
                <div className="project-highlights-box">
                  <div className="highlights-header">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                    </svg>
                    <span>Key Engineering Highlights</span>
                  </div>
                  <ul className="highlights-list">
                    {project.highlights.slice(0, expandedId === project.id ? project.highlights.length : 2).map((item, idx) => (
                      <li key={idx}>
                        <span className="bullet-check">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {project.highlights.length > 2 && (
                    <button 
                      className="expand-highlights-btn"
                      onClick={() => toggleExpand(project.id)}
                    >
                      {expandedId === project.id ? 'Show Less ▲' : `+${project.highlights.length - 2} More Details ▼`}
                    </button>
                  )}
                </div>

                {/* Tech Stack Chips */}
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-footer">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn btn-primary btn-sm project-cta"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code &amp; Architecture
                  </a>
                  <span className="verified-link-indicator">
                    <span className="dot-live"></span> Verified Repository
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collaboration Note */}
        <div className="collaborations-banner glass">
          <div className="collab-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div className="collab-text">
            <h4>Collaborative &amp; Team Engineering</h4>
            <p>
              Also actively contributing to production platforms with the <strong>Ground-Up Grinders</strong> organization, 
              including <strong>RoomLinkSA</strong> (accommodation matching), <strong>Gav-Marketplace</strong>, and <strong>Bizbook</strong>.
            </p>
          </div>
          <a 
            href="https://github.com/Lawrence-Flash" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-secondary btn-sm"
          >
            Explore Lawrence-Flash on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
