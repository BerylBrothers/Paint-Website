import React from "react";
import PageTitle from "@/components/PageTitle";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import EmbeddedMap from "@/components/EmbeddedMap";

const cards = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    info: "9570-039-03904",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    info: "123 oak st.",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    info: "Service@TreeCutting.com",
  },
];

const page = () => {
  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="Contact" />
      </div>
      <div className="flex justify-center items-center mx-auto container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
          {cards.map((card, index) => {
            return (
              <div
                className="flex justify-center items-center border bg-green-800 text-white border-black h-[350px] w-[350px]"
                key={index}
              >
                <div className="flex flex-col justify-center items-center">
                  <h3 className="py-2">{card.icon}</h3>
                  <h3 className="py-2">{card.title}</h3>
                  <p>{card.info}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex xl:flex-row flex-col justify-between items-center ">
        {/* text container */}
        <div className="relative flex xl:flex-row flex-col justify-center items-center border forest-bg-1 border-black  w-full xl:w-[50%] h-[85vh] xl:h-[70vh]">
          <div className="absolute inset-0 opacity-60 bg-black "></div>
          <form
            className="flex flex-col gap-6 p-10 z-10"
            // onSubmit={handleSubmit}
          >
            <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center">
              <p className="text-white py-2">
                Professional Land & Tree Maintenance
              </p>
              <div className=" flex justify-center items-center border-green-800 border-b-2 w-16 "></div>
            </div>
            <h2 className="text-white">Contact</h2>

            {/* input fields */}
            <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-6 ">
              <Input
                name="firstname"
                type="text"
                placeholder="First Name"
                // value={formData.firstname}
                // onChange={handleInputChange}
                className="bg-white text-black placeholder-gray-500"
              />
              <Input
                name="lastname"
                type="text"
                placeholder="Last Name"
                // value={formData.lastname}
                // onChange={handleInputChange}
                className="bg-white text-black"
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                // value={formData.email}
                // onChange={handleInputChange}
                className="bg-white text-black"
              />
              <Input
                name="phone"
                type="phone"
                placeholder="Phone Number"
                // value={formData.phone}
                // onChange={handleInputChange}
                className="bg-white text-black"
              />
            </div>

            {/* Select dropdown
            <Select value={formData.service} onValueChange={handleServiceChange}>
              <SelectTrigger className="w-full rounded-xl">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Select a service</SelectLabel>
                  <SelectItem value="Web-Dev">Web Development</SelectItem>
                  <SelectItem value="Ui/UX">UI/UX</SelectItem>
                  <SelectItem value="Logo-Design">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select> */}

            {/* Text Area */}
            <Textarea
              name="message"
              className="h-[200px] text-black bg-white"
              placeholder="Type your message here."
              // value={formData.message}
              // onChange={handleInputChange}
            />

            {/* Submit button */}
            <div className="flex xl:justify-start justify-center">
              <button type="submit" className="button py-2">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* carousel container */}
        <div className="relative flex flex-col justify-center items-center w-full xl:w-[50%] forest-bg-2 h-[85vh] xl:h-[70vh]">
          <div className="absolute inset-0 opacity-60 bg-green-300 "></div>
          <div className="z-10" style={{ width: "100%", height: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509123!2d144.9537353153164!3d-37.81627997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11f1b3%3A0x5045675218ceed30!2sMelbourne%20CBD%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="z-10"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
