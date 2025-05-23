"use client";

import Image from "next/image";

// Items
const items = [
  {
    image: "/images/tiny-phone-image.jpg",
    action: "1 Request Us",
    description:
      "Initiate the process by reaching out to our team with your house painting needs.",
  },
  {
    image: "/images/tiny-house.jpg",
    action: "2 Inspect Property",
    description:
      "We will come to your residence or place of business to give you a free estimate.",
  },
  {
    image: "/images/tiny-image-2.jpg",
    action: "3 Painting Houses",
    description:
      "Our team will arrive at your location to efficiently paint your home or business.",
  },
  {
    image: "/images/tiny-image-3.jpg",
    action: "4 Service Done",
    description:
      "Once the the job is complete, we will clean up the area, and leave the property.",
  },
];

const ParallaxComponent = () => {
  return (
    <section className="relative w-full h-min-screen xl:h-[40vh] flex items-center justify-center">
      <div className="parallax-background py-4 xl:py-0">
        <div className="overlay"></div>

        <div className="container mx-auto text-center px-4 flex justify-center items-center h-full z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div
                className="flex flex-col justify-center items-center text-white z-10 group p-4"
                key={index}
              >
                <div className="mb-4 opacity-50 transition-all duration-300 hover:opacity-100">
                  <div className="flex items-center justify-center gap-4 w-full">
                    <div className="relative w-10 h-10 xl:w-14 xl:h-14">
                      <Image
                        src={item.image}
                        alt=""
                        height={65}
                        width={65}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center whitespace-nowrap">
                      <h4>{item.action}</h4>
                    </div>
                  </div>
                  <div className="border-t-2 border-white py-4 mt-4 sm:border-t-1 sm:py-2 md:border-t-2 md:py-4 transition-all duration-300 group-hover:border-[#00008B] ">
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxComponent;

// Parallax mobile code

// const ParallaxComponent = () => {
//   return (
//     <section className="relative w-full h-[70vh] xl:h-[50vh] flex items-center justify-center">
//       {/* Parallax background (fixed) */}
//       <div className="parallax-background2"></div>

//       {/* Overlay on top of the background */}
//       <div className="overlay"></div>

//       {/* Content container */}
//       <div className="container mx-auto text-center px-4 flex justify-center items-center h-full relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {items.map((item, index) => (
//             <div
//               className="flex flex-col justify-center items-center text-white z-10 group"
//               key={index}
//             >
//               <div className="mb-4 opacity-50 transition-all duration-300 hover:opacity-100">
//                 <div className="flex items-center justify-center gap-4 w-full">
//                   <div className="relative w-10 h-10 xl:w-20 xl:h-20">
//                     <Image
//                       src={item.image}
//                       alt=""
//                       height={100}
//                       width={100}
//                       className="rounded-full object-cover"
//                     />
//                   </div>
//                   <div className="flex flex-col justify-center">
//                     <h3>{item.action}</h3>
//                   </div>
//                 </div>
//                 <div className="border-t-2 border-white py-4 mt-4 sm:border-t-1 sm:py-2 md:border-t-2 md:py-4 transition-all duration-300 group-hover:border-green-800">
//                   <p>{item.description}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ParallaxComponent;
