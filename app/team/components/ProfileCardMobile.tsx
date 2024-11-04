import React from 'react';
import Image from 'next/image';
import '@/styles/team/mobileView.css';
interface ProfileCardMobileProps {
  firstname: string;
  lastname: string;
  role: string;
  imageUrl: string;
  details: string;
}

const ProfileCardMobile: React.FC<ProfileCardMobileProps> = ({ firstname, lastname, role, imageUrl, details }) => {
  return (
    <div className="profile-card-mobile">
      <Image src={imageUrl} alt={`${firstname} ${lastname}`} width={300} height={300} />
      <h2>{firstname} {lastname}</h2>
      <p className="role">{role}</p>
      <p className="details">{details}</p>
    </div>
  );
};

export default ProfileCardMobile;