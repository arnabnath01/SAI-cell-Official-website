
import Link from "next/link";
// 

// const page = () => {
//   return (
//     <div>
//       <PresentMembers />
//     </div>
//   )
// }

// export default page

import PresentMembers from "./present/page"
import Layout from "./layout";

export default function HomePage() {
  return (
  <>
          
      <PresentMembers/>

  </>);
}

HomePage.getLayout = function getLayout(page:any) {
  return <Layout>{page}
  </Layout>;
};

