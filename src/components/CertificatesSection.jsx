import React from 'react';
import './CertificatesSection.css';

const certificates = [
  {
    name: 'CompTIA Security+ ce',
    file: 'CompTIA Security+ ce certificate.pdf',
    type: 'Security'
  },
  {
    name: 'Ethical Hacking Vulnerability Analysis',
    file: 'CertificateOfCompletion_Ethical Hacking Vulnerability Analysis.pdf',
    type: 'Security'
  },
  {
    name: 'Automated Threat Detection & SOC Solutions',
    file: 'CertificateOfCompletion_Automated Threat Detection Building SOC Solutions with Splunk TheHive and Snort.pdf',
    type: 'Security'
  },
  {
    name: 'Container Security by InfoSec',
    file: 'CertificateOfCompletion_Container Security by InfoSec.pdf',
    type: 'Security'
  },
  {
    name: 'DevOps Practices & Principles',
    file: 'DevOps Practices Principles certificate.pdf',
    type: 'DevOps'
  },
  {
    name: 'AWS and React Creating FullStack Apps',
    file: 'CertificateOfCompletion_AWS and React Creating FullStack Apps.pdf',
    type: 'FullStack'
  }
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="certificates-section">
      <div className="container">
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <a 
              href={`/certificates/${cert.file}`} 
              target="_blank" 
              rel="noreferrer" 
              className="cert-card glass" 
              key={index}
            >
              <div className="cert-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 15l-3 3-3-3V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8l-3 3-3-3z"></path>
                  <path d="M12 15v6"></path>
                  <path d="M9 21h6"></path>
                </svg>
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.name}</h3>
                <span className="cert-type">{cert.type}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
