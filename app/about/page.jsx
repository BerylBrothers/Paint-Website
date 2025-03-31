import React from "react";
import PageTitle from "@/components/PageTitle";

const page = () => {
  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="About Us" />
      </div>
      <div className="container">About</div>
    </section>
  );
};

export default page;
