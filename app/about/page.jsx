import React from "react";
import PageTitle from "@/components/PageTitle";
import Image from "next/image";

const items = [
  {
    picture: "/images/paint-team-2.jpg",
    name: "Eric Lopez",
    title: "Painter",
  },
  {
    picture: "/images/paint-team-1.jpg",
    name: "John Phillips",
    title: "Painter",
  },
  {
    picture: "/images/paint-team-4.jpg",
    name: "Lance Baker",
    title: "Painter",
  },
];

const page = () => {
  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="About Us" />
      </div>
      <div className="container mx-auto ">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-4 py-4">
          {/* Text Section */}
          <div className="flex flex-col xl:order-1 order-2 justify-center items-center text-left p-6">
            <div className="text-center xl:text-left">
              <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center p-6">
                <p className="py-2 whitespace-nowrap">
                  Professional Land & Tree Maintenance
                </p>
                <div className=" flex justify-center items-center border-[#00008B] border-b-2 w-16 "></div>
              </div>
              <h2 className=" p-6 max-w-full xl:max-w-[400px]">
                Our Mission <span className="text-[#00008B]">Statement </span>
              </h2>
              <p className="max-w-[600px] p-6">
                After years of working in the tree industry, Carlos and Amina
                felt led to serve our local Central Florida community as a team.
                We are passionate about beautifying our community and keeping
                homes safe from potential tree damage. We strive to set
                ourselves apart by leaving each property more beautiful and safe
                than when we arrived. We pour our hearts and soul into the
                business and our customers can feel the difference. You may also
                see our two kids and dog occasionally checking on the site or
                bringing lunch!
                <br />
                <br />
                With years of experience in the industry, we are equipped to
                handle a wide range of tree care services, from pruning and
                trimming to complete tree removal and stump grinding. We take
                great pride in our commitment to safety and environmental
                responsibility, ensuring that all our practices are sustainable
                and beneficial to the local ecosystem. Our passion for trees and
                dedication to our community drives us to provide exceptional
                service that not only enhances the beauty of your property but
                also promotes the health and longevity of your trees. Trust us
                to treat your landscape as if it were our own, delivering
                results that you can admire for years to come.
              </p>
            </div>
          </div>
          {/* Image Section */}

          <div className="flex flex-col xl:flex-row pt-6 pb-3 xl:pb-6 xl:order-1 order-1">
            <Image
              src={"/images/paint-about.jpg"}
              height={800}
              width={600}
              alt="Tree Image"
              className="max-h-[700px] w-auto"
            />
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-center items-center w-full forest-bg-2 h-[35vh]">
        <div className="absolute inset-0 opacity-60 bg-black "></div>
        {/* Display only the current testimonial */}
        <div className="relative z-10 ">
          <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 z-10 text-white ">
            <h2 className="flex justify-center items p-6 max-w-full xl:max-w-[450px] text-center">
              Call Us Today
            </h2>
            <h3 className="max-w-[600px]">9570 039 03904</h3>
            <div className="">
              <a href="#" className="button z-10">
                Hover me
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex justify-center items-center py-12">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center p-6">
            <p className="py-2">Professional Paint & House Maintenance</p>
            <div className="flex justify-center items-center border-[#00008B] border-b-2 w-16 "></div>
          </div>
          <div className="py-12">
            <h2>Our Painters</h2>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {items.map((item, index) => {
              return (
                <a href="/" key={index} className="group">
                  <div className="relative">
                    {/* Wrapper div around the image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.picture}
                        height={400}
                        width={400}
                        alt=""
                        className="transition-all duration-500 ease-in-out"
                      />
                      {/* Black overlay directly on the image */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    </div>

                    {/* Image text content */}
                    <div className="py-2">
                      <h3>{item.name}</h3>
                    </div>
                    <div className="border-[#00008B] border-b-2 w-16 "></div>
                    <div>
                      <p className="py-2">{item.title}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
