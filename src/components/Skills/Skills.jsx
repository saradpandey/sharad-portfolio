import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import './Skills.css';

export default function Skills() {
  const skillsData = [
    { name: 'HTML', level: 95, icon: <FaHtml5 color="#e34f26" /> },
    { name: 'CSS', level: 90, icon: <FaCss3Alt color="#1572b6" /> },
    { name: 'JavaScript', level: 85, icon: <FaJs color="#f7df1e" /> },
    { name: 'Bootstrap', level: 90, icon: <FaBootstrap color="#7952b3" /> },
    { name: 'Tailwind CSS', level: 85, icon: <SiTailwindcss color="#06b6d4" /> },
    { name: 'React JS', level: 80, icon: <FaReact color="#61dafb" /> },
    { name: 'Git', level: 75, icon: <FaGitAlt color="#f05032" /> },
    { name: 'GitHub', level: 75, icon: <FaGithub color="#24292e" /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-wrapper">
        {/* <p className="section-subtitle">Skills</p> */}
        <h2 className="section-title">My Skills</h2>
        <p className="skills-intro-text">Technologies I use to build modern and responsive websites.</p>

        <div className="skills-container">
          {/* Progress Bars Line item lists */}
          <div className="skills-progress-col">
            {skillsData.map((skill, index) => (
              <div className="progress-item" key={index}>
                <div className="progress-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="bar-bg">
                  <motion.div 
                    className="bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Isometric Dynamic Cards Grid items */}
          <div className="skills-grid-col">
            {skillsData.map((skill, index) => (
              <motion.div 
                className="skill-icon-card" 
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="card-icon-wrapper">{skill.icon}</div>
                <h4>{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}