import React from "react";

const BottomBar = () => {
  return (
    <section className="text-white rainbow-header border-t border-white">
      <div className="flex flex-row container mx py-2 justify-center">
        <div className="flex gap-4 justify-center items-center">
          <p className="text-[10px] md:text-base whitespace-nowrap">
            Web Design by{" "}
            <a href="https://www.berylbrothers.com/">Beryl Brothers</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BottomBar;
