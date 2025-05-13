import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const testimonials = [
  {
    picture: "/images/google_small_icon.svg",
    name: "Wendy Groth",
    rating: 5,
    review:
      "I had a huge dead tree that needed to come down. They are fantastic! They cut the tree and hauled away the debris for a very fair price and in just a few hours. I was sad to see the tree go but Roots and Canopy made the process easy and simple. Thank you so much! I would recommend them for any job, large or small. A plus!",
  },
  {
    picture: "/images/google_small_icon.svg",
    name: "Barrett Schemmel",
    rating: 5,
    review:
      "Roots and Canopy Tree service did a great job replacing my shrubs. They showed up on time, did every thing they said they would. They protected the lawn and cleaned up.All this for a fair price. HIGHLY RECOMMEND. 5 stars",
  },
  {
    picture: "/images/google_small_icon.svg",
    name: "Terrill Coley",
    rating: 5,
    review:
      "I couldn't be happier with the yard work that was done! The team went above and beyond—every detail was handled with care and precision. The grass is perfectly trimmed, the edges are neat, and the entire yard looks clean and professionally maintained. They even took the time to clear out debris and leave everything spotless. It’s honestly the best my yard has looked in a long time. If you're looking for reliable, top-notch service, this is the crew to call. Highly recommend!",
  },
  {
    picture: "/images/google_small_icon.svg",
    name: "Tom Calato",
    rating: 5,
    review:
      "Awesome communication prior to the work, followed up with superior trimming of my large oak. I cannot say enough good things about their professionalism and quality work. Not only did I get a very competitive and very fair price, I ended up feeling like I got a tremendous value. Hauling away the branches was done quickly and the thorough cleaning up of the yard was unexpected. You can't go wrong!",
  },
];

const renderStars = (count) => {
  return Array.from({ length: count }, (_, index) => <FaStar key={index} />);
};

const Services = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center py-6"
      style={{ backgroundImage: 'url("/images/paint-bg-1.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="container mx-auto h-full flex flex-col items-center justify-center z-10">
        <div className="flex flex-col py-12">
          <h2 className="text-white">Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-10">
          {testimonials.map((testimonial, index) => {
            return (
              <div
                href="/"
                key={index}
                className="group text-white bg-white bg-opacity-20 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
              >
                <div className="flex-grow py-3">
                  <span className="font-italic">“{testimonial.review}”</span>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex flex-col items-start">
                    <p className="py-2">
                      <b>{testimonial.name}</b>
                    </p>
                    <p className="py-2 flex text-[#FFD250]">
                      {renderStars(testimonial.rating)}
                    </p>
                  </div>

                  <div className="flex flex-col items-end">
                    <p className="py-2">
                      <Image
                        src={testimonial.picture}
                        height={30}
                        width={30}
                        alt=""
                      />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

// const Services = () => {
//   return (
//     <section
//       className="relative w-full h-screen bg-cover bg-center"
//       style={{ backgroundImage: 'url("/images/paint-bg-1.jpg")' }}
//     >
//       <div className="absolute inset-0 bg-black opacity-80"></div>
//       <div className="container mx-auto h-full flex items-center justify-center z-10">
//         <div className="relative flex flex-col xl:flex-row justify-center items-center w-full space-y-8 xl:space-x-8 xl:space-y-0">
//           {/* Video iframe centered */}
//           <div className="flex justify-center items-center w-full">
//             <div className="relative w-full max-w-[800px] pb-[56.25%]">
//               {" "}
//               {/* 16:9 aspect ratio */}
//               <iframe
//                 className="absolute top-0 left-0 w-full h-full"
//                 src="https://www.youtube.com/embed/WTkuJzGIDoM"
//                 title="YouTube video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//           {/* Text content centered */}
//           <div className="flex flex-col justify-center items-center text-left p-4 text-white">
//             <div className="text-center xl:text-left">
//               <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center p-2">
//                 <p className="py-2">Professional Paint & House Maintenance</p>
//                 <div className=" flex justify-center items-center border-[#00008B] border-b-2 w-16 "></div>
//               </div>
//               <h2 className="p-2 max-w-full xl:max-w-[400px] text-center xl:text-left">
//                 House Painting{" "}
//                 <span className="text-[#00008B]">Is An Easy Task </span>
//               </h2>
//               <p className="max-w-[600px] p-4 text-center xl:text-left">
//                 Higuera's paint service is proud to serve the community with
//                 competitive prices.
//                 <br />
//                 <br />
//                 Since the start of our company, we have strived to obtain the
//                 best quality tools so that the jobs are done to the highest
//                 standards.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
