"use client";
import { useState, useEffect } from "react";
import { RangeSlider } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Select } from "@mantine/core";

const Search = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const [salaryRange, setSalaryRange] = useState([0, 200]);

  useEffect(() => {
    console.log({
      title,
      location,
      type,
      salaryRange,
    });
    const query = new URLSearchParams({
      title,
      location,
      type,
      minSalary: salaryRange[0] * 1000,
      maxSalary: salaryRange[1] * 1000,
    }).toString();

    onSearch(query);
  }, [title, location, type, salaryRange]);

  return (
    <section className="bg-red-30 bg-white py-3  flex items-center justify-center">
      <form className="container mx-auto lg:h-[48px] grid grid-cols-12 gap-4 bg-fuchsia-00">
        <label className="bg-green-20 col-span-12 sm:col-span-6 lg:col-span-3 flex justify-start items-center  lg:border-r-2 border-[#EAEAEA] px-4">
          <img src="/icons/search-icon.svg" alt="search icon" className="" />
          <div className="flex-grow px-3">
            <input
              type="text"
              placeholder="Search By Job Title, Role"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 outline-none font-medium leading-5 text-[#686868]"
            />
          </div>
        </label>

        <label className=" bg-green-40 col-span-12 sm:col-span-6 lg:col-span-3 flex justify-start items-center  lg:border-r-2 border-[#EAEAEA] px-4">
          <img src="icons/location-icon.svg" alt="location" className="" />
          <div className="flex-grow px-3">
            <input
              type="text"
              placeholder="Preferred Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 outline-none font-medium leading-5 text-[#686868]"
            />
          </div>
        </label>
        <label className="md:px-3 bg-red-30 col-span-12 sm:col-span-6 lg:col-span-3 flex justify-start items-center  lg:border-r-2 border-[#EAEAEA]">
          <Select
            variant="unstyled"
            size="lg"
            withCheckIcon={false}
            placeholder="FullTime"
            data={["Internship", "FullTime", "Partime", "Contract"]}
            comboboxProps={{ dropdownPadding: 0, shadow: "lg" }}
            onChange={(_value) => setType(_value)}
            rightSectionPointerEvents="none"
            rightSection={<IconChevronDown stroke={2} />}
            leftSectionPointerEvents="none"
            leftSection={
              <img
                src="icons/job-type-icon.svg"
                alt="search icon"
                className=""
              />
            }
          />
        </label>
        <label className="bg-red-60 col-span-12 sm:col-span-6 lg:col-span-3 relative px-4 md:px-0 lg:px-2 flex flex-col items-center bg-gray-00">
          <div className="md:absolute md:-top-3 flex justify-between items-center bg-red-30 w-full">
            <span className="text-sm lg:text-[16px] leading-5 font-semibold">
              Salary Per Month
            </span>
            <span className="text-sm lg:text-[16px] leading-5 font-semibold">
              ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
            </span>
          </div>
          <div className=" pt-6 pb-3 w-full">
            <RangeSlider
              size={2}
              thumbSize={14}
              showLabelOnHover={false}
              minRange={2}
              min={0}
              max={200}
              step={1}
              defaultValue={salaryRange}
              color="dark"
              onChange={(val) => {
                setSalaryRange(val);
              }}
            />
          </div>
        </label>
      </form>
    </section>
  );
};

export default Search;
