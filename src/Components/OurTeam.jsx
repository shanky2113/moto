import React, { useState } from 'react';
import './OurTeam.css';

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "UI/UX Designer",
    img: "/team/alice.jpg",
    description: "Expert in user-friendly designs and wireframing.",
  },
  {
    name: "Bob Smith",
    role: "Frontend Developer",
    img: "/team/bob.jpg",
    description: "Specializes in React and responsive web apps.",
  },
  {
    name: "Catherine Lee",
    role: "Project Manager",
    img: "/team/catherine.jpg",
    description: "Ensures on-time delivery and team coordination.",
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    img: "/team/david.jpg",
    description: "Builds scalable and secure APIs.",
  },
  {
    name: "Emily Clark",
    role: "Graphic Designer",
    img: "/team/emily.jpg",
    description: "Creates stunning visuals and branding elements.",
  },
];

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  const radius = 190; // = (container size / 2) - (image size / 2)

  return (
    <div className="team-section">
      {/* <h2 className="section-title">Our Team</h2> */}
      <div className="circle-wrapper">
        <div className="circle-container">
          <div className="rotating-border"></div>

          <div className="team-circle">
            {teamMembers.map((member, index) => {
              const angleDeg = (360 / teamMembers.length) * index - 90; // Start at top
              const angleRad = (angleDeg * Math.PI) / 180;
              const x = radius * Math.cos(angleRad);
              const y = radius * Math.sin(angleRad);

              return (
                <img
                  key={index}
                  src={member.img}
                  alt={member.name}
                  className="team-member"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  onClick={() => setSelectedMember(member)}
                />
              );
            })}

            <div className="member-detail">
              <h3>{selectedMember.name}</h3>
              <p>{selectedMember.role}</p>
              <small>{selectedMember.description}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
