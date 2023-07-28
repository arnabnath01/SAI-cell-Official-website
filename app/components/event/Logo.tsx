"use client"

import Image from "next/image"

const Logo = () => {
  return (
    <div className="items-center">
      <Image className="rounded-full"
      src="/logo-pics/saic_logo.jpg"
      alt="sai logo"
      height={399}
      width={320}
      />
    </div>
  )
}

export default Logo
