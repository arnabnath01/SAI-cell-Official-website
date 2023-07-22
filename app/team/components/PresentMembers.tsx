'use client'


import ProfileCard from "./ProfileCard"

const PresentMembers = () => {
  return (
    <div className="flex flex-row" style={{ paddingTop: '30px' }}>
    <h3>Office Bearers (2023-2024)</h3> 

    {/* profile card of final year */}
<div className="flex
 flex-row
 my-20">
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
