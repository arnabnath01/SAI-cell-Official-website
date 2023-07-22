'use client'

import '@/styles/StAMP.css'
import Link from "next/link"

const page = () => {
  return (
    <div className="flex backgImage">
      <div className=" justify-center container bg-neutral-50/90 ">
        {/* about section */}
        <div>
          <h1 className=''>STUDENT ALUMNI MENTORSHIP PROGRAM (StAMP)</h1>
          <p>Engineering is not just a 4-years coursework, it’s a tough battle which prepares a student for the upcoming tougher challenges. Engineering involves making critical decisions, be it related to coursework, elective choice, career path or investment plans. So, it becomes very difficult for the students to survive in this competitive sphere without proper guidance. Often, we students start fretting about several issues, running pillar to post. What’s better than having someone as a guide, who has faced this turbulence before as a student. They are the Alumni of REC/NIT Durgapur, who are the stakeholders of various organizations around the globe. StAMP is an initiative which recognizes the important role of alumni mentoring relationships in carving a student’s career. The students of NIT DURGAPUR now have access to an astounding network of alumni who are eager to meet and impart their knowledge and experiences about life beyond the institute. StAMP is an excellent opportunity for the students to interact with the Alumni and build a long-lasting relationship with them. Mentors will provide guidance and support to the students by exchanging ideas and sharing their experiences and knowledge of career paths. Mentors serve as role models and leaders as they help students strive for their career goals.</p>

        </div>
        {/* GLow button */}


        <center>
          <Link href="/StAMP" target="_blank"><button className="blink ">StAMP Portal</button></Link>
        </center>

        {/* other texts */}

        <div>
          <section className="">
            <h1>Purpose of StAMP</h1>
            <p>
              1. Skill development for the students and expanding their networks.
              2.To get in the shoes of the leaders of various organizations and implement their classroom studies.
              3.Offer alumni an opportunity to influence educational and entrepreneurial aspirations of students and faculties of the Institute
            </p>
          </section>
          <section>
            <h1>Credentials for Mentors
              <h4>For Alumni who wish to</h4></h1>
            <p>
              <ol type="1">
                <li>
                  Share their real-world experiences and professional wisdom with the future generations of technocrats.
                </li>

                <li>
                  Broaden their leadership and mentoring skills.
                </li>

                <li>
                  Give back to their alma mater.
                </li>

              </ol>
            </p>
          </section>
          <section>
            <h1>  Credentials for Mentee
              For NIT DURGAPUR students who</h1>
            <p>
              Are sincere and dedicated.
              Wants to learn about career paths of successful alumni.
              Wishes to improve their leadership, management and other skills.
              Wants to stay informed and updated about the latest trends in Industry and Research fields.
              Wishes to establish connection with our Alumni.
            </p>
          </section>

          <center>
            <Link href="/StAMP" target="_blank"><button className="blink ">StAMP Portal</button></Link>
          </center>


        </div>

      </div>
    </div>
  )
}

export default page



