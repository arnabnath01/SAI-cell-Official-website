
import ProfileCard from "../components/ProfileCard";

const PresentMembers = () => {
  // official members details

 const officialBearer = [
   {
     firstname: "Amanjyoti ",
     lastname: "Mullick",
     role: "President",
     imageUrl: "/teams/present/officialBearer/Amanjyoti_Mullick.jpg",
     details: "4th Year, EE",
   },
   {
     firstname: "Shayoni ",
     lastname: "Mahato",
     role: "Vice-President",
     imageUrl: "/teams/present/officialBearer/Shayoni_Mahato.jpg",
     details: "4th Year, EE",
   },
   {
     firstname: "Balli",
     lastname: "Chanukya",
     role: "General Secretary",
     imageUrl: "/teams/present/officialBearer/Balli_Chanukya.jpg",
     details: "4th Year, CSE",
   },
   {
     firstname: "Arindam",
     lastname: "Chatterjee",
     role: "Assistant General Secretary",
     imageUrl: "/teams/present/officialBearer/Arindam_Chatterjee.jpg",
     details: "4th Year, MME",
   },
   {
     firstname: "Soumik ",
     lastname: "Roy Choudhury",
     role: "Treasurer",
     imageUrl: "/teams/present/officialBearer/soumak_rc.jpg",
     details: "4th Year, CSE",
   },
   {
     firstname: "T.V.N.S.PRAVEEN",
     lastname: "",
     role: "Joint Treasurer",
     imageUrl: "/teams/present/officialBearer/T.V.N.S.PRAVEEN.jpg",
     details: "4th Year, ECE",
   },
   {
     firstname: "Satyaki",
     lastname: "Chaudhuri",
     role: "Convenor",
     imageUrl: "/teams/present/officialBearer/Satyaki_Chaudhuri.jpeg",
     details: "4th Year, ME",
   },
   {
     firstname: "Sai",
     lastname: "Kiran",
     role: "Graphic Designing Head",
     imageUrl: "/teams/present/officialBearer/Sai_Kiran.jpg",
     details: "4th Year, EE",
   },
   {
     firstname: "Rounak ",
     lastname: "Sarkar",
     role: "Graphic Designing Head",
     imageUrl: "/teams/present/officialBearer/Rounak_Sarkar.jpg",
     details: "4th Year, CSE",
   },
   {
     firstname: "Abheerup",
     lastname: "Sarkar",
     role: "Content Head",
     imageUrl: "/teams/present/officialBearer/Abheerup_Sarkar.jpg",
     details: "4th Year, BT",
   },
   {
     firstname: "Sneha",
     lastname: "Ghosh",
     role: "Content Head",
     imageUrl: "/teams/present/officialBearer/Sneha_Ghosh.jpg",
     details: "4th Year, ME",
   },
   {
     firstname: "Soumyadip ",
     lastname: "Debnath",
     role: "Event Head",
     imageUrl: "/teams/present/officialBearer/Soumyadip_Debnath.jpg",
     details: "4th Year, ME",
   },
   {
     firstname: "Samanvita",
     lastname: "",
     role: "Publicity Head",
     imageUrl: "/teams/present/officialBearer/samavita.jpg",
     details: "4th Year, ECE",
   },
   {
     firstname: "N.Surya",
     lastname: "Hemanth",
     role: "Social Media Head",
     imageUrl: "/teams/present/officialBearer/N.Surya_Hemanth.jpg",
     details: "4th Year, ECE",
   },

   {
     firstname: "Satish",
     lastname: "Abbadasari",
     role: "Social Media Head",
     imageUrl: "/teams/present/officialBearer/Satish_Abbadasari.jpg",
     details: "4th Year, CSE",
   },
   {
     firstname: "Arnab ",
     lastname: "Nath",
     role: "Web Development Head",
     imageUrl: "/teams/present/officialBearer/Arnab_Nath.jpg",
     details: "4th year, CSE",
   },
   {
     firstname: "Sudipta",
     lastname: "Das",
     role: "Web Development Head",
     imageUrl: "/teams/present/officialBearer/Sudipta_Das.jpg",
     details: "4th year, CSE",
   },
   {
     firstname: "Nikhil ",
     lastname: "Kumar",
     role: "Vedio Editing Head",
     imageUrl: "/teams/present/officialBearer/Nikhil_Kumar.jpg",
     details: "4th Year, ME",
   },
 ];
  //executive members details

const executiveMembers = [
  {
    firstname: "SAI KUMAR ",
    lastname: "ADIREDDY",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/SAIKUMAR_ADIREDDY.jpg",
    details: "3rd year, ME",
  },

  {
    firstname: "KANIKICHARLA ",
    lastname: "BALA GANESH",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/KANIKICHARLA_BALAGANESH.jpg",
    details: "3rd year, CSE",
  },

  {
    firstname: "PAPPU ",
    lastname: "SHARMILA",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/PAPPU_SHARMILA.jpg",
    details: "3rd year, ECE",
  },

  {
    firstname: "R S B Bikarna ",
    lastname: "Baidya",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/R S B Bikarna_Baidya.jpg",
    details: "3rd year, CE",
  },

  {
    firstname: "Supriyo ",
    lastname: "Mondal",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Supriyo_Mondal.jpg",
    details: "3rd year, CE",
  },

  {
    firstname: "Vishal ",
    lastname: "Gupta",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Vishal_Gupta.jpg",
    details: "3rd year, ME",
  },

  {
    firstname: "Sanjib ",
    lastname: "Maity",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/SANJIB_MAITY.jpg",
    details: "3rd year, MME",
  },

  {
    firstname: "Swarnim ",
    lastname: "Suryansh",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Swarnim_Suryansh.jpg",
    details: "3rd year, MME",
  },
  {
    firstname: "Rahul ",
    lastname: "Mondal",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Rahul_Mondal.jpg",
    details: "3rd year, ME",
  },

  {
    firstname: "Soumili ",
    lastname: "Ghosh",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Soumili_Ghosh.jpg",
    details: "3rd year, MME",
  },

  {
    firstname: "Katravath ",
    lastname: "Navya",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Katravath_Navya.jpg",
    details: "3rd year, ME",
  },

  {
    firstname: "Pratishtha ",
    lastname: "Barua",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Pratishtha_Barua.jpg",
    details: "3rd year, EE",
  },

  {
    firstname: "Soumi ",
    lastname: "Ghosh",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Soumi_Ghosh.jpg",
    details: "3rd year, CH",
  },

  {
    firstname: "Souhardya ",
    lastname: "Majumder",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Souhardya_Majumder.jpg",
    details: "3rd year, ECE",
  },

  {
    firstname: "Uppada ",
    lastname: "Sravanthi",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Uppada_Sravanthi.jpg",
    details: "3rd year, ME",
  },

  {
    firstname: "Reshmi ",
    lastname: "Saha",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Reshmi_Saha.jpg",
    details: "3rd year, ECE",
  },
  {
    firstname: "Deepjyoti ",
    lastname: "Dutta",
    role: "SAIC Executive Member",
    imageUrl: "/teams/present/Deepjyoti_Dutta.jpg",
    details: "3rd year, CE",
  },
];

  const cellMembers = [
    {
      firstname: "Avisikta",
      lastname: "Mandal",
      role: " SAIC Member",
      imageUrl: "/teams/present/Avisikta_Mondal.jpg",
      details: "2nd year, ME",
    },

    {
      firstname: "PRAKASH CH.",
      lastname: "DAS",
      role: "SAIC Member",
      imageUrl: "/teams/present/PRAKASH CH._DAS.jpg",
      details: "2nd year, MME",
    },
    {
      firstname: "Jaswika Mithram ",
      lastname: "Kilaru",
      role: "SAIC Member",
      imageUrl: "/teams/present/Jaswika Mithram_Kilaru.jpg",
      details: "2nd year, CSE",
    },
    {
      firstname: "SATYAKE",
      lastname: "SADHUKAN",
      role: "SAIC Member",
      imageUrl: "/teams/present/SATYAKE_SADHUKAN.jpg",
      details: "2nd year, MME",
    },
    {
      firstname: "Galipelly",
      lastname: "Sriram",
      role: "SAIC Member",
      imageUrl: "/teams/present/Galipelly_Sriram.jpg",
      details: "2nd year, CE",
    },
    {
      firstname: "Anagh",
      lastname: "Sinha",
      role: "SAIC Member",
      imageUrl: "/teams/present/Anagh_Sinha.jpg",
      details: "2nd year, ME",
    },
    {
      firstname: "SAFIYA TASNEEM",
      lastname: "SHAIK",
      role: "SAIC Member",
      imageUrl: "/teams/present/SAFIYA TASNEEM_SHAIK.jpg",
      details: "2nd year, ME",
    },
    {
      firstname: "Aparup",
      lastname: "Goswami",
      role: "SAIC Member",
      imageUrl: "/teams/present/Aparup_Goswami.jpg",
      details: "2nd year, MME",
    },
    {
      firstname: "Sagar ",
      lastname: "Murmu",
      role: "SAIC Member",
      imageUrl: "/teams/present/Sagar_Murmu.jpg",
      details: "2nd year, ME",
    },
    {
      firstname: "Joys ",
      lastname: "Pakalapati",
      role: "SAIC Member",
      imageUrl: "/teams/present/Joys_Pakalapati.jpg",
      details: "2nd year, ME",
    },
    {
      firstname: "Tulasi ",
      lastname: "Patra",
      role: "SAIC Member",
      imageUrl: "/teams/present/Tulasi_Patra.jpg",
      details: "2nd year, ME",
    },
    {
      firstname: "",
      lastname: "Pottella",
      role: "SAIC Member",
      imageUrl: "/teams/present/_Pottella.jpg",
      details: "2nd year, ME",
    },
    {
      firstname: "Subhamita",
      lastname: "Halder",
      role: "SAIC Member",
      imageUrl: "/teams/present/Subhamita_Halder.jpg",
      details: "2nd year, CSE",
    },

    {
      firstname: "Riya",
      lastname: "Singh",
      role: "SAIC Member",
      imageUrl: "/teams/present/Riya_Singh.jpg",
      details: "2nd year, CE",
    },
    {
      firstname: "Mandala",
      lastname: "Bharadwaj",
      role: "SAIC Member",
      imageUrl: "/teams/present/Mandala_Bharadwaj.jpg",
      details: "2nd year, CSE",
    },
  ];

  return (
    <div className="flex flex-col py-16 px-30 " style={{ paddingTop: "30px" }}>
      {/* official bearers */}
      <h3 className="text-center text-orange-600 text-4xl">
        Office Bearers (2024-2025)
      </h3>

      <div
        className="grid grid-cols-2 md:grid-cols-3  my-7 px-3 md:mx-[30px] py-6  pl-40"
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {officialBearer.map((member, index) => (
          <div
            key={index}
            className="mb-8 items-center justify-between mx-auto"
            style={{ justifySelf: "center", alignSelf: "center" }}
          >
            <ProfileCard
              firstname={member.firstname}
              lastname={member.lastname}
              role={member.role}
              imageUrl={member.imageUrl}
              details={member.details}
            />
          </div>
        ))}
      </div>
      <hr />

      {/* executive bearers */}
      <h3 className="mt-5 text-center text-orange-600 text-4xl">
        SAIC Executive Member
      </h3>
      <div
        className="grid grid-cols-2 md:grid-cols-3 my-7 px-3 md:mx-[30px] py-6 max-md:pl-20  md:pl-40"
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {executiveMembers.map((member, index) => (
          <div
            key={index}
            className="mb-8 items-center justify-between mx-auto"
            style={{ justifySelf: "center", alignSelf: "center" }}
          >
            <ProfileCard
              firstname={member.firstname}
              lastname={member.lastname}
              role={member.role}
              imageUrl={member.imageUrl}
              details={member.details}
            />
          </div>
        ))}
      </div>

      <hr />

      {/*SAI Cell Member */}
      <h3 className="mt-5 text-center text-orange-600 text-4xl">
        SAI Cell Member
      </h3>
      <div
        className="grid grid-cols-2 md:grid-cols-3 my-7 px-3 md:mx-[30px] py-6  pl-40"
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {cellMembers.map((member, index) => (
          <div
            key={index}
            className="mb-8 items-center justify-between mx-auto"
            style={{ justifySelf: "center", alignSelf: "center" }}
          >
            <ProfileCard
              firstname={member.firstname}
              lastname={member.lastname}
              role={member.role}
              imageUrl={member.imageUrl}
              details={member.details}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresentMembers;
