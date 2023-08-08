
import ProfileCard from "../components/ProfileCard";

const PresentMembers = () => {

  // official members details
  const officialBearer = [
    {
      firstname: 'Arnab',
      lastname: 'Ghosh',
      role: 'President',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '4th Year, B.Tech, CH',
    },
    {
      firstname: 'Agnila',
      lastname: 'Saha',
      role: 'Vice-President, Content Writing Head',
      imageUrl: '/teams/present/agnila_saha.jpg',
      details: '4th Year, B.Tech, BT',
    },
    {
      firstname: 'Md Nasir',
      lastname: '',
      role: 'General Secretary',
      imageUrl: '/teams/present/Md Nasir-Civil Engineering-1st year.jpg',
      details: '4th Year, B.Tech, CE',
    },

    {
      firstname: 'Debjit',
      lastname: 'Maji',
      role: 'Joint Treasurer',
      imageUrl: '/teams/present/debjit_maji.jpg',
      details: '4th Year, B.Tech,  EE',
    },
    {
      firstname: 'Deepak',
      lastname: 'Varalasetty',
      role: 'Graphics and Videography Head,IT Head',
      imageUrl: '/teams/present/Deepak varalasetty_ECE.png',
      details: '4th Year, B.Tech,CS',
    },
    {
      firstname: 'Deepika',
      lastname: 'chenna',
      role: 'Event and Publicity Head',
      imageUrl: '/teams/present/Deepika_chenna.jpg',
      details: '4th Year, B.Tech, ME',
    },
    {
      firstname: 'Souvik',
      lastname: 'Pal',
      role: 'General Secretary',
      imageUrl: '/teams/present/Souvik Pal_BT.jpg',
      details: '4th Year, B.Tech, BT',
    },


  ];

  //executive members details

  const executiveMembers = [
    {
      firstname: 'Abheerup',
      lastname: 'Sarkar',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/abhirup_s (1).jpg',
      details: '4th Year, B.Tech, BT',
    },
    {
      firstname: 'Aniket ',
      lastname: 'Kamble',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/Aniket_Kamble.jpg',
      details: '3rd Year, B.Tech, CH',
    },
    {
      firstname: 'Arindam ',
      lastname: 'Chatterjee',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/arindan_c.jpg',
      details: '3rd Year, B.Tech, MME',
    },
    {
      firstname: 'Balli ',
      lastname: 'Chanukya',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/balli_c.jpg',
      details: '3rd Year, B.Tech, CSE',
    },
    {
      firstname: 'Nikhil',
      lastname: 'Kumar',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/nikhil_k.jpg',
      details: '3rd Year, B.Tech, ME',
    },
    {
      firstname: 'N.Surya',
      lastname: 'Hemanth',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/nsh.jpg',
      details: '3rd Year, B.Tech, ECE',
    },
    {

      firstname: 'Rishav ',
      lastname: 'Mondal',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/Rishav.jpg',
      details: '3rd Year, B.Tech, ME',
    },
    {
      firstname: 'Samanvita',
      lastname: '',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/samavita.jpg',
      details: '3rd Year, B.Tech, ECE',
    },
    {
      firstname: 'Shayoni ',
      lastname: 'Mahato',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/shayoni_m.jpg',
      details: '3rd Year, B.Tech, EE',
    },
    {
      firstname: 'SHUBHAM',
      lastname: 'GHOSH',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/SHUBHAM_GHOSH.jpg',
      details: '3rd Year, B.Tech, MME',
    },
    {
      firstname: 'Sneha ',
      lastname: 'Ghosh',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/sneha_g.jpg',
      details: '3rd Year, B.Tech, IC',
    },
    {
      firstname: 'Soumik ',
      lastname: 'Roy Choudhury',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/soumak_rc.jpg',
      details: '3rd Year, B.Tech, CSE',
    },
    {
      firstname: 'Agnila',
      lastname: 'Saha',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/Deepika_chenna.jpg',
      details: '3rd Year, B.Tech, CH',
    },
    {
      firstname: 'SOUMYADIP',
      lastname: 'DEBNATH',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/SOUMYADIP_DEBNATH.jpg',
      details: '3rd Year, B.Tech, ME',
    },
    {
      firstname: 'T.V.N.S.PRAVEEN',
      lastname: '',
      role: 'SAIC Executive Member',
      imageUrl: '/teams/present/T.V.N.S.PRAVEEN.jpg',
      details: '3rd Year, B.Tech, ECE',
    },
  ]

  // cell members pics

  const cellMembers = [
    {
      firstname: 'Satyak ',
      lastname: 'Chaudhuri',
      role: 'SAIC Member',
      imageUrl: '/teams/present/2.jpg',
      details: '4th Year, B.Tech, ME',
    },
    {
      firstname: 'Amanjyoti',
      lastname: 'Mullick',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Amanjyoti_Mullick_3rd_EE.jpg',
      details: '4th Year, B.Tech, EE',
    },
    {
      firstname: 'Arnab',
      lastname: 'Nath',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Arnab_Nath_3rd_CSE.jpg',
      details: '4th Year, B.Tech, CSE',
    },
    {
      firstname: 'Bala',
      lastname: 'Ganesh',
      role: ' SAIC Member',
      imageUrl: '/teams/present/Bala_Ganesh_1st_CSE.jpg',
      details: '4th Year, B.Tech, CSE',
    },

    {
      firstname: 'Katravath',
      lastname: 'Navya',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Katravath_Navya_1st_ME.jpg',
      details: '4th Year, B.Tech, ME',
    },
    {
      firstname: 'Pappu ',
      lastname: 'Sharmila',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Pappu_Sharmila_1st_ECE.jpg',
      details: '4th Year, B.Tech, ECE',
    },
    {
      firstname: 'Pratishtha',
      lastname: 'Barua',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Pratishtha_Barua_1st_EE.jpg',
      details: '4th Year, B.Tech, EE',
    },
    {
      firstname: 'Rahul ',
      lastname: 'Mondal',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Rahul_Mondal_1st_ME.jpg',
      details: '4th Year, B.Tech, ME',
    },
    {
      firstname: 'Reshmi',
      lastname: 'Saha',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Reshmi_Saha_1st_EC.jpg',
      details: '4th Year, B.Tech, EC',
    },
    {
      firstname: 'Sai',
      lastname: 'Kiran',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Sai_Kiran_3rd_EE.jpg',
      details: '4th Year, B.Tech, EE',
    },
    {
      firstname: 'Sai_Kumar',
      lastname: '',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Sai_Kumar_1st_ME.jpg',
      details: '4th Year, B.Tech, ME',
    },
    {
      firstname: 'Sanjib ',
      lastname: 'Maity',
      role: 'SAIC Member',
      imageUrl: '/teams/present/SANJIB_MAITY_1st_MME.jpg',
      details: '4th Year, B.Tech, MME',
    },
    {
      firstname: 'Satish ',
      lastname: 'Abbadasari',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Satish_Abbadasari_3rd_CSE.jpg',
      details: '4th Year, B.Tech, CSE B',
    },
    {
      firstname: 'Souhardya ',
      lastname: 'Majumder',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Souhardya_Majumder_1st_ECE.jpg',
      details: '4th Year, B.Tech, ECE',
    },
    {
      firstname: 'Soumi ',
      lastname: 'Ghosh',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Soumi_Ghosh_1st_CH.jpg',
      details: '4th Year, B.Tech, CH',
    },
    {
      firstname: 'Soumili',
      lastname: 'Ghosh',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Soumili_Ghosh_1st_MME.jpg',
      details: '4th Year, B.Tech, MME',
    },
    {
      firstname: 'Sudipta',
      lastname: 'Das',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Sudipta_Das_3rd_CSE.jpg',
      details: '4th Year, B.Tech, CSE',
    },
    {
      firstname: 'Supriyo',
      lastname: 'Mondal',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Supriyo_mondal_1st_CE (1).jpg',
      details: '4th Year, B.Tech, CE',
    },
    {
      firstname: 'Swarnim',
      lastname: 'Suryansh',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Swarnim_MM.jpg',
      details: '4th Year, B.Tech, MME',
    },
    {
      firstname: 'Uppada ',
      lastname: 'Sravanthi',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Uppada_Sravanthi_1st_ME.jpg',
      details: '4th Year, B.Tech, ME',
    },
    {
      firstname: 'Vishal',
      lastname: 'Gupta',
      role: 'SAIC Member',
      imageUrl: '/teams/present/Vishal_Gupta_1st_ME.jpg',
      details: '4th Year, B.Tech, ME',
    },

  ]


  return (
    <div className="flex flex-col py-16 px-30 " style={{ paddingTop: '30px' }}>

      {/* official bearers */}
      <h3 className="text-center text-orange-600 text-4xl">Office Bearers (2023-2024)</h3>

      <div className="grid grid-cols-2 md:grid-cols-3  my-7 px-3 md:mx-[30px] py-6  pl-40" style={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
        {officialBearer.map((member, index) => (
          <div key={index} className="mb-8 items-center justify-between mx-auto" style={{ justifySelf: 'center', alignSelf: 'center' }}>
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
      <h3 className="mt-5 text-center text-orange-600 text-4xl">SAIC Executive Member</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 my-7 px-3 md:mx-[30px] py-6 max-md:pl-20  md:pl-40" style={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
        {executiveMembers.map((member, index) => (
          <div key={index} className="mb-8 items-center justify-between mx-auto" style={{ justifySelf: 'center', alignSelf: 'center' }}>
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
      <h3 className="mt-5 text-center text-orange-600 text-4xl">SAI Cell Member</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 my-7 px-3 md:mx-[30px] py-6  pl-40" style={{ display: 'grid', justifyContent: 'center', alignContent: 'center' }}>
        {cellMembers.map((member, index) => (
          <div key={index} className="mb-8 items-center justify-between mx-auto" style={{ justifySelf: 'center', alignSelf: 'center' }}>
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
