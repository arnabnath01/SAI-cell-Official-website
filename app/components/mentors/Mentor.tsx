'use client'
import  m1 from "@/public/mentors/D K Pratihar.jpeg";
import  m2 from "@/public/mentors/JSB.jpeg";
import  m3 from "@/public/mentors/Purbarun Dhar.jpeg";
import  m4 from "@/public/mentors/S K Saha.jpeg";
import  m5 from "@/public/mentors/ssr.jpg";
import Image from "next/image";
import Link from "next/link";
function Mentor() {
  return (
    <>
      <div className="font-sans lg:px-20 sm:px-10 md:px-10">
        <h1 className=" text-slate-900 text-center mt-10 text-4xl font-bold CustomFont tracking-tight py-4 underline transition duration-500 ease-out-in transform-gpu hover:scale-110">
          Our Alumni Mentor
        </h1>
        {/*================ CODEPEN =======================*/}
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {/* <!--1st Column --> */}
            <div className="my-1 px-1  lg:my-4 lg:px-4 w-1/5 ">
              {/* <!-- Article --> */}
              <article className="overflow-hidden rounded-lg shadow-lg   transition duration-500 ease-in-out transform-gpu hover:scale-110">
                <Link href="/">
                  <Image
                    alt="Placeholder"
                    className="block h-auto w-full "
                    src={m1}
                  />
                </Link>

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-md">
                    <Link
                      className="no-underline hover:underline hover:text-blue-400 text-black text-center"
                      href="/"
                    >
                      D K Pratihar        
                    </Link>
                  </h1>
                </header>
              </article>
              {/* <!-- END Article --> */}
            </div>
            {/* <!-- END Column --> */}

            {/* <!--2nd Column --> */}
            <div className="my-1 px-1  lg:my-4 lg:px-4 w-1/5">
              {/* <!-- Article --> */}
              <article className="overflow-hidden rounded-lg shadow-lg transition duration-500 ease-in-out transform-gpu hover:scale-110">
                <Link href="/">
                  <Image
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={m2}
                  />
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-md">
                    <Link
                      className="no-underline hover:underline hover:text-blue-400 text-black"
                      href="/"
                    >
                      Jay Singh Bardia
                    </Link>
                  </h1>
                </header>
              </article>
              {/* <!-- END Article --> */}
            </div>
            {/* <!-- END Column --> */}

            {/* <!--3rd Column --> */}
            <div className="my-1 px-1 lg:my-4 lg:px-4 w-1/5 ">
              {/* <!-- Article --> */}
              <article className="overflow-hidden rounded-lg shadow-lg transition duration-500 ease-in-out transform-gpu hover:scale-110">
                <Link href="/">
                  <Image
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={m3}
                  />
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 ">
                  <h1 className="text-md">
                    <Link
                      className="no-underline hover:underline hover:text-blue-400 text-black"
                      href="/"
                    >
                     Purbarun Dhar
                    </Link>
                  </h1>
                </header>
              </article>
              {/* <!-- END Article --> */}
            </div>
            {/* <!-- END Column --> */}

            {/* <!--4th Column --> */}
            <div className="my-1 px-1 lg:my-4 lg:px-4 w-1/5">
              {/* <!-- Article --> */}
              <article className="overflow-hidden rounded-lg shadow-lg   transition duration-500 ease-in-out transform-gpu hover:scale-110">
                <Link href="/">
                  <Image
                    alt="Placeholder"
                    className="block h-auto w-full justify-center"
                    src={m4}
                  />
                </Link>  

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-md">
                    <Link
                      className="no-underline hover:underline hover:text-blue-400 text-black"
                      href="/"
                    >
                      Subir Kumar Saha
                    </Link>
                  </h1>
                </header>
              </article>
              {/* <!-- END Article --> */}
            </div>
            {/* <!-- END Column -->

        <!--5th Column --> */}
            <div className="my-1 px-1 w-1/5 lg:my-4 lg:px-4 ">
              {/* <!-- Article --> */}
              <article className="overflow-hidden rounded-lg shadow-lg   transition duration-500 ease-in-out transform-gpu hover:scale-110">
                <Link href="/">
                  <Image
                    alt="Placeholder"
                    className="block h-auto w-full justify-center"
                    src={m5}
                  />
                </Link>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-md">
                    <Link
                      className="no-underline hover:underline hover:text-blue-400 text-black"
                      href="https://nitdgp.ac.in/department/mechanical-engineering/faculty-11/shibendu-shekhar-roy"
                    >
                      Shibendu Sekhar Roy
                    </Link>
                  </h1>
                </header>
              </article>
              {/* <!-- END Article --> */}
            </div>
            {/* <!-- END Column --> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Mentor;
