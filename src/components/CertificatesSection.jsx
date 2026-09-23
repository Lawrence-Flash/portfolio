import React, { useState } from 'react';
import './CertificatesSection.css';

const baseUrl = import.meta.env.BASE_URL;

const certificates = [
  {
    name: 'CompTIA Security+ (ce)',
    file: 'CompTIA Security+ ce certificate.pdf',
    type: 'Security',
    issuer: 'CompTIA',
    featured: true
  },
  {
    name: 'Ethical Hacking Vulnerability Analysis',
    file: 'CertificateOfCompletion_Ethical Hacking Vulnerability Analysis.pdf',
    type: 'Security',
    issuer: 'LinkedIn Learning'
  },
  {
    name: 'Automated Threat Detection & SOC Solutions (Splunk, TheHive, Snort)',
    file: 'CertificateOfCompletion_Automated Threat Detection Building SOC Solutions with Splunk TheHive and Snort.pdf',
    type: 'Security',
    issuer: 'Infosec / LinkedIn'
  },
  {
    name: 'Container Security by InfoSec',
    file: 'CertificateOfCompletion_Container Security by InfoSec.pdf',
    type: 'Security',
    issuer: 'InfoSec'
  },
  {
    name: 'Junior Cybersecurity Analyst Career Path',
    file: 'Junior_Cybersecurity_Analyst_Career_Path_certificate_lawrencetshabalala253-gmail-com_38912664-ae19-4f65-8d1a-7cf014a4fc77.pdf',
    type: 'Security',
    issuer: 'Cisco / SkillsForLife'
  },
  {
    name: 'DevOps Practices & Principles',
    file: 'DevOps Practices Principles certificate.pdf',
    type: 'DevOps',
    issuer: 'Professional DevOps Institute'
  },
  {
    name: 'AWS and React Creating FullStack Apps',
    file: 'CertificateOfCompletion_AWS and React Creating FullStack Apps.pdf',
    type: 'FullStack',
    issuer: 'AWS / Cloud Training'
  },
  {
    name: 'Red Hat Enterprise Linux 8 Essential Training',
    file: 'CertificateOfCompletion_Red Hat Enterprise Linux 8 Essential Training.pdf',
    type: 'Linux',
    issuer: 'Red Hat / Enterprise Linux'
  },
  {
    name: 'Linux CentOS 7 Desktops & Remote Access',
    file: 'CertificateOfCompletion_Linux CentOS 7 Desktops and Remote Access 2016.pdf',
    type: 'Linux',
    issuer: 'Linux Systems'
  },
  {
    name: 'Software Development Fundamentals',
    file: 'software_dev_fundamentals.pdf',
    type: 'Development',
    issuer: 'Software Engineering Council'
  },
  {
    name: 'Systems Administrator Certification',
    file: 'systems administrator.pdf',
    type: 'Administration',
    issuer: 'Systems Operations'
  },
  {
    name: 'Data Analyst Professional',
    file: 'Data Analyst.pdf',
    type: 'Data',
    issuer: 'Analytics Institute'
  }
];

const certFilters = [
  { label: 'All Certifications', value: 'all' },
  { label: 'Security & Threat', value: 'Security' },
  { label: 'Linux Systems', value: 'Linux' },
  { label: 'DevOps & Cloud', value: 'DevOps' },
  { label: 'Development & Data', value: 'Development' }
];

const CertificatesSection = () => {
  const [activeCertFilter, setActiveCertFilter] = useState('all');

  const filteredCerts = activeCertFilter === 'all'
    ? certificates
    : certificates.filter(c => {
        if (activeCertFilter === 'DevOps') return c.type === 'DevOps' || c.type === 'FullStack';
        if (activeCertFilter === 'Development') return c.type === 'Development' || c.type === 'Data' || c.type === 'Administration';
        return c.type === activeCertFilter;
      });

  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">Professional Accreditations</div>
          <h2 className="section-title">Certifications &amp; Achievements</h2>
          <p className="section-subtitle">
            Demonstrating industry-tested proficiency in ethical hacking, incident response, 
            container security, enterprise Linux, and cloud DevOps.
          </p>
        </div>

        {/* Certificate Filters */}
        <div className="cert-filters">
          {certFilters.map(filter => (
            <button
              key={filter.value}
              className={`cert-filter-btn ${activeCertFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveCertFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="certificates-grid">
          {filteredCerts.map((cert, index) => (
            <a 
              href={`${baseUrl}certificates/${encodeURI(cert.file)}`} 
              target="_blank" 
              rel="noreferrer" 
              className={`cert-card glass ${cert.featured ? 'cert-featured' : ''}`} 
              key={index}
            >
              <div className="cert-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15l-3 3-3-3V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8l-3 3-3-3z"></path>
                  <path d="M12 15v6"></path>
                  <path d="M9 21h6"></path>
                </svg>
              </div>
              <div className="cert-info">
                {cert.featured && (
                  <span className="featured-pill">Flagship Credential</span>
                )}
                <h3 className="cert-title">{cert.name}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-type-tag">{cert.type}</span>
                </div>
              </div>
              <div className="cert-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
