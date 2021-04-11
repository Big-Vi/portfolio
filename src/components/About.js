// import React, { useState, useEffect } from "react";
// import sanityClient from "../client.js";

// export default function About() {
//   // const [author, setAuthor] = useState(null);

//   useEffect(() => {
//     sanityClient
//       .fetch(
//         `*[_type == 'author']{
//                 name,
//                 bio
//             }`
//       )
//       .then((data) => setAuthor(data[0]))
//       .catch(console.error);
//   }, []);

//   return (
//     <main>
//       <section>
//         <h1>About</h1>
//         <div>
//             <article>
//                 <span>
//                   <span>
//                     {/* <h3>{author.name}</h3> */}
//                   </span>
//                 </span>
//             </article>
//         </div>
//       </section>
//     </main>
//   );
// }
