"use client";
import { useState, useEffect } from "react";
import { RangeSlider } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { Select } from "@mantine/core";

const Search = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  const [salaryRange, setSalaryRange] = useState([0, 100]);

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
      <form className="container mx-auto md:h-[48px] grid grid-cols-12 gap-4 bg-fuchsia-00">
        <label className="col-span-12 md:col-span-3 flex justify-start items-center  md:border-r-2 border-[#EAEAEA] px-4">
          <img src="/icons/search-icon.svg" alt="search icon" className="" />
          <div className="flex-grow px-3">
            <input
              type="text"
              placeholder="Search By Job Title, Role"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-2 pt-1 outline-none font-medium leading-5 text-[#686868]"
            />
          </div>
        </label>

        <label className="col-span-12 md:col-span-3 flex justify-start items-center  md:border-r-2 border-[#EAEAEA] px-4">
          <img src="icons/location-icon.svg" alt="location" className="" />
          <div className="flex-grow px-3">
            <input
              type="text"
              placeholder="Preferred Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-2 pt-1 outline-none font-medium leading-5 text-[#686868]"
            />
          </div>
        </label>
        <label className="col-span-12 md:col-span-3 flex justify-start items-center  md:border-r-2 border-[#EAEAEA] px-4">
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
        <label className="relative px-4 md:px-0 col-span-12 md:col-span-3 flex flex-col items-center bg-gray-00">
          <div className="md:absolute md:-top-3 flex justify-between items-center bg-red-30 w-full">
            <span className="text-[16px] leading-5 font-semibold">
              Salary Per Month
            </span>
            <span className="text-[16px] leading-5 font-semibold">
              ₹{salaryRange[0]}k - ₹{salaryRange[1]}k
            </span>
          </div>
          <div className="bg-red-20 pt-4 pb-3 w-full">
            <RangeSlider
              size={2}
              thumbSize={14}
              showLabelOnHover={false}
              minRange={2}
              min={0}
              max={100}
              step={1}
              defaultValue={[10, 30]}
              color="dark"
              onChange={(val) => {
                console.log("value = ", val);
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
