"use client";

import { useState } from "react";
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
    info: "9570 039 03904",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    info: " Longwood, FL 32750",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    info: "Services@PaintService.com",
  },
];

const page = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    selectedServices: [], // Array to store selected services
  });

  // Handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle multiple checkboxes for services
  const handleServiceChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => {
      const updatedServices = checked
        ? [...prevData.selectedServices, name] // Add to array if checked
        : prevData.selectedServices.filter((service) => service !== name); // Remove from array if unchecked

      return { ...prevData, selectedServices: updatedServices };
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "bb4bf156-51a3-4a45-b1fe-5ebad937ad73");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (response.ok) {
      if (result.success) {
        alert("Email sent successfully!");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
          selectedServices: [],
        });
      } else {
        alert(
          "Error sending email. Please check the console for more details."
        );
      }
    } else {
      alert(
        `Error sending email. HTTP error: ${response.status} ${response.statusText}`
      );
    }
  };

  return (
    <section className=" flex flex-col justify-center ">
      <div>
        <PageTitle title="Contact" />
      </div>
      <div className="flex justify-center items-center mx-auto container py:0 xl:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
          {cards.map((card, index) => {
            return (
              <div
                className="flex justify-center items-center border bg-[#00008B] text-white border-black h-[350px] w-[350px]"
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
        <div className="relative flex xl:flex-row flex-col justify-center items-center border forest-bg-1 border-black  w-full xl:w-[50%] h-[125vh] xl:h-[110vh]">
          <div className="absolute inset-0 opacity-60 bg-black "></div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 p-10 z-10"
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
                className="bg-white text-black placeholder-gray-500"
                onChange={handleInputChange}
                value={formData.firstname}
              />
              <Input
                name="lastname"
                type="text"
                placeholder="Last Name"
                className="bg-white text-black"
                onChange={handleInputChange}
                value={formData.lastname}
              />
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                className="bg-white text-black"
                onChange={handleInputChange}
                value={formData.email}
              />
              <Input
                name="phone"
                type="phone"
                placeholder="Phone Number"
                className="bg-white text-black"
                onChange={handleInputChange}
                value={formData.phone}
              />
            </div>

            <div className="text-white grid grid-cols-2 ">
              <p className="text-white col-span-2">
                Select Tree Removal Services
              </p>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="treeRemoval"
                  checked={formData.selectedServices.includes("treeRemoval")}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Tree Removal
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="treeTrimming"
                  checked={formData.selectedServices.includes("treeTrimming")}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Tree Trimming
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="stumpGrinding"
                  checked={formData.selectedServices.includes("strumpGrinding")}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Stump Grinding
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="hedgeTrimming"
                  checked={formData.selectedServices.includes("hedgeTrimming")}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Hedge Trimming
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="grading"
                  checked={formData.selectedServices.includes("grading")}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Grading
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="sodMulchInstallation"
                  checked={formData.selectedServices.includes(
                    "sodMulchInstallation"
                  )}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Sod/Mulch Installation
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="hardscaping"
                  checked={formData.selectedServices.includes("hardscaping")}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Hardscaping
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="landClearing"
                  checked={formData.selectedServices.includes("landClearing")}
                  onChange={handleServiceChange}
                  className="h-4 w-4"
                />
                Land Clearing
              </label>
            </div>

            {/* Text Area */}
            <Textarea
              name="message"
              className="h-[200px] text-black bg-white"
              placeholder="Type your message here."
              value={formData.message}
              onChange={handleInputChange}
            />

            {/* Submit button */}
            <div className="flex xl:justify-start justify-center">
              <button type="submit" className="button py-2">
                Request a Quote
              </button>
            </div>
          </form>
        </div>

        {/* carousel container */}
        <div className="relative flex flex-col justify-center items-center w-full xl:w-[50%] h-[125vh] xl:h-[110vh]">
          <div className="z-10" style={{ width: "100%", height: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27996.765416849335!2d-81.35320555!3d28.70173905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76c87fb061ddf%3A0x4bbf95ec0e15a33c!2sLongwood%2C%20FL%2032750!5e0!3m2!1sen!2sus!4v1745973555243!5m2!1sen!2sus"
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

<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1795352.9134898128!2d-81.646989!3d28.493136099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa111ef8c24fea42b%3A0xd110901a958cdad!2sRoots%20and%20Canopy%20Tree%20Service!5e0!3m2!1sen!2sus!4v1746139613145!5m2!1sen!2sus"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>;
