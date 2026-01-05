import { useState } from "react";

function FindJobs({ data }) {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // 🔍 FILTER LOGIC
  const filteredJobs = data.filter((job) => {
    const matchSearch =
      job.name.toLowerCase().includes(search.toLowerCase()) ||
      job.pragra.toLowerCase().includes(search.toLowerCase());

    const matchLocation =
      location === "" || job.location === location;

    const matchJobType =
      jobType === "" || job.time === jobType;

    return matchSearch && matchLocation && matchJobType;
  });

  return (
    <>
      {/* HERO SECTION */}
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(100, 46, 197, 0.6), rgba(100, 46, 197, 0.6)), url('https://i.pinimg.com/1200x/3b/83/8e/3b838e8cfa9a10073c9b9efa3dce1268.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "550px",
        }}
      >
        <h1 className="text-7xl font-bold text-white text-center pt-16">
          Find Your Dream Job
        </h1>
        <p className="text-white text-2xl text-center pt-6">
          Thousands of new jobs available every day
        </p>

        {/* SEARCH BOX */}
        <div className="w-full max-w-[1250px] bg-white rounded-xl shadow-2xl mt-10 mx-auto p-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Search */}
            <input
              type="text"
              placeholder="Search job title or company"
              className="w-[350px] h-[50px] px-4 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-purple-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Location */}
            <select
              className="w-[200px] h-[50px] px-4 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-purple-500"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="UAE">UAE</option>
              <option value="Somalia">Somalia</option>
            </select>

            {/* Job Type */}
            <select
              className="w-[200px] h-[50px] px-4 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-purple-500"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>

          {/* FILTER TAGS */}
          <div className="flex flex-wrap gap-3 justify-center mt-4">
            {search && (
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                Search: {search}
              </span>
            )}
            {location && (
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                Location: {location}
              </span>
            )}
            {jobType && (
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                Type: {jobType}
              </span>
            )}
          </div>
        </div>

        {/* waa div last part in hero */}
        <div className="flex justify-center px-4 gap-15 mt-18">
        <div className="w-full max-w-[360px] h-[140px] bg-white rounded-xl mt-8 shadow-lg text-center pt-7">
            <h1 className="text-4xl font-bold text-purple-600">6</h1>
            <p className="text-xl text-gray-700 font-medium mt-1">Available Jobs</p>
        </div>
        <div className="w-full max-w-[360px] h-[140px] bg-white rounded-xl mt-8 shadow-lg text-center pt-7 ">
           <h1 className="text-4xl font-bold text-purple-600">50+</h1>
           <p className="text-xl text-gray-700 font-medium mt-1">Companies</p>
        </div>
        <div className="w-full max-w-[360px] h-[140px] bg-white rounded-xl mt-8 shadow-lg text-center pt-7">
          <h1 className="text-4xl font-bold text-purple-600">1000+</h1>
          <p className="text-xl text-gray-700 font-medium mt-1">Successful Hires</p>
        </div>
        </div>



        {/* div waa ta backgroundka */}
      </div>




      {/* HEADER */}
      <div className="flex justify-between items-center mt-26 px-20">
        <h2 className="text-3xl font-semibold">Latest Jobs</h2>
        <p className="bg-[#ffccee] px-6 py-2 rounded-md text-xl">
          {filteredJobs.length} Jobs Found
        </p>
      </div>

      {/* JOB CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-20 mt-14">
        {filteredJobs.map((jobs) => (
          <div
            key={jobs.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6"
          >
            <div className="flex justify-between items-start">
              <img
                src={jobs.photo}
                alt={jobs.name}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <span className="text-3xl text-gray-400 hover:text-red-500 cursor-pointer">
                ♡
              </span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold">{jobs.name}</h3>
            <p className="text-gray-500 text-lg">{jobs.pragra}</p>

            <div className="mt-5 space-y-2 text-lg text-gray-600">
              <div>📍 {jobs.location}</div>
              <div>💼 {jobs.time}</div>
              <div>💰 ${jobs.money}</div>
              <div>⏰ {jobs.Ago}</div>
            </div>

            <button className="mt-6 w-full h-[45px] bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-lg">
              View Details →
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FindJobs;
