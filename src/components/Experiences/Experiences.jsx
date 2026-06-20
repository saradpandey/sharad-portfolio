import { motion } from 'framer-motion';
import './Experiences.css';

export default function Experience() {
  const experiences = [
    {
      role: 'Freelance Web Developer',
      company: 'Self Employed',
      period: '2026 - Present',
      points: [
        'Developed custom websites for clients across various industries.',
        'Designed responsive user interfaces for desktop, tablet, and mobile devices.',
        'Built portfolio websites, business websites, and landing pages.',
        'Integrated contact forms, email services, and third-party APIs.',
        'Optimized website performance, SEO, and page loading speed.',
        'Maintained and updated existing websites based on client requirements.',
        'Fixed bugs and improved website functionality.',
        'Collaborated with clients to gather requirements and deliver solutions.',
        'Implemented modern web technologies using React, JavaScript, and Bootstrap.',
        'Provided technical support and website deployment services.'
      ]
    },
    {
      role: 'Documentation Officer',
      company: 'Magna Education',
      period: '2025 - 2026',
      points: [
        'Managed daily documentation and administrative records.',
        'Prepared official reports, letters, and institutional documents.',
        'Maintained accurate student and organizational databases.',
        'Verified and updated records to ensure data accuracy.',
        'Handled document filing, organization, and retrieval processes.',
        'Assisted students and visitors with inquiries and information.',
        'Coordinated with staff members for documentation requirements.',
        'Managed digital and physical record-keeping systems.',
        'Supported office operations and administrative activities.',
        'Ensured confidentiality and security of important documents.'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Sahuji',
      period: '2024 - 2025',
      points: [
        'Developed responsive websites using HTML, CSS, JavaScript, and React.',
        'Converted UI/UX designs into functional web applications.',
        'Created reusable and maintainable React components.',
        'Implemented modern layouts using Flexbox and CSS Grid.',
        'Optimized website performance and loading speed.',
        'Tested websites across multiple browsers and devices.',
        'Fixed bugs and resolved frontend issues efficiently.',
        'Integrated REST APIs and dynamic data rendering.',
        'Collaborated with designers and developers during project development.',
        'Improved user experience through interactive and accessible interfaces.',
        'Used Git and GitHub for version control and collaboration.',
        'Ensured websites were mobile-friendly and SEO optimized.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-wrapper">
        {/* <p className="section-subtitle">Experience</p> */}
        <h2 className="section-title">My Experience</h2>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          {experiences.map((exp, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot-wrapper">
                <div className="timeline-dot"></div>
              </div>

              <motion.div
                className="timeline-card"
                initial={{
                  opacity: 0,
                  x: idx % 2 === 0 ? -30 : 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  margin: '-50px'
                }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1
                }}
              >
                <div className="card-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="company">{exp.company}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>

                <ul className="points-list">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}