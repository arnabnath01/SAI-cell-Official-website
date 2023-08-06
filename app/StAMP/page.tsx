
import '@/styles/StAMP.css'
import Link from "next/link"
import Carousel from './components/Carousel'

const page = () => {
  const mentors = [{
    name: "D K Pratihar",
    image: "/mentors/D K Pratihar.jpeg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/JSB.jpeg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/PM.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/Purbarun Dhar.jpeg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/S K Saha.jpeg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/SKP.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/TN.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/hindolBose.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/hindolBose.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/samikDutta.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/hindolBose.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  {
    name: "D K Pratihar",
    image: "/mentors/hindolBose.jpg",
    desc: 'prof description',
    Department: "cse"
  },
  ]

  return (
    <div className="flex flex-col backgImage ">
      <div className=" justify-center container bg-neutral-50/90 mt-20  ">
        {/* about section */}
        <div className='w-1/2 md:w-full '>
          <h1 className='mt-7 text-center text-3xl text-[#93166b]'>STUDENT ALUMNI MENTORSHIP PROGRAM (StAMP)</h1>
          <p className='text-[#93166b] text-base py-8 space-y-1 mx-5 text-justify leading-7' >Engineering is not just a 4-yars coursework, it’s a tough battle which prepares a student for the upcoming tougher challenges. Engineering involves making critical decisions, be it related to coursework, elective choice, career path or investment plans. So, it becomes very difficult for the students to survive in this competitive sphere without proper guidance. Often, we students start fretting about several issues, running pillar to post. What’s better than having someone as a guide, who has faced this turbulence before as a student. They are the Alumni of REC/NIT Durgapur, who are the stakeholders of various organizations around the globe. StAMP is an initiative which recognizes the important role of alumni mentoring relationships in carving a student’s career. The students of NIT DURGAPUR now have access to an astounding network of alumni who are eager to meet and impart their knowledge and experiences about life beyond the institute. StAMP is an excellent opportunity for the students to interact with the Alumni and build a long-lasting relationship with them. Mentors will provide guidance and support to the students by exchanging ideas and sharing their experiences and knowledge of career paths. Mentors serve as role models and leaders as they help students strive for their career goals.</p>
        </div>
        {/* GLow button */}
        <center className='w-1/2 md:w-full'>
          <Link href="/StAMP" target="_blank"><button className="blink ">StAMP Portal</button></Link>
        </center>

        {/* other texts */}

        <div className='my-7 w-1/2 md:w-full'>
          <section className=" text-black px-6 py-9">
            <h1 className='text-xl pb-5'>Purpose of StAMP</h1>
            <p className='text-sm leading-6'>
              1. Skill development for the students and expanding their networks.  <br />
              2.To get in the shoes of the leaders of various organizations and implement their classroom studies. <br />
              3.Offer alumni an opportunity to influence educational and entrepreneurial aspirations of students and faculties of the Institute
            </p>
          </section>
          <section className='text-black px-6 py-9'>
            <h1 className='text-xl pb-5'>Credentials for Mentors
              <h4 className='text-lg text-gray-500'>For Alumni who wish to</h4></h1>
            <p className='text-sm leading-6'>
              <ol >
                <li>
                  1. Share their real-world experiences and professional wisdom with the future generations of technocrats.
                </li>
                <li>
                  2. Broaden their leadership and mentoring skills.
                </li>
                <li>
                  3. Give back to their alma mater.
                </li>
              </ol>
            </p>
          </section>
          <section className='text-black px-6 py-9'>
            <h1 className='text-xl pb-5'>  Credentials for Mentee
              <h4 className='text-sm text-gray-500'>For NIT DURGAPUR students who</h4> </h1>
            <p className='text-sm leading-6'>
              1. Are sincere and dedicated. <br />
              2. Wants to learn about career paths of successful alumni. <br />
              3. Wishes to improve their leadership, management and other skills. <br />
              4. Wants to stay informed and updated about the latest trends in Industry and Research fields. <br />
              5. Wishes to establish connection with our Alumni. <br />
            </p>
          </section>

          <center>
            <Link href="/StAMP" target="_blank"><button className="blink ">StAMP Portal</button></Link>
          </center>
        </div>
        <div className='pb-6 mt-[50px] bg-neutral-50/90 w-1/2 md:w-full'>
          <h2 className='text-4xl text-center font-normal mb-7 text-blue-950'>Our Mentors</h2>
          <hr />
          <Carousel mentors={mentors} />
        </div>
      </div>


    </div>

  )
}

export default page