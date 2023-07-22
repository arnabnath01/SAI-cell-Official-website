'use client'


import ProfileCard from "../components/ProfileCard"

const PresentMembers = () => {
  return (
    <div className="flex flex-col " style={{ paddingTop: '30px' }}>
      <h3 className="text-center text-orange-600">Office Bearers (2023-2024)</h3>

      {/* profile card of final year */}
      <div className="flex
flex-row
 my-7
 mx-3
justify-between
 py-6
 
 ">
        <ProfileCard firstname="arnab"
          lastname="ghosh"
          role="President"
          imageUrl="/teams/present/Arnab_ghosh.jpg"
          details="4th Year, B.Tech, CH"
        />
        <ProfileCard firstname="arnab"
          lastname="ghosh"
          role="President"
          imageUrl="/teams/present/Arnab_ghosh.jpg"
          details="4th Year, B.Tech, CH"
        />
        <ProfileCard firstname="arnab"
          lastname="ghosh"
          role="President"
          imageUrl="/teams/present/Arnab_ghosh.jpg"
          details="4th Year, B.Tech, CH"
        />

      </div>



    </div>
  )
}

export default PresentMembers
