import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto pt-6 pb-12">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-4">
          {/* Text Section */}
          <div className="flex flex-col xl:order-1 order-2 justify-center items-center text-left p-6">
            <div className="text-center xl:text-left">
              <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center p-6">
                <p className="py-2">Professional Paint & House Maintenance</p>
                <div className=" flex justify-center items-center border-[#00008B] border-b-2 w-16 "></div>
              </div>
              <h2 className=" p-6 max-w-full xl:max-w-[400px]">
                House Painting{" "}
                <span className="text-[#00008B]">Is An Easy Task </span>
              </h2>
              <p className="max-w-[600px] p-6">
                Higuera's paint service is proud to serve the comunity work at
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
          {/* Image Section */}

          <div className="flex flex-col xl:flex-row py-12 xl:order-1 order-1">
            <Image
              src={"/images/paint-image-2.jpg"}
              height={800}
              width={600}
              alt="Tree Image"
              className="max-h-[700px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
