import React, { useState } from 'react';
import './ProjectsSection.css';

const baseUrl = import.meta.env.BASE_URL;

const projectData = [
  {
    id: 'devsecops-pipeline',
    title: 'DevSecOps Pipeline Lab',
    category: 'DevSecOps',
    filterKey: 'devsecops',
    status: 'Personal Lab',
    statusClass: 'status-featured',
    image: `${baseUrl}projects/devsecops.svg`,
    summary: 'Personal lab project, not a client or production system. A FastAPI tickets API is built and scanned on GitHub Actions. Terraform then creates a local kind cluster and installs Kyverno plus a hardened Helm chart.',
    highlights: [
      'FastAPI tickets API with API-key auth, Pydantic validation, SQLite, and pytest. The multi-stage image runs as uid 10001. The Helm chart and the CI container drop all capabilities and use a read-only root filesystem.',
      'GitHub Actions security gate on every pull request: Gitleaks, Semgrep, CodeQL, Trivy filesystem and image scans, a CycloneDX SBOM, Kyverno policy-as-code on the Helm chart, Terraform fmt/validate, and an OWASP ZAP baseline. Dependabot opens weekly update PRs.',
      'Local apply (not CI) uses Terraform to create the kind cluster, install Kyverno, and deploy the chart with resource limits, a NetworkPolicy, and a namespace labelled Pod Security restricted. CI validates Terraform and does not start the cluster.',
      'Demo pull request #2 adds a synthetic GitHub token so Gitleaks and the Trivy filesystem secret scan fail. That pull request is not meant to be merged.'
    ],
    tech: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Helm', 'Kyverno', 'Trivy', 'Semgrep', 'CodeQL', 'OWASP ZAP', 'Python', 'FastAPI'],
    githubUrl: 'https://github.com/Lawrence-Flash/devsecops-pipeline-showcase',
    badge: 'Personal Lab Project'
  },
  {
    id: 'soc-log-analyser',
    title: 'SOC Log Analyser — Offline Log Triage',
    category: 'Cybersecurity',
    filterKey: 'cybersecurity',
    status: 'Security Tool',
    statusClass: 'status-research',
    image: `${baseUrl}projects/soc-log-analyser.svg`,
    summary: 'Offline Python CLI, standard library only, that triages one Linux auth log, one Apache or Nginx combined access log, or one Windows Security export (JSON or CSV). Alerts are mapped to MITRE ATT&CK. It does not call the network and it is not a SIEM.',
    highlights: [
      'python3 -m soclog demo runs the four synthetic files in samples/. The command exits 1 when alerts meet the minimum severity; the report checked into docs/example-report.md lists 24 alerts on those files. analyse accepts --format auto, linux-auth, web-access, windows-json, or windows-csv, and can print JSON or Markdown.',
      'soclog/rules.json has 19 rules: brute force (T1110.001), password spraying (T1110.003), a success after those failures, unusual-hours logons between 22:00 and 05:00 UTC (T1078), account creation and privileged group changes, command lines such as encoded PowerShell and curl or wget into a shell or /tmp, and regex checks for SQL injection, path traversal, XSS, scanner user agents, and 404 bursts.',
      'tests/ defines 35 unittest methods. GitHub Actions runs them on Python 3.10, 3.11, and 3.12, then runs the demo. A separate CodeQL workflow analyses the Python.'
    ],
    tech: ['Python', 'MITRE ATT&CK', 'unittest', 'GitHub Actions', 'CodeQL'],
    githubUrl: 'https://github.com/Lawrence-Flash/soc-log-analyser',
    badge: 'Standard-Library CLI'
  },
  {
    id: 'detection-rules-lab',
    title: 'Detection Rules Lab — Sigma as Code',
    category: 'Cybersecurity',
    filterKey: 'cybersecurity',
    status: 'Personal Lab',
    statusClass: 'status-featured',
    image: `${baseUrl}projects/detection-rules.svg`,
    summary: 'Sigma detection-as-code lab: 19 rules (7 Linux, 9 Windows, 3 web), each with synthetic events that should fire and events that should not. A standard-library tool validates the rules, runs the corpus, and writes an ATT&CK coverage table.',
    highlights: [
      'python3 -m rulelab validate, test, and coverage do not install packages or open a network connection. coverage writes docs/coverage.md. The committed table says 19 rules reference 17 techniques across 10 of 15 enterprise tactics.',
      'tests/data holds 61 synthetic events: 23 in the positive JSON files (each must match) and 38 in the negative JSON files (each must not). tests/ defines 20 unittest methods.',
      'GitHub Actions runs the unit tests, validate, and test on Python 3.10, 3.11, and 3.12. A second job installs sigma-cli and pySigma, runs sigma check --fail-on-issues, and checks that python3 -m rulelab convert still matches the Splunk SPL and Elasticsearch Lucene files under examples/. CodeQL analyses the Python.'
    ],
    tech: ['Sigma', 'Python', 'pySigma', 'Splunk', 'Elasticsearch', 'MITRE ATT&CK', 'GitHub Actions', 'CodeQL'],
    githubUrl: 'https://github.com/Lawrence-Flash/detection-rules-lab',
    badge: 'Detection as Code'
  },
  {
    id: 'cloud-misconfig-lab',
    title: 'Cloud Misconfig Lab — Terraform AWS',
    category: 'DevSecOps',
    filterKey: 'devsecops',
    status: 'Personal Lab',
    statusClass: 'status-featured',
    image: `${baseUrl}projects/cloud-misconfig.svg`,
    summary: 'Terraform lab with the same small AWS layout twice: vulnerable/ plants misconfigurations and fixed/ corrects them. Checkov and Trivy scan both copies. Nothing is deployed, there is no terraform apply, and no cloud account is required.',
    highlights: [
      'Committed JSON from Checkov 3.2.449 and Trivy 0.76.1: Trivy reports 27 failed checks on vulnerable/ (1 critical, 16 high, 6 medium, 4 low) and 0 on fixed/. Checkov reports 57 failed checks on vulnerable/ and 10 on fixed/. Checkov left severity null, so those rows are unscored. The 10 that remain are not labeled critical or high.',
      'Those 10 Checkov checks are cross-region replication and event notifications on the three buckets, a CloudTrail SNS topic, and the KMS key policy. They are not hidden with skip comments. python3 -m misconfig report rebuilds docs/scan-summary.md from the JSON. tests/ defines 26 unittest methods.',
      'CI runs terraform fmt, init -backend=false, and validate on both folders, then Checkov and Trivy. The gate requires findings on vulnerable/ and fails fixed/ only for critical or high. The same workflow runs gitleaks 8.24.2 and CodeQL for Python. The planted secret is allowlisted only by a gitleaks:allow comment on its line. The region af-south-1 is a configuration value; validate does not call AWS.'
    ],
    tech: ['Terraform', 'AWS', 'Checkov', 'Trivy', 'gitleaks', 'CodeQL', 'Python', 'GitHub Actions'],
    githubUrl: 'https://github.com/Lawrence-Flash/cloud-misconfig-lab',
    badge: 'Not Deployed'
  },
  {
    id: 'phishing-email-analyser',
    title: 'Phishing Email Analyser — Offline .eml Scoring',
    category: 'Cybersecurity',
    filterKey: 'cybersecurity',
    status: 'Security Tool',
    statusClass: 'status-research',
    image: `${baseUrl}projects/phishcheck.svg`,
    summary: 'Offline Python CLI (python3 -m phishcheck) that scores a saved .eml file from 0 to 100 and explains each signal. It quotes SPF, DKIM, and DMARC results from the headers, checks lookalike domains, links, and attachments, and can export defanged IOCs as JSON or CSV. It does not claim a detection rate.',
    highlights: [
      'python3 -m phishcheck demo scores the eight synthetic samples in samples/. Bands are 0-24 likely safe, 25-59 suspicious, and 60-100 likely phishing. The score is a checklist capped at 100, not a probability. The tool uses the standard library and stays offline unless --dns is passed. A DNS lookup does not change the score.',
      'Signals cover From against Reply-To and Return-Path, display-name spoofing, Authentication-Results and Received-SPF (quoted, not re-verified), lookalike domains for the brands in phishcheck/brands.py (South African banks, SARS, and others), link mismatches, and attachment names, types, and SHA-256. --ioc-json and --ioc-csv defang URLs and domains with hxxp and [.].',
      'tests/ defines 102 unittest methods. GitHub Actions runs them on Python 3.10, 3.11, and 3.12, then runs the demo. Separate workflows run CodeQL on the Python and gitleaks on the git history.'
    ],
    tech: ['Python', 'SPF', 'DKIM', 'DMARC', 'unittest', 'GitHub Actions', 'gitleaks', 'CodeQL'],
    githubUrl: 'https://github.com/Lawrence-Flash/phishing-email-analyser',
    badge: 'Standard-Library CLI'
  },
  {
    id: 'stokvel-collective',
    title: 'Stokvel Collective — Bulk-Buying Platform',
    category: 'Full-Stack Web',
    filterKey: 'fullstack',
    status: 'Personal Project',
    statusClass: 'status-production',
    image: `${baseUrl}projects/stokvel.svg`,
    summary: 'Personal project: a TypeScript monorepo for a South African stokvel bulk-buying app, with a Next.js storefront, an Express API, PostgreSQL, and Redis.',
    highlights: [
      'pnpm workspace with Next.js 14 and Tailwind, Express, Prisma, Zod, PostgreSQL 16, Redis 7, and a BullMQ worker.',
      'A six-digit code is stored in Redis for five minutes and exchanged for a seven-day JWT. The code is printed for local development and returned when NODE_ENV is unset or development; the repo does not call an SMS provider. Zod validates the OTP routes, and that request route allows 5 calls per 15 minutes. .env.example is committed and .env is gitignored.',
      'Multi-stage Dockerfile for the API and docker-compose for PostgreSQL, Redis, and Adminer. Vitest covers pool logic.',
      'GitHub Actions runs a frozen-lockfile install, lint, typecheck, and build. That workflow does not run pnpm test.'
    ],
    tech: ['TypeScript', 'Next.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions'],
    githubUrl: 'https://github.com/Lawrence-Flash/-Stokvel-Collective',
    badge: 'TypeScript Monorepo'
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant — Recon, OSINT & Hardening',
    category: 'Cybersecurity',
    filterKey: 'cybersecurity',
    status: 'Security Tool',
    statusClass: 'status-research',
    image: `${baseUrl}projects/ai-assistant.png`,
    summary: 'Python security tool with a Flask dashboard, a Rich CLI, and a small Kotlin Android client. It runs Nmap, inspects TLS and email authentication, grades HTTP headers, and can send the scan text to Gemini.',
    highlights: [
      'Nmap profiles in utils.py: fast (-F), service and OS detection (-sV -O when root), web scripts, and an all-ports sweep (-p-). Targets are checked before the scan, and Nmap is started with an argument list.',
      'DNS and OSINT helpers, SPF/DMARC grading, TLS inspection with SNI, HTTP security-header checks, and subdomain enumeration.',
      'With GEMINI_API_KEY set, generate_hardening_script asks Gemini for a Bash or PowerShell script from the scan text. Without a key it returns a short static UFW example. send_webhook_alert POSTs a Discord embed payload to the configured webhook URL. tests/test_suite.py defines 13 unittest methods.'
    ],
    tech: ['Python', 'Flask', 'Nmap', 'SQLite', 'Gemini', 'Kotlin', 'Bash', 'PowerShell'],
    githubUrl: 'https://github.com/Lawrence-Flash/AI_Assistant',
    badge: 'Python Security Tool'
  },
  {
    id: 'dealhunter-smart',
    title: 'DealHunterSmart — Seeded SA Price Comparison',
    category: 'Full-Stack Web',
    filterKey: 'fullstack',
    status: 'Phase 1 Demo',
    statusClass: 'status-production',
    image: `${baseUrl}projects/dealhunter.png`,
    summary: 'TypeScript app that compares a seeded catalog of South African grocery and retail products. Loyalty prices and delivery labels are fields on that sample data. The README still lists live scraping and a model-backed assistant as later phases.',
    highlights: [
      'React 18, Vite, Wouter, TanStack Query, Tailwind, shadcn/ui, and Express. The API serves the catalog from in-memory maps in server/storage.ts. shared/schema.ts declares Drizzle PostgreSQL tables, and the server never opens a database connection.',
      'Sample products carry prices for retailers including Checkers Sixty60, Pick n Pay, Takealot, Amazon.co.za, Woolworths, Clicks, Makro, and Dis-Chem, plus loyalty-price and delivery-speed fields.',
      'The /api/ai/chat route matches keywords against the seeded catalog. It does not call Gemini or another model. The live-sync route applies a small random change to stored prices and does not download retailer pages.'
    ],
    tech: ['React 18', 'TypeScript', 'Vite', 'Express', 'Tailwind CSS', 'Radix UI'],
    githubUrl: 'https://github.com/Lawrence-Flash/DealHunterSmart',
    badge: 'Seeded Catalog Demo'
  },
  {
    id: 'lowlevel-c',
    title: 'ALX Low-Level Programming in C',
    category: 'Systems & C',
    filterKey: 'systems',
    status: 'Coursework',
    statusClass: 'status-systems',
    image: `${baseUrl}projects/lowlevel.svg`,
    summary: 'ALX C coursework in this repository: hello world, pointers, allocation, structs, linked lists, bit manipulation, file I/O, and dynamic libraries.',
    highlights: [
      'Pointers, arrays, strings, recursion, argc/argv, and the preprocessor.',
      'malloc and free, structs, function pointers, variadic functions, and static and dynamic libraries.',
      'Singly and doubly linked lists, bit manipulation, and file I/O. The folders present are 0x00 through 0x10, 0x12 through 0x15, 0x17-doubly_linked_lists, and 0x18-dynamic_libraries.',
    ],
    tech: ['C', 'Pointers', 'malloc', 'Linked Lists', 'File I/O', 'Bit Manipulation'],
    githubUrl: 'https://github.com/Lawrence-Flash/alx-low_level_programming',
    badge: 'C Coursework'
  }
];

