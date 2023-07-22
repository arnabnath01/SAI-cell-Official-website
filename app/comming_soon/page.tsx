'use client'
import Image from 'next/image'

const page = () => {
    return (

        <div className='flex justify-around'>
            <Image
                src="/StAMP/coming_soon.jpg"
                alt='comming_soon'
                width={1000} height={1000} />
        </div>


    )
}

export default page
