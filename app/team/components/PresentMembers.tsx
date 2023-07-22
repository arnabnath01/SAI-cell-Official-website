'use client'
import ProfileCard from "./ProfileCard"

const PresentMembers = () => {
  return (
    <div className="flex flex-col py-16 px-24" style={{ paddingTop: '30px' }}>
      <h3 className="text-center text-orange-600 text-4xl">Office Bearers (2023-2024)</h3>

      {/* profile card of final year */}
      <div className="flex
flex-row
 my-7
 mx-[30px]
justify-between
 py-6

 ">
        <ProfileCard firstname="arnab"
          lastname="ghosh"
          role="President"
          imageUrl="/teams/present/Arnab_ghosh.jpg"
          details="4th Year, B.Tech, CH"
        />
        <ProfileCard firstname="Agnila"
          lastname="Saha"
          role="Vice-President
          Content Writing Head"
          imageUrl="/teams/present/agnila_saha.jpg"
          details="4th Year, B.Tech, BT"
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
