import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide Job Title."],
    },
    company: {
      type: String,
      required: [true, "Please provide Company name."],
    },
    location: {
      type: String,
      required: [true, "Please select Job Location."],
    },
    type: {
      type: String,
      required: [true, "Please select Job Type."],
    },
    salaryMin: {
      type: Number,
    },
    salaryMax: {
      type: Number,
    },
    deadline: {
      type: String,
      required: [true, "Please select Application Deadline."],
    },
    description: {
      type: String,
      required: [true, "Please provide Job Title."],
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
