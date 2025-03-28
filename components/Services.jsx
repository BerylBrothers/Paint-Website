import React from "react";

const Services = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/tree-image-7-resize.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto h-full flex items-center justify-center z-10">
        <div className="relative flex flex-col xl:flex-row justify-center items-center w-full space-y-8 xl:space-x-8 xl:space-y-0">
          {/* Video iframe centered */}
          <div className="flex justify-center items-center w-full">
            <div className="relative w-full max-w-[800px] pb-[56.25%]">
              {" "}
              {/* 16:9 aspect ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/WTkuJzGIDoM"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* Text content centered */}
          <div className="flex flex-col justify-center items-center text-left p-6 text-white">
            <div className="text-center xl:text-left">
              <div className="p-6">
                <p className="py-2">Professional Land & Tree Maintenance</p>
                <div className=" border-green-800 border-b-2 w-16 "></div>
              </div>
              <h2 className="p-6 max-w-full xl:max-w-[400px] text-center xl:text-left">
                Tree Removal Is An Easy Task
              </h2>
              <p className="max-w-[600px] p-6 text-center xl:text-left">
                Higuera's tree service is proud to serve the community with
                competitive prices.
                <br />
                <br />
                Since the start of our company, we have strived to obtain the
                best quality tools so that the jobs are done to the highest
                standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
