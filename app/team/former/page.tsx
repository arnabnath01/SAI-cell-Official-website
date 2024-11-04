"use client";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileCardMobile from "../components/ProfileCardMobile";

const PresentMembers = () => {
  //former members details
  const formerMembers = [
    // 2024 batch
    {
      firstname: "Arnab",
      lastname: "Ghosh",
      role: "President",
      imageUrl: "/teams/former/Arnab_ghosh.jpg",
      details: "Class Of 2024, B.TECH CH",
    },
    {
      firstname: "Agnila",
      lastname: "Saha",
      role: "Vice-President, Content Writing Head",
      imageUrl: "/teams/former/agnila_saha.jpg",
      details: "Class Of 2024, B.TECH BT",
    },
    {
      firstname: "Md Nasir",
      lastname: "",
      role: "General Secretary",
      imageUrl: "/teams/former/Md Nasir-Civil Engineering-1st year.jpg",
      details: "Class Of 2024, B.TECH CE",
    },

    {
      firstname: "Debjit",
      lastname: "Maji",
      role: "Joint Treasurer",
      imageUrl: "/teams/former/debjit_maji.jpg",
      details: "Class Of 2024, B.TECH  EE",
    },
    {
      firstname: "Deepak",
      lastname: "Varalasetty",
      role: "Graphics and Videography Head,IT Head",
      imageUrl: "/teams/former/Deepak varalasetty_ECE.png",
      details: "Class Of 2024, B.TECHCS",
    },
    {
      firstname: "Deepika",
      lastname: "chenna",
      role: "Event and Publicity Head",
      imageUrl: "/teams/former/Deepika_chenna.jpg",
      details: "Class Of 2024, B.TECH ME",
    },
    {
      firstname: "Souvik",
      lastname: "Pal",
      role: "General Secretary",
      imageUrl: "/teams/former/Souvik Pal_BT.jpg",
      details: "Class Of 2024, B.TECH BT",
    },

    // before 2024
    {
      firstname: "Chandrima",
      lastname: "Roy Choudhury",
      role: "Former President",
      imageUrl: "/teams/former/Chandrima.jpg",
      details: "Class Of 2023, B.Tech, EC",
    },
    {
      firstname: "Meenakshi ",
      lastname: " Harikumar",
      role: "Former Vice President",
      imageUrl: "/teams/former/Meenakshi.jpg",
      details: "Class Of 2023, B.Tech, CE",
    },
    {
      firstname: "Sayan",
      lastname: "Majumder",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/C.jpg",
      details: "Class Of 2023, B.Tech, MME",
    },
    {
      firstname: "Ahammad Imtiaj ",
      lastname: "Ali",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/Imtiaj.jpg",
      details: "Class Of 2023, B.Tech, MME",
    },
    {
      firstname: "Sukrity ",
      lastname: "Ghosh",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/sukrity.jpg",
      details: "Class Of 2023, B.Tech, ME",
    },
    {
      firstname: "Atipamula venkata sai",
      lastname: "karthik",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/Atipamula venkata sai karthik _Civil.jpg",
      details: "Class Of 2023, B.Tech, CE",
    },
    {
      firstname: "Durga Shankar Pati",
      lastname: "Tripathi",
      role: "Former Senior Executive Member",
      imageUrl:
        "/teams/former/Durga Shankar Pati Tripathi_ Mechanical Engineering .jpg",
      details: "Class Of 2023, B.Tech, ME",
    },
    {
      firstname: "Kumbla Anupa",
      lastname: "Nayak",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/Kumbla_Anupa_Nayak.jpg",
      details: "Class Of 2023, MTech, CE",
    },
    {
      firstname: "Sonali",
      lastname: "Sah",
      role: "Former Treasurer",
      imageUrl: "/teams/former/Sonali.jpg",
      details: "Class Of 2023, B.Tech, CH",
    },
    {
      firstname: "Souvik",
      lastname: "Mukherjee",
      role: "Former Joint Treasurer",
      imageUrl: "/teams/former/Souvik.jpeg",
      details: "Class Of 2023, B.Tech, ME",
    },
    {
      firstname: "Anwer",
      lastname: "Sayeed",
      role: "Former Web Development",
      imageUrl: "/teams/former/anwer sayeed.JPG",
      details: "Class Of 2023, B.Tech, CS",
    },
    {
      firstname: "Deboleena",
      lastname: "Das",
      role: "Former Secretary (EPM)",
      imageUrl: "/teams/former/Deboleena Das_Electrical.jpg",
      details: "Class Of 2023, B.Tech, EE",
    },
    {
      firstname: "Lisha",
      lastname: "Saha",
      role: "Former Joint Secretary (EPM)",
      imageUrl: "/teams/former/Lisa.jpeg",
      details: "Class Of 2023, B.Tech, ME",
    },
    {
      firstname: "Ritabrata",
      lastname: "Ganguly",
      role: "Former Joint Secretary (EPM)",
      imageUrl: "/teams/former/ritabrata.jpg",
      details: "Class Of 2023, B.Tech, CH",
    },
    {
      firstname: "Sohini",
      lastname: "Bhattacharya",
      role: "Former Secretary (PWG)",
      imageUrl: "/teams/former/Sohini.jpg",
      details: "Class Of 2023, B.Tech, EE",
    },
    {
      firstname: "Tuhina",
      lastname: "Rakshit",
      role: "Former Joint Secretary (EPM)",
      imageUrl: "/teams/former/Tuhina.jpg",
      details: "Class Of 2023, B.Tech, ME",
    },
    {
      firstname: "Dipayan",
      lastname: "Dalal",
      role: "Former President",
      imageUrl: "/teams/former/DipayanDalal.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Bedashruti",
      lastname: "Majumdar",
      role: "Former Vice President ",
      imageUrl: "/teams/former/BedashrutiMajumdar.jpg",
      details: "Class Of 2022, B.Tech, BT",
    },
    {
      firstname: "Adrija",
      lastname: "Biswas",
      role: "Former  Secretary (PWG)",
      imageUrl: "/teams/former/AdrijaBiswas.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Ananya",
      lastname: "Nath",
      role: "Former  Secretary (EPM)",
      imageUrl: "/teams/former/AnanyaNath.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Ankita",
      lastname: "Singh",
      role: "Former Joint Secretary (EPM)",
      imageUrl: "/teams/former/AnkitaSingha.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Ambika Biswas",
      lastname: "Neela",
      role: "Former Treasurer",
      imageUrl: "/teams/former/AmbikaBiswasNeela.jpeg",
      details: "Class Of 2022, B.Tech, EE",
    },
    {
      firstname: "Anushka",
      lastname: "Sen",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/AnushkaSen.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Satti",
      lastname: "Jyothi",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/SattiJyothi.jpg",
      details: "Class Of 2022, B.Tech, EC",
    },
    {
      firstname: "Ankita",
      lastname: "Mishra",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/AnkitaMishra.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Girishma",
      lastname: "Terli",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/GirishmaTerli.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Chavan",
      lastname: "Swathi",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/ChavanSwathi.jpg",
      details: "Class Of 2022, B.Tech, BT",
    },
    {
      firstname: "Khyathirmaye ",
      lastname: "Vanumu",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/KhyatiVanumu.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Rabin",
      lastname: "Mondal",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/rabin.jpeg",
      details: "Class Of 2022, B.Tech, MME",
    },
    {
      firstname: "Dhrubajyoti",
      lastname: "Kumar",
      role: "Former Senior Executive Member",
      imageUrl: "/teams/former/DhrubajyotiGupta.jpg",
      details: "Class Of 2022, B.Tech, ME",
    },
    {
      firstname: "Suborno",
      lastname: "Gupta",
      role: "Former President",
      imageUrl: "/teams/former/suborno.jpg",
      details: "Class Of 2021, B.Tech, ME",
    },
    {
      firstname: "Shounak",
      lastname: "Dasgupta",
      role: "Former Secretary",
      imageUrl: "/teams/former/shounak.jpg",
      details: "Class Of 2021, B.Tech, ME",
    },
    {
      firstname: "Sushobhan",
      lastname: "Sarkar",
      role: "Former Secretary",
      imageUrl: "/teams/former/sushobhan.jpg",
      details: "Class Of 2021, B.Tech, ME",
    },
    {
      firstname: "Aitihya",
      lastname: "Karmakar",
      role: "Former Treasurer",
      imageUrl: "/teams/former/aitihya.jpg",
      details: "Class Of 2021, B.Tech, EE",
    },
    {
      firstname: "Sudeepta",
      lastname: "Gorai",
      role: "Former Executive Member",
      imageUrl: "/teams/former/sudeepta.jpg",
      details: "Class Of 2021, B.Tech, ME",
    },
    {
      firstname: "Anisha",
      lastname: "Majumdar",
      role: "Former Executive Member",
      imageUrl: "/teams/former/anisha.jpg",
      details: "Class Of 2021, B.Tech, ME",
    },
    {
      firstname: "Dhrubajyoti",
      lastname: "Gupta",
      role: "Former Executive Member",
      imageUrl: "/teams/former/DhrubajyotiGupta.jpg",
      details: "Class Of 2021, B.Tech, ME",
    },
    {
      firstname: "Sagnik",
      lastname: "Charkraborty",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/sagnik.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Sibam",
      lastname: "Roy",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/sibam.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Tiasa",
      lastname: "Das",
      role: "Former President",
      imageUrl: "/teams/former/Tiasa.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Abishek",
      lastname: "Gupta",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/abhisek.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Sukanta",
      lastname: "Manna",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/sukanta.jpg",
      details: "Class Of 2020, B.Tech, EE",
    },
    {
      firstname: "Debangshu",
      lastname: "Pramanik",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/debangshu.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Gaurish Kumar",
      lastname: "Shaw",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/gaurish.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Pallinti Krishna",
      lastname: " Chaitanya",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/pallinti_Krishna_chaitanya.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Meena kumari",
      lastname: " Jana",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/Meena.jpg",
      details: "Class Of 2020, B.Tech, MME",
    },
    {
      firstname: "Nikhil Kumar",
      lastname: "Kandula",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/Nikhil.jpg",
      details: "Class Of 2020, B.Tech, ME",
    },
    {
      firstname: "Amit Kumar",
      lastname: "Ball",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/amit.jpg",
      details: "PhD Scholar, CS",
    },
    {
      firstname: "Chayan",
      lastname: "Ghosh",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/user.jpg",
      details: "Final Year, B.Tech, ME",
    },
    {
      firstname: "Sk.",
      lastname: "Mehabub",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/user.jpg",
      details: "Final Year, B.Tech, ME",
    },
    {
      firstname: "Devansh.",
      lastname: "Goenka",
      role: "Former SAIC Member",
      imageUrl: "/teams/former/user.jpg",
      details: "Final Year, B.Tech, CSE",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col py-16 px-30" style={{ paddingTop: "30px" }}>
      {/* official bearers */}
      <h3 className="text-center text-orange-600 text-4xl">
        Office Bearers (2023-2024)
      </h3>

      <div
        className="grid grid-cols-1 md:grid-cols-3  my-7 px-3 md:mx-[30px]"
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {formerMembers.map((member, index) => (
          <div
            key={index}
            className="mb-8 items-center justify-between mx-auto"
            style={{ justifySelf: "center", alignSelf: "center" }}
          >
            {isMobile ? (
              //  this card will be shown in mobile devices
              <ProfileCardMobile
                firstname={member.firstname}
                lastname={member.lastname}
                role={member.role}
                imageUrl={member.imageUrl}
                details={member.details}
              />
            ) : (
              <div className="ml-24">
                <ProfileCard
                  firstname={member.firstname}
                  lastname={member.lastname}
                  role={member.role}
                  imageUrl={member.imageUrl}
                  details={member.details}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentMembers;