const categories = [
  { label: 'All Projects', value: 'all' },
  { label: 'DevSecOps', value: 'devsecops' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'Full-Stack Web', value: 'fullstack' },
  { label: 'Systems & C', value: 'systems' }
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
          <div className="section-eyebrow">Open-Source Portfolio</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Public repositories only. The first card is a personal DevSecOps lab.
            Next are an offline SOC log CLI, a Sigma detection-rules lab, a Terraform
            AWS misconfiguration lab, and an offline phishing-email scorer. The remaining
            cards are a stokvel bulk-buying app, a Python recon tool, a seeded
            price-comparison demo, and ALX C exercises.
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
            <h4>Other public repositories</h4>
            <p>
              Also on GitHub: <strong>alx-system_engineering-devops</strong> (shell basics, permissions, redirections, and variables)
              and the group repo <strong>printf</strong> (branch <strong>our_printf_branch</strong>; <strong>_printf</strong> handles <strong>%c</strong>, <strong>%s</strong>, <strong>%%</strong>, <strong>%d</strong>/<strong>%i</strong>, <strong>%b</strong>, and <strong>%S</strong>).{' '}
              <strong>AI-Cybersecurity-Assistant</strong> is an earlier one-file voice and text Nmap script (<strong>assistant.py</strong>, fast scan with <strong>-F</strong>).
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
