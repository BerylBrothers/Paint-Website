import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-white z-10 text-black">
      <div className="container mx-auto pt-6">
        <div className="flex xl:flex-row flex-col justify-between items-center gap-4">
          {/* Image Section */}
          <div className="flex flex-col xl:flex-row py-6 xl:py-12 p-6">
            <Image
              src={"/images/paint-image-1.jpg"}
              height={600}
              width={600}
              alt="Tree Image"
              className="max-h-[700px] w-auto"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 xl:p-14 ">
            <div className="text-center xl:text-left ">
              <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center p-6">
                <p className="py-2">Professional Paint & House Maintenance</p>
                <div className=" flex justify-center items-center border-[#00008B] border-b-2 w-16 "></div>
              </div>
              <h2 className=" p-6 max-w-full xl:max-w-[400px]">
                House Painting{" "}
                <span className="text-[#00008B]">Is An Easy Task </span>
              </h2>
              <p className="max-w-[500px] p-6">
                This house painting service specializes in enhancing the beauty
                and value of residential properties through high-quality
                painting solutions. With a team of skilled professionals, they
                offer a comprehensive range of services, including interior and
                exterior painting, surface preparation, and color consultations.
                <br />
                <br />
                Dedicated to using premium, eco-friendly materials, the service
                ensures that every project is completed with attention to detail
                and craftsmanship. They understand the importance of a home’s
                aesthetic and work closely with clients to bring their vision to
                life, whether it’s a single room refresh or a complete exterior
                transformation.
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
