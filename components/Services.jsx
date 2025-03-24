import React from "react";

const Services = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/images/tree-image-7.jpg")' }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="container mx-auto h-full flex items-center justify-center z-10">
        <div className="relative flex flex-col xl:flex-row justify-center items-center w-full space-y-8 xl:space-x-8 xl:space-y-0">
          {/* Video iframe centered */}
          {/* <div className="flex justify-center items-center">
            <iframe
              width="900"
              height="600"
              src="https://www.youtube-nocookie.com/embed/WTkuJzGIDoM"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div> */}

          {/* Text content centered */}
          <div className="flex flex-col justify-center items-center text-left p-6 text-white">
            <div className="text-center xl:text-left">
              <h5 className="p-6">Professional Land & Tree Maintenance</h5>
              <h2 className="p-6 max-w-[400px] text-center xl:text-left">
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
