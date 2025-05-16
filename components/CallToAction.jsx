import React from "react";

const CallToAction = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full paint-bg-3 h-[35vh]">
      {/* Display only the current testimonial */}
      <div className="relative z-10 ">
        <div className="flex flex-col justify-center items-center text-center xl:text-left p-6 z-10 text-white ">
          <h2 className="flex justify-center items p-6 max-w-full xl:max-w-[450px] text-center">
            Call Us Today
          </h2>
          <h3 className="max-w-[600px]">9570 039 03904</h3>
          <div className="">
            <a href="#" className="button z-10">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
