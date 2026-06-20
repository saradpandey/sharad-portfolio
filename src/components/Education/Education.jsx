import { motion } from 'framer-motion';
import './Education.css';
import SaradImage from '../../assets/sarad.png';

export default function Education() {
  const courses = [
    'Data Structures',
    'Web Development',
    'Database Management',
    'Java Programming',
    'Networking',
    'Software Engineering',
    'React JS',
    'UI/UX Design'
  ];

  return (
    <section id="education" className="education-section">
      <div className="education-wrapper">

        {/* <p className="section-subtitle">Education</p> */}
        <h2 className="section-title">My Education</h2>

        <div className="education-grid">

          {/* LEFT CARD */}
          <motion.div
            className="education-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="edu-tag">2024 - Present</div>

            <h3>BCSIT</h3>
            <p className="sub-tag">Bachelor in Computer Science & IT</p>
            <p className="inst">Liberty College, Pokhara University</p>

            <p className="edu-desc">
              Currently pursuing my Bachelor's degree in Computer Science and IT.
              Learning modern web development, software engineering, databases,
              networking, and programming fundamentals.
            </p>

            <h4 className="subjects-title">Relevant Subjects</h4>

            <div className="subjects-tags">
              {courses.map((c, i) => (
                <span key={i} className="sub-badge">{c}</span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="education-illustration"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="profile-container">

              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>

              <motion.img
                src={SaradImage}
                alt="Sarad"
                className="profile-image"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="floating-badge b1">🎓 BCSIT</div>
              <div className="floating-badge b2">💻 Developer</div>
              <div className="floating-badge b3">⚡ React</div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}