import React from 'react';

function ProfileSection() {
  return (
    <section className='profile-container'>
      <h3 className='profile-title'>Profil</h3>
      <div className='profile-flex'>
        <div className='pf-1'>
          <i className="fas fa-user-circle profile-icon"></i>
        </div>
        <div className='pf-2'>
          <h1 style={{ margin: 0 }}>Kerroué Baptiste</h1>
          <p>Développeur fullstack passionné par les interfaces modernes</p>

          <div className="skills-container">
            <span className="skill-box">React</span>
            <span className="skill-box">TailwindCSS</span>
            <span className="skill-box">PHP</span>
            <span className="skill-box">C++</span>
            <span className="skill-box">C#</span>
          </div>

          <h4 style={{ marginTop: "20px" }}>Outils</h4>
          <div className="skills-container">
            <span className="skill-box">Unity</span>
            <span className="skill-box">Photoshop</span>
            <span className="skill-box">Figma</span>
            <span className="skill-box">Adobe Illustrator</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
