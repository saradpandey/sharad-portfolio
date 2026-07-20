import { useState } from 'react';
import './Certificates.css';

import techx from '../../assets/TechX_Sharad pandey.jpg';
import Broadwayinfosys from '../../assets/Broadwayinfosys_Sharad pandey.png'

const certificates = [
  {
    title: 'TechX Participation Certificate',
    issuer: 'TechX Event',
    file: techx,
  },
  {
    title: 'Broadwayinfosys Certificate',
    issuer: 'Broadwayinfosys',
    file: Broadwayinfosys,
  },
  
   

];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section id="certificates" className="certificates-section">
        <div className="container">
          <h2 className="section-title">Certificates</h2>

          {/* <p className="section-subtitle">Training, achievements, and certifications.</p> */}

          <div className="certificate-grid">
            {certificates.map((cert, index) => (
              <div className="certificate-card" key={index}>
                
                {/* IMAGE */}
                <img
                  src={cert.file}
                  alt={cert.title}
                  className="certificate-image"
                />

                {/* CONTENT */}
                <div className="certificate-content">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>

                  <div className="btn-group">

                    {/* ZOOM BUTTON */}
                    <button
                      className="view-btn"
                      onClick={() => setSelectedImage(cert.file)}
                    >
                      Zoom
                    </button>

                    {/* DOWNLOAD BUTTON */}
                    <a
                      href={cert.file}
                      download
                      className="download-btn"
                    >
                      Download
                    </a>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img src={selectedImage} alt="Certificate Full View" />
          </div>
        </div>
      )}
    </>
  );
}