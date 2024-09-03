"use client";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Select } from "@mantine/core";
import { initialJobState } from "../data";
import { createJob } from "@/lib/backendCalls";

const CreateJobForm = ({ handleNewJob, closeModel }) => {
  // state and handlers for Job Creation form
  const [job, setJob] = useState(initialJobState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  // handling form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Job Details =", job);

      try {
        const response = await createJob(job);
        console.log("Job created successfully:", response);
        closeModel(); // closing the modal
        reset(); // Reset form
        // adding the new job to our current jobs state
        handleNewJob((prev) => [...prev, response]);
      } catch (error) {
        console.error("Error creating job:", error);
      }
    }
  };

  // basic form validation - just checking if the field is empty or not and for salary range
  function validateForm() {
    if (
      !job.title ||
      !job.company ||
      !job.location ||
      !job.jobType ||
      !job.salaryMin ||
      !job.salaryMax ||
      !job.deadline ||
      !job.description
    ) {
      alert("Please fill out all fields.");
      return false;
    }

    // Check if salaryMin is less than or equal to salaryMax
    if (parseInt(job.salaryMin, 10) > parseInt(job.salaryMax, 10)) {
      alert("Minimum salary should be less than or equal to maximum salary.");
      return false;
    }

    return true;
  }

  const reset = () => {
    setJob(initialJobState);
  };

  return (
    <>
      <div className="h-full w-full py-4 px-5">
        <h3 className="text-2xl font-bold text-gray-900 text-center pb-12">
          Create Job Opening
        </h3>

        <form className="grid grid-cols-12 gap-4">
          <label className="col-span-12 md:col-span-6 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Job Title
            </span>
            <input
              type="text"
              placeholder="Full Stack Developer"
              name="title"
              value={job.title}
              onChange={handleInputChange}
              className="w-full rounded-lg px-3 py-3 border border-[#BCBCBC] focus:outline-[#222222] text-[#222222] font-semibold text-lg"
            />
          </label>
          <label className="col-span-12 md:col-span-6 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Company
            </span>
            <input
              type="text"
              placeholder="Amazon, Microsoft, Swiggy"
              name="company"
              value={job.company}
              onChange={handleInputChange}
              className="w-full rounded-lg px-3 py-3 border border-[#BCBCBC] focus:outline-[#222222] text-[#222222] font-semibold text-lg"
            />
          </label>
          <label className="col-span-12 md:col-span-6 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Location
            </span>
            <input
              type="text"
              placeholder="Choose Preferred Location"
              name="location"
              value={job.location}
              onChange={handleInputChange}
              className="w-full rounded-lg px-3 py-3 border border-[#BCBCBC] focus:outline-[#222222]  text-[#222222] font-semibold text-lg"
            />
          </label>
          <label className="col-span-12 md:col-span-6 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Job Type
            </span>
            <Select
              radius="md"
              size="lg"
              withCheckIcon={false}
              placeholder="FullTime"
              data={["Internship", "FullTime", "Partime", "Contract"]}
              comboboxProps={{ dropdownPadding: 0, shadow: "lg" }}
              onChange={(_value) => {
                // console.log({ _value, option });
                setJob((prev) => ({ ...prev, jobType: _value }));
              }}
              rightSectionPointerEvents="none"
              rightSection={<IconChevronDown stroke={2} />}
            />
          </label>

          <label className="col-span-12 md:col-span-6 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Salary Range
            </span>
            <div className="flex flex-row items-center justify-between gap-2">
              <div className="w-full flex space-x-1 rounded-lg border border-[#BCBCBC]  ">
                <img src="/icons/salary.svg" alt="" className="pl-3 pr-2" />
                <input
                  type="text"
                  placeholder="₹0"
                  name="salaryMin"
                  value={job.salaryMin}
                  onChange={handleInputChange}
                  className="w-full rounded-lg pl-0 pr-3 py-3 outline-none text-[#222222] font-semibold text-lg"
                />
              </div>
              <div className="w-full flex space-x-1 rounded-lg border border-[#BCBCBC] focus:outline-[#222222]">
                <img src="/icons/salary.svg" alt="" className="pl-3 pr-2" />
                <input
                  type="text"
                  placeholder="₹12,00,000"
                  name="salaryMax"
                  value={job.salaryMax}
                  onChange={handleInputChange}
                  className="w-full rounded-lg pl-0 pr-3 py-3 border-none outline-none focus:outline-none  text-[#222222] font-semibold text-lg"
                />
              </div>
            </div>
          </label>

          <label className="col-span-12 md:col-span-6 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Application Deadline
            </span>
            <input
              type="date"
              name="deadline"
              value={job.deadline}
              onChange={handleInputChange}
              className="w-full rounded-lg px-3 py-3 border border-[#BCBCBC] focus:outline-[#222222]  text-[#222222] font-semibold text-lg"
            />
          </label>

          <label className="col-span-12 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Job Description
            </span>
            <textarea
              rows={5}
              name="description"
              value={job.description}
              onChange={handleInputChange}
              placeholder="Please share a description to let the candidate know more about the job role"
              className="w-full rounded-lg px-3 py-3 border border-[#BCBCBC] focus:outline-[#222222] text-[#222222] font-semibold text-lg"
            ></textarea>
          </label>

          <div className="col-span-12 flex justify-between items-center pt-6">
            <button
              className="bg-white hover:bg-gray-900/10 border-[1.5px] border-[#222222]  py-2 md:py-4  px-3 sm:px-4  md:px-[60px] rounded-[10px]  flex items-center space-x-3"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <span className="text-base sm:text-lg md:text-xl text-[#222222] font-semibold">
                Save Draft
              </span>
              <img src="/icons/double-arrows.svg" />
            </button>
            <button
              onClick={handleSubmit}
              className="bg-[#00AAFF] hover:bg-[#00AAFF]/90 py-2 md:py-4 px-3 sm:px-4  md:px-[60px] rounded-[10px] flex items-center space-x-3"
            >
              <span className="text-base sm:text-lg md:text-xl text-white font-semibold">
                Publish
              </span>
              <img src="/icons/arrows.svg" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateJobForm;
