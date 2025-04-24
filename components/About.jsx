import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white z-10 text-black">
      <div className="container mx-auto pt-12 pb-6">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-4">
          {/* Image Section */}
          <div className="flex flex-col xl:flex-row py-12 ">
            <Image
              src={"/images/paint-image-1.jpg"}
              height={600}
              width={600}
              alt="Tree Image"
              className="max-h-[700px] w-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 ">
            <div className="text-center xl:text-left ">
              <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center p-6">
                <p className="py-2">Professional Land & Tree Maintenance</p>
                <div className=" flex justify-center items-center border-[#00008B] border-b-2 w-16 "></div>
              </div>
              <h2 className=" p-6 max-w-full xl:max-w-[400px]">
                Tree Removal{" "}
                <span className="text-[#00008B]">Is An Easy Task </span>
              </h2>
              <p className="max-w-[600px] p-6">
                Higuera's tree service is proud to serve the comunity work at
                competitive prices.
                <br />
                <br />
                Since the start of our company we have strived to obtain the
                best quality tools so that the jobs are done to the highest
                standards.
              </p>
              <div className="p-6">
                <div id="container">
                  <button className="learn-more button-style">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
