
import ProfileCard from "../components/ProfileCard";

const PresentMembers = () => {
  const members = [
    {
      firstname: 'Arnab',
      lastname: 'Ghosh',
      role: 'President',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '4th Year, B.Tech, CH',
    },
    {
      firstname: 'John',
      lastname: 'Doe',
      role: 'Vice President',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '3rd Year, B.Tech, CS',
    },
    {
      firstname: 'Jane',
      lastname: 'Smith',
      role: 'Secretary',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '2nd Year, B.Tech, EE',
    },
    {
      firstname: 'Alice',
      lastname: 'Johnson',
      role: 'Treasurer',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: 'Final Year, B.Tech, ME',
    },
    {
      firstname: 'Michael',
      lastname: 'Brown',
      role: 'Head of Marketing',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '4th Year, B.Tech, ECE',
    },
    {
      firstname: 'Emily',
      lastname: 'Lee',
      role: 'Events Coordinator',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '3rd Year, B.Tech, CE',
    },
    {
      firstname: 'David',
      lastname: 'Miller',
      role: 'Public Relations Officer',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '2nd Year, B.Tech, AE',
    },
    {
      firstname: 'Sophia',
      lastname: 'Wang',
      role: 'Technical Lead',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: 'Final Year, B.Tech, IT',
    },
    {
      firstname: 'Daniel',
      lastname: 'Wilson',
      role: 'Media Coordinator',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '4th Year, B.Tech, CSE',
    },
    {
      firstname: 'Olivia',
      lastname: 'Taylor',
      role: 'Creative Director',
      imageUrl: '/teams/present/Arnab_ghosh.jpg',
      details: '3rd Year, B.Tech, ME',
    },
  ]

  return (
    <div className="flex flex-col py-16 px-30" style={{ paddingTop: '30px' }}>
      <h3 className="text-center text-orange-600 text-4xl">Office Bearers (2023-2024)</h3>

      <div className="md:grid grid-cols-3  my-7 mx-[30px] justify-between py-6 ">
        {members.map((member, index) => (
          <div key={index} className="mb-8 basis-1/4">
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
