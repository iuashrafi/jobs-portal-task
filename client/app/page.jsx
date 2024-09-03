"use client";
import { useState, useEffect } from "react";
import Navbar from "./_components/Navbar";
import { getJobs } from "@/lib/backendCalls";
import DisplayJobs from "./_components/DisplayJobs";

export default function Home() {
  const [jobs, setJobs] = useState([]);

  // fetching all jobs from our database
  const fetchJobs = async (query = "") => {
    try {
      // console.log("query= ", query);
      const response = await getJobs(query);
      console.log("fetch jobs response = ", response);
      setJobs(response);
    } catch (error) {
      console.log("Error fetching jobs : ", error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <main className="bg-[#FBFBFF] min-h-screen">
      <Navbar handleNewJob={setJobs} onSearch={fetchJobs} />
      <DisplayJobs jobs={jobs} />
    </main>
  );
}
