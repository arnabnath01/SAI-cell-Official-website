'use client'
import Image from "next/image";
import Link from "next/link";
import "@/styles/team/ProfileCard.scss"
interface ProfileCardProps {
  firstname: string;
  lastname: string;
  role: string;
  imageUrl: string;
  details:string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ firstname, lastname, role, imageUrl,details }) => {
  return (
    <div className="canvas-wrapper">
      <Link href='#'className="canvas">
        <div className="canvas_border">
        <svg>
            <defs>
              <linearGradient id="grad-orange" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "rgb(253,137,68)", stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: "rgb(153,75,23)", stopOpacity: 1 }}></stop>
              </linearGradient>
              <linearGradient id="grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D34F48"></stop>
                <stop offset="100%" stopColor="#772522"></stop>
              </linearGradient>
            </defs>
            <rect
              id="rect-grad"
              className="rect-gradient"
              fill="none"
              stroke="url(#grad-orange)"
              stroke-linecap="square"
              stroke-width="4"
              stroke-miterlimit="30"
              width="100%"
              height="100%"
            ></rect>
          </svg>
        </div>
        <div className="canvas_img-wrapper">
      <Image className="canvas_img" src={`${imageUrl}`} alt={`${firstname} ${lastname}`} height={2000} width={1000} /> 
        </div>
        <div className="canvas_copy canvas_copy--left">
          <span className="canvas_copy_subtitle">{role}</span>
          <strong className="canvas_copy_title">{firstname}</strong>
          <strong className="canvas_copy_title">{lastname}</strong>
          <span className="canvas_copy_details">{details}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProfileCard;