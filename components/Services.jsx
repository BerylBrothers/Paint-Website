import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
const testimonials = [
  {
    picture: "/images/google_small_icon.svg",
    name: "Sarah Thompson",
    rating: 5,
    review:
      "I recently hired this house painting company to refresh the exterior of my home, and I couldn't be happier with the results! The team was professional, punctual, and paid great attention to detail. They helped me choose the perfect color scheme, and the transformation is stunning. I highly recommend their services to anyone looking to enhance their home's curb appeal!",
  },
  {
    picture: "/images/google_small_icon.svg",
    name: "Mark Johnson",
    rating: 5,
    review:
      "From start to finish, my experience with this painting company was fantastic. The crew was friendly and respectful, and they worked efficiently to complete the job ahead of schedule. The quality of their work is top-notch, and I appreciate how they took the time to clean up after themselves. I will definitely be using them again for future projects.",
  },
  {
    picture: "/images/google_small_icon.svg",
    name: "Emily Rodriguez",
    rating: 5,
    review:
      "I can't say enough good things about this house painting company! They painted the interior of my home, and the results exceeded my expectations. The painters were meticulous and took the time to ensure every corner was perfect. They were also very accommodating to my schedule. I’ve received so many compliments from friends and family. I will be recommending them to everyone!",
  },
  {
    picture: "/images/google_small_icon.svg",
    name: "David Lee",
    rating: 5,
    review:
      "I was nervous about hiring a painting company, but this team made the process so easy and stress-free. They provided a detailed estimate and were transparent about the timeline and costs. The quality of their work is exceptional, and they truly transformed my living space. I’m thrilled with the outcome and would recommend them to anyone looking for reliable and skilled painters.",
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
