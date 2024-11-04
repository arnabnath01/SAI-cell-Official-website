import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

interface TeamMemberProps {
  firstname: string;
  lastname: string;
  role: string;
  imageUrl: string;
  details: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  firstname,
  lastname,
  role,
  imageUrl,
  details
}) => (
  <div className="col-12 col-sm-6 col-md-4 col-lg-3">
    <div className="our-team">
      <div className="picture">
        <Image
          className="img-fluid"
          src={imageUrl}
          alt={`${firstname} ${lastname}`}
        />
      </div>
      <div className="team-content">
        <h3 className="name">
          {firstname} {lastname}
        </h3>
        <h4 className="title">{role}</h4>
        <h6>{details}</h6>
      </div>
      <ul className="social">
        <li>
          <a href="#" className="fa fa-facebook" aria-hidden="true">
            <Facebook size={20} />
          </a>
        </li>
        <li>
          <a href="#" className="fa fa-twitter" aria-hidden="true">
            <Twitter size={20} />
          </a>
        </li>
        <li>
          <a href="#" className="fa fa-google-plus" aria-hidden="true">
            {/* Replace with appropriate Google+ icon if needed */}
          </a>
        </li>
        <li>
          <a href="#" className="fa fa-linkedin" aria-hidden="true">
            <Linkedin size={20} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const TeamGrid: React.FC<{ teamMembers: TeamMemberProps[] }> = ({
  teamMembers,
}) => {
  return (
    <div className="container">
      <div className="row">
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index} // Using array index as key for simplicity
            firstname={member.firstname}
            lastname={member.lastname}
            role={member.role}
            imageUrl={member.imageUrl}
            details={member.details}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
