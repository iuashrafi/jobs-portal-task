"use client";
import { useForm } from "react-hook-form";
import { initialJobState } from "../data";
import { createJob } from "@/lib/backendCalls";
import InputField from "./forms/InputField";
import DateField from "./forms/DateField";
import TextAreaField from "./forms/TextAreaField";
import SelectField from "./forms/SelectField";

const CreateJobForm2 = ({ handleNewJob, closeModel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: initialJobState,
  });

  const salaryMinValue = watch("salaryMin");
  const salaryMaxValue = watch("salaryMax");

  const onSubmit = async (data) => {
    console.log("form data=", data);

    try {
      const response = await createJob(data);
      console.log("Job Created Successfully:", response);
      closeModel();
      reset(); // Reset form
      handleNewJob((prev) => [...prev, response]);
    } catch (error) {
      console.error("Error creating job:", error);
    }
  };

  return (
    <>
      <div className="h-full w-full py-4 px-5">
        <h3 className="text-2xl font-bold text-gray-900 text-center pb-12">
          Create Job Opening
        </h3>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-12 gap-4"
        >
          <InputField
            name="title"
            label="Job Title"
            placeholder="Full Stack Developer"
            control={control}
            rules={{
              required: "Job title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters long",
              },
              maxLength: {
                value: 50,
                message: "Title must not exceed 50 characters",
              },
            }}
          />

          <InputField
            name="company"
            label="Company"
            placeholder="Amazon, Microsoft, Swiggy"
            control={control}
            rules={{
              required: "Company name is required",
            }}
          />

          <InputField
            name="location"
            label="Location"
            placeholder="Choose Preferred Location"
            control={control}
            rules={{
              required: "Location is required",
            }}
          />

          <SelectField
            name="jobType"
            label="Job Type"
            placeholder="Choose job type"
            control={control}
            rules={{ required: "Job type is required" }}
            data={["Internship", "FullTime", "Partime", "Contract"]}
          />

          <label className="col-span-12 md:col-span-6 flex flex-col group">
            <span className="text-xl font-semibold text-[#636363] transition-colors duration-300 group-focus-within:text-[#222222]">
              Salary Range
            </span>
            <div className="flex flex-row items-center justify-between gap-2">
              <div
                className={`w-full flex space-x-1 rounded-lg border ${
                  errors.salaryMin ? "border-red-500" : " border-[#BCBCBC] "
                }`}
              >
                <img src="/icons/salary.svg" alt="" className="pl-3 pr-2" />
                <input
                  type="text"
                  placeholder="₹0"
                  className="w-full rounded-lg pl-0 pr-3 py-3 outline-none text-[#222222] font-semibold text-lg"
                  {...register("salaryMin", {
                    required: "Required",
                  })}
                />
              </div>
              <div
                className={`w-full flex space-x-1 rounded-lg border focus:outline-[#222222]  ${
                  errors.salaryMax ? "border-red-500" : " border-[#BCBCBC] "
                }`}
              >
                <img src="/icons/salary.svg" alt="" className="pl-3 pr-2" />
                <input
                  type="text"
                  placeholder="₹12,00,000"
                  className="w-full rounded-lg pl-0 pr-3 py-3 border-none outline-none focus:outline-none text-[#222222] font-semibold text-lg"
                  {...register("salaryMax", {
                    required: "Required",
                    validate: (value) =>
                      parseInt(value, 10) > parseInt(salaryMinValue, 10) ||
                      "Max salary should be greater than Min salary",
                  })}
                />
              </div>
            </div>
            <div className="flex justify-between">
              {errors.salaryMin && (
                <span className="text-red-600 text-sm">
                  {errors.salaryMin.message}
                </span>
              )}
              {errors.salaryMax && (
                <span className="text-red-600 text-sm">
                  {errors.salaryMax.message}
                </span>
              )}
            </div>
          </label>

          <DateField
            name="deadline"
            label="Application Deadline"
            control={control}
            placeholder="Application Deadline"
            rules={{
              required: "Deadline is required",
            }}
          />

          <TextAreaField
            name="description"
            label="Job Description"
            placeholder="Please share a description to let the candidate know more about the job role"
            control={control}
            rules={{
              required: "Description is required",
            }}
          />

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
              type="submit"
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

export default CreateJobForm2;
