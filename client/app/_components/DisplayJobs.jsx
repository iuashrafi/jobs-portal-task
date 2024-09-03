"use client";

import { jobsData } from "../data";
import JobCard from "./JobCard";

const DisplayJobs = ({ jobs }) => {
  return (
    <section className="p-4 md:px-0 py-16 container bg-green-30 mx-auto grid grid-cols-12 gap-6">
      {jobsData.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </section>
  );
};

export default DisplayJobs;
