import express from "express";
import Job from "../models/Job.js";
const router = express.Router();

/**
 * @access Public
 * @description API endpoint to create a job
 */
router.post("/", async (req, res) => {
  try {
    const {
      title,
      company,
      location,
      jobType,
      salaryMin,
      salaryMax,
      deadline,
      description,
    } = req.body;

    // Validate that salaryMin <= salaryMax
    if (salaryMin > salaryMax) {
      return res.status(400).json({
        message:
          "Minimum salary should be less than or equal to maximum salary.",
      });
    }

    // Create a new job instance
    const job = new Job({
      title,
      company,
      location,
      type: jobType,
      salaryMin,
      salaryMax,
      deadline,
      description,
    });

    // Save the job to the database
    const createdJob = await job.save();

    // Respond with the created job
    res.status(201).json(createdJob);
  } catch (error) {
    console.error("Error creating job:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

/**
 * @access Public
 * @description API endpoint to fetch all the jobs available or search for jobs
 */
router.get("/", async (req, res) => {
  try {
    const { title, location, type, minSalary, maxSalary } = req.query;

    const query = {};

    if (title && title.trim()) {
      query.title = { $regex: title, $options: "i" };
    }

    if (location && location.trim()) {
      query.location = { $regex: location, $options: "i" };
    }

    if (type && type.trim()) {
      query.type = { $regex: type, $options: "i" };
    }

    if (minSalary || maxSalary) {
      // Convert salary from thousands per month to lakhs per year
      const minLPA = minSalary ? parseInt(minSalary, 10) * 12 : null;
      const maxLPA = maxSalary ? parseInt(maxSalary, 10) * 12 : null;
      // Search by salary range
      if (minLPA || maxLPA) {
        query.$and = [];
        if (minLPA) {
          query.$and.push({ salaryMin: { $gte: minLPA } });
        }
        if (maxLPA) {
          query.$and.push({ salaryMax: { $lte: maxLPA } });
        }
      }
    }

    const jobs = await Job.find(query);
    // console.log("query obj=", query); // debug
    res.status(200).json(jobs);
  } catch (error) {
    console.log("Error fetching jobs:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

export default router;
