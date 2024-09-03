"use client";

const JobCard = ({ job }) => {
  return (
    <div
      className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3  p-4 rounded-xl bg-white"
      style={{
        boxShadow: "0px 0px 14px rgba(211, 211, 211, 0.15)",
        //   height: "360px"
      }}
    >
      <div className="flex justify-between">
        <div
          className="p-2 rounded-[13.18px]"
          style={{
            boxShadow: "0px 0px 10.25px rgba(148, 148, 148, 0.25)",
            border: "1px solid #FFFFFF",
            background: "linear-gradient(180deg, #FEFEFD 0%, #F1F1F1 100%)",
          }}
        >
          <img
            src={`/companies/${job.company?.toLowerCase()}.png`}
            alt="company"
            className="h-16"
          />
        </div>
        <div>
          <span className="bg-[#B0D9FF] rounded-lg py-[7px] px-[10px] font-medium text-[14px] leading-[18.9px]">
            24h Ago
          </span>
        </div>
      </div>

      <div className="font-bold text-xl py-4">{job.title}</div>
      <div className="flex gap-4 items-center pb-3">
        <div className="flex gap-1 items-center">
          <img src="icons/experience.png" className="h-[15.3px] w-[18.9px]" />
          <span className="text-sm 2xl:text-base">1-3 yr</span>
        </div>
        <div className="flex gap-1 items-center">
          <img
            src="icons/location-type.png"
            className="h-[15.3px] w-[18.9px]"
          />
          <span className="text-sm 2xl:text-base">{job.location}</span>
        </div>
        <div className="flex gap-1 items-center">
          <img src="icons/stack.png" className="h-[15.3px] w-[18.9px]" />
          <span className="text-sm 2xl:text-base">
            {job.salaryMax / 100000} LPA
          </span>
        </div>
      </div>

      <ul className="list-disc pb-2 pl-4">
        {/* {job.description.map((description, index) => (
          <li key={index + job._id}>{description}</li>
          ))} */}
        <li>{job.description}</li>
      </ul>

      <button className="bg-[#00AAFF] hover:bg-[#00AAFF]/90 text-white w-full rounded-lg py-3 px-3 text-center">
        Apply Now
      </button>
    </div>
  );
};

export default JobCard;
